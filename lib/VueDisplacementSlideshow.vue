<template>
  <div class="vue-displacement-slideshow" ref="slider" :style="{ width: '100%', height: '100%'}"></div>
</template>

<script>
// Import from source so webpack can do tree shaking
import {Scene} from 'three/src/scenes/Scene.js';
import {WebGLRenderer} from 'three/src/renderers/WebGLRenderer.js';
import {OrthographicCamera} from 'three/src/cameras/OrthographicCamera.js';
import {TextureLoader} from 'three/src/loaders/TextureLoader.js';
import {VideoTexture} from 'three/src/textures/VideoTexture.js';
import {LinearFilter, RepeatWrapping} from 'three/src/constants.js';
import {ShaderMaterial} from 'three/src/materials/ShaderMaterial.js';
import {PlaneBufferGeometry} from 'three/src/geometries/PlaneGeometry.js';
import {Mesh} from 'three/src/objects/Mesh.js';
import {Texture} from 'three/src/textures/Texture.js';
import {Vector2} from 'three/src/math/Vector2.js';

import {gsap} from 'gsap';

import {fragment, vertex} from "./shader.js";
import {mod} from './utils.js';
import * as THREE from "three";
import _ from "lodash";

export default {
  name: "vue-displacement-slideshow",
  props: {
    images: {
      required: true,
      type: Array,
      default: () => []
    },
    displacement: {
      required: true,
      type: String
    },
    intensity: {
      required: false,
      type: Number,
      default: 1
    },
    speedIn: {
      required: false,
      type: Number,
      default: 1
    },
    speedOut: {
      required: false,
      type: Number,
      default: 1
    },
    ease: {
      required: false,
      type: String,
      default: "expo.inOut"
    },
    preserveAspectRatio: {
      required: false,
      type: Boolean,
      default: true
    },
    isInteractive: {
      required: false,
      type: Boolean,
      default: false
    },
    interactionFactor: {
      required: false,
      type: Number,
      default: 1
    },
    interactionDuration: {
      required: false,
      type: Number,
      default: 1
    },
    angle: {
      required: false,
      type: Number,
      default: Math.PI / 4
    },
    startAsTransparent: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scene: new Scene(),
      renderer: new WebGLRenderer({antialias: false, alpha: true}),
      currentImage: 0,
      mat: null,
      textures: [],
      disp: null,
      nextImage: 0,
      imagesLoaded: [],
      isAnimating: false,
      currentTransition: null,
      mousePosition: {},
      previousMousePosition: null,
      rafID: null,
      mouseSpeed: {value: 0},
      loaded: false,
      videoAspect: false,
      firstLoading: false,
      screenOrientation: false,
      tVideo: [],
      blockVideoRender: false
    }
  },
  computed: {
    slider() {
      return this.$refs.slider
    },
    camera() {
      const camera = new OrthographicCamera(
          this.slider.offsetWidth / -2,
          this.slider.offsetWidth / 2,
          this.slider.offsetHeight / 2,
          this.slider.offsetHeight / -2,
          1,
          1000
      );
      camera.position.z = 1;
      // const canvas = renderer.domElement;
      // camera.aspect = canvas.clientWidth / canvas.clientHeight;
      // camera.updateProjectionMatrix();
      return camera;
    },
    videoCamera() {
      const camera = new OrthographicCamera(
          this.slider.offsetWidth / -2,
          this.slider.offsetWidth / 2,
          this.slider.offsetHeight / 2,
          this.slider.offsetHeight / -2,
          1,
          1000
      );
      camera.position.z = 1;
      // const canvas = renderer.domElement;
      // camera.aspect = 1920 / 1080;
      // camera.updateProjectionMatrix();
      return camera;
    },

  },
  methods: {
    initScene() {
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setClearColor(0xffffff, 0.0);
      this.renderer.setSize(this.slider.offsetWidth, this.slider.offsetHeight);
      this.$refs.slider.appendChild(this.renderer.domElement);
    },
    render() {
      this.renderer.render(this.scene, this.camera);
    },
    transitionIn() {
      this.currentTransition = gsap.to(this.mat.uniforms.dispFactor, {
        duration: this.speedIn,
        value: 1,
        ease: this.ease,
        onUpdate: this.render,
        onComplete: this.onAnimationEnd(true),
        paused: true
      });
      this.currentTransition.play();

      this.setImageResolution(this.speedIn);
    },
    transitionOut() {
      this.currentTransition = gsap.to(this.mat.uniforms.dispFactor, {
        duration: this.speedOut,
        value: 0,
        ease: this.ease,
        onUpdate: this.render,
        onComplete: this.onAnimationEnd(false),
        paused: true
      });
      this.currentTransition.play();

      this.setImageResolution(this.speedOut);
    },
    setImageResolution(duration) {
      gsap.to(this.mat.uniforms.imageResolution.value, {
        duration,
        x: this.textures[this.nextImage].image.naturalWidth,
        y: this.textures[this.nextImage].image.naturalHeight,
        ease: this.ease,
        onUpdate: this.render
      });
    },
    onAnimationEnd(shouldResetValues) {
      if(shouldResetValues){
        this.currentImage = this.nextImage;
        this.mat.uniforms.dispFactor.value = 0;
      }
      this.isAnimating = false;
      this.$emit("animationEnd");
      this.render();
    },
    assignTexturesToMaterial() {
      this.mat.uniforms.texture1.value = this.textures[this.currentImage];
      this.mat.uniforms.texture2.value = this.textures[this.nextImage];
    },
    previous() {
      if (this.isAnimating) {
        return;
      }
      // Skip animation if the materials are not ready
      if (this.mat === null) {
        this.currentImage = mod((this.currentImage - 1), (this.textures.length));
        return;
      }
      this.isAnimating = true;
      this.mat.uniforms.dispFactor.value = 1;
      this.nextImage = mod((this.currentImage - 1), (this.textures.length));
      this.mat.uniforms.texture1.value = this.textures[this.nextImage];
      this.mat.uniforms.texture2.value = this.textures[this.currentImage];

      this.mat.uniforms.texture1Alpha.value = this.textures[this.nextImage].alpha;
      this.mat.uniforms.texture2Alpha.value = this.textures[this.currentImage].alpha;

      this.transitionOut();
      this.currentImage = this.nextImage;
      this.setSize();
    },
    next(nextImage = null) {
      if (this.isAnimating) {
        return;
      }
      // Skip animation if the materials are not ready
      if (this.mat === null) {
        this.currentImage = mod((this.currentImage + 1), (this.textures.length));
        return;
      }
      this.isAnimating = true;
      this.mat.uniforms.dispFactor.value = 1;
      this.nextImage = nextImage !== null ? nextImage : mod((this.currentImage + 1), (this.textures.length));
      this.assignTexturesToMaterial();

      this.mat.uniforms.texture1Alpha.value = this.textures[this.currentImage].alpha;
      this.mat.uniforms.texture2Alpha.value = this.textures[this.nextImage].alpha;
      this.transitionIn();
      this.currentImage = this.nextImage;
      this.setSize();
    },
    async loadTextures() {
      const promises = [];
      if (this.startAsTransparent) {
        promises.push(this.insertTransparentTexture());
      }
      promises.push(this.images.map((image, index) => this.insertImage(image, index)));

      this.imagesLoaded = await Promise.all(promises);

      const loader = new TextureLoader();
      this.disp = loader.load(this.displacement, this.render);
      this.disp.crossOrigin = "anonymous";
      this.disp.crossDomain = "*";
      this.disp.wrapS = RepeatWrapping;
      this.disp.wrapT = RepeatWrapping;
    },
    initShaderMaterial() {
      const ratio = {
        width: this.preserveAspectRatio ? this.slider.offsetWidth : this.textures[this.currentImage].image.naturalWidth,
        height: this.preserveAspectRatio ? this.slider.offsetHeight : this.textures[this.currentImage].image.naturalHeight
      };

      this.mat = new ShaderMaterial({
        uniforms: {
          intensity1: {type: 'f', value: this.intensity},
          intensity2: {type: 'f', value: this.intensity},
          dispFactor: {type: 'f', value: 0.0},
          angle1: {type: 'f', value: this.angle + 1},
          angle2: {type: 'f', value: -Math.PI + this.angle + 1},
          texture1: {type: 't', value: this.textures[this.currentImage]},
          texture2: {type: 't', value: this.textures[this.nextImage]},
          texture1Alpha: {type: 'f', value: this.textures[this.currentImage].alpha},
          texture2Alpha: {type: 'f', value: this.textures[this.nextImage].alpha},
          disp: {type: 't', value: this.disp},
          resolution: {
            type: 'v2',
            value: new Vector2(ratio.width, ratio.height),
          },
          imageResolution: {
            type: 'v2',
            value: new Vector2(
                this.textures[this.currentImage].image.naturalWidth,
                this.textures[this.currentImage].image.naturalHeight
            ),
          },
          sliderResolution: {
            type: 'v2',
            value: new Vector2(
                this.slider.offsetWidth,
                this.slider.offsetHeight
            ),
          },
          u_rgbPosition: {
            type: "v2",
            value: new Vector2(window.innerWidth / 2, window.innerHeight / 2)
          },
          u_rgbVelocity: {
            type: "v2",
            value: new Vector2(0, 0)
          }
        },
        vertexShader: vertex,
        fragmentShader: fragment,
        transparent: false,
        opacity: 1.0
      });
      const geometry = new PlaneBufferGeometry(this.slider.offsetWidth, this.slider.offsetHeight, 1);
      const object = new Mesh(geometry, this.mat);
      this.scene.add(object);
    },
    async init() {
      this.initScene();
      await this.loadTextures();
      this.initShaderMaterial();
      this.loaded = true;
      this.$emit("loaded");
      this.firstLoading = 1;
      this.setSize(false);
      this.render();
    },
    setSize(orientationChanged = false) {
      let mediaElement = this.textures[this.currentImage];
      mediaElement.image.crossOrigin = "anonymous";
      if (!_.isNull(mediaElement.textureContent) && !_.isNull(mediaElement.textureContent.vimeo)) {
        if (orientationChanged === true) {
          let currentTime = mediaElement.image.currentTime;
          const matchedVideo = this.setMatchedVideo(mediaElement.textureContent.vimeo, this.screenOrientation);
          mediaElement.image.width = matchedVideo.width;
          mediaElement.image.height = matchedVideo.height;
          mediaElement.image.currentTime = currentTime;
          this.getMediaURLForTrack(matchedVideo.link, this.setVideoSize(), this.currentImage, this.setFinalVideoSize(), true);
          return;
        }
        this.setVideoSize();
      } else {
        if (mediaElement.image && mediaElement.image instanceof HTMLCanvasElement) {
          this.setFinalVideoSize();
          return;
        }
        const fileExtension = mediaElement.image.src.split('.').pop();
        if (fileExtension === "mp4" || fileExtension === "webm") {
          if (mediaElement.readyState > 1) {
            mediaElement.width = mediaElement.videoWidth;
            mediaElement.height = mediaElement.videoHeight;
            this.setVideoSize();
          } else {
            mediaElement.addEventListener('loadedmetadata', (event) => {
              let preloaded = event.path[0];
              mediaElement.width = preloaded.videoWidth;
              mediaElement.height = preloaded.videoHeight;
              this.setVideoSize();
            });
          }
        } else {
          this.setVideoSize();
          this.setFinalVideoSize();
        }
      }
    },
    setVideoSize() {
      let video = this.textures[this.currentImage].image;
      const countedWidth = video.width*this.slider.offsetHeight/video.height;
      const countedHeight = video.height*this.slider.offsetWidth/video.width;
      const videoRatio = video.width/video.height;
      const offsetRatio = this.slider.offsetWidth/this.slider.offsetHeight;
      if (video.width >= video.height) {
        if (this.slider.offsetWidth > this.slider.offsetHeight) {
          if (videoRatio <=offsetRatio) {
            this.renderer.setSize(this.slider.offsetWidth, countedHeight);
          } else {
            this.renderer.setSize(countedWidth, this.slider.offsetHeight);
          }
        } else {
          this.renderer.setSize(countedWidth, this.slider.offsetHeight);
        }
      } else {
        if (this.slider.offsetWidth > this.slider.offsetHeight) {
          this.renderer.setSize(this.slider.offsetWidth, countedHeight );
        } else {
          if (videoRatio >=offsetRatio) {
            this.renderer.setSize(countedWidth, this.slider.offsetHeight);
          } else {
            this.renderer.setSize(this.slider.offsetWidth, countedHeight );
          }
        }
      }
    },
    setFinalVideoSize() {
      const ratio = {
        width: this.textures[this.currentImage].image.width ? this.textures[this.currentImage].image.width : this.textures[this.currentImage].image.naturalWidth,
        height: this.textures[this.currentImage].image.height ? this.textures[this.currentImage].image.height : this.textures[this.currentImage].image.naturalHeight
      };
      this.camera.aspect = this.renderer.domElement.width / this.renderer.domElement.height;
      this.camera.updateProjectionMatrix();
      this.mat.uniforms.resolution.value.set(ratio.width, ratio.height);
      this.mat.uniforms.sliderResolution.value.set(this.slider.offsetWidth, this.slider.offsetHeight);
      this.render();
    },
    setImageSize() {
      this.renderer.setSize(this.slider.offsetWidth, this.slider.offsetHeight);
    },
    setMatchedVideo(videos, orientation = 'landscape') {
      let videoRendition;
      switch (true) {
        case (window.innerWidth <= 360):
          videoRendition = '360p';
          break;
        case (window.innerWidth <= 840):
          videoRendition = '540p';
          break;
        case (window.innerWidth <= 1280):
          videoRendition = '720p';
          break;
        case (window.innerWidth <= 1920):
          videoRendition = '1080p';
          break;
        case (window.innerWidth <= 2560):
          videoRendition = '1440p';
          break;
        case (window.innerWidth <= 3840):
          videoRendition = '2160p';
          break;
        default:
          videoRendition = '1080p';
          break;
      }
      if (_.isNull(videos[orientation]) || typeof videos[orientation] == "undefined") {
        orientation = 'landscape';
      }
      for (let i=0; i < Object.keys(videos[orientation]).length ; ++i) {
        if (videos[orientation][i].rendition === videoRendition) {
          return videos[orientation][i];
        }
      }
    },
    isOrientationChanged() {
      let currentOrientation = (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait';
      if (currentOrientation !== this.screenOrientation) {
        this.screenOrientation = currentOrientation;
        return true;
      }
      if (this.textures[this.currentImage].image.width < window.innerWidth + 200) {
        return true;
      }
      return false;
    },
    setScreenOrientation() {
      this.screenOrientation = (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait';
    },
    onResize() {
      if (this.textures[this.currentImage].image instanceof HTMLVideoElement) {
        this.textures[this.currentImage].image.pause();
        this.setSize(this.isOrientationChanged());
        if (this.blockVideoRender === false) {
          this.setFinalVideoSize();
          this.textures[this.currentImage].image.play();
        }
      } else {
        this.setSize(this.isOrientationChanged());
      }
    },
    play() {
      if (this.currentTransition) {
        this.currentTransition.play();
      }
    },
    pause() {
      if (this.currentTransition) {
        this.currentTransition.pause();
      }
    },
    async getMediaURLForTrack (passed_url, __callback, index = null, __final_callback = false, play_after = false) {
      this.blockVideoRender = true;
      const currentTime = this.textures[this.currentImage].image.currentTime;
      await fetch(passed_url, { method: 'HEAD' }
      ).then((response) => {
        this.tVideo[index].crossOrigin = "anonymous";
        this.tVideo[index].src = response.url;
        this.tVideo[index].currentTime = _.isUndefined(currentTime) ? 0 : currentTime;
        __callback;
        __final_callback;
        if(play_after === true) {
          this.tVideo[index].preload = true;
          this.tVideo[index].play()
        }
        this.blockVideoRender = false;
      });
    },
    insertImage(path, index = this.textures.length) {
      if (typeof path === 'object') {
        const video = document.createElement('video');
        video.crossOrigin="anonymous";
        let mediaElement = this.setMatchedVideo(path.vimeo, (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait');
        video.width = mediaElement.width;
        video.height = mediaElement.height;
        this.tVideo[index] = video;
        this.getMediaURLForTrack(mediaElement.link, this.insertVideo(index, path), index);
      } else {
        if (path === 'blank-texture') {
          return new Promise((resolve) => {
            const canvas = document.createElement('canvas');
            canvas.width = 1;
            canvas.height = 1;

            const context = canvas.getContext('2d');
            context.fillStyle = 'rgba(255,255,255,1)';
            context.fillRect(0, 0, canvas.width, canvas.height);

            let texture = new Texture(canvas);
            texture.magFilter = LinearFilter;
            texture.minFilter = LinearFilter;
            texture.alpha = 1;
            texture.textureContent = null;
            texture.needsUpdate = true;
            texture.context = context;

            this.textures.splice(index, 0, texture);

            if (index <= this.currentImage && this.loaded) {
              //We change the currentImage only if we loaded all  the images and the action is triggered from  the parent
              this.currentImage++;
            }

            this.render();
            resolve();
          });
        }
        const video = document.createElement('video');
        const fileExtension = path.split('.').pop();
        if (fileExtension === "mp4" || fileExtension === "webm") {
          video.src = path;
          this.insertVideo(video, index);
        }
        if (fileExtension === "jpg" || fileExtension === "webp" || fileExtension === "png" || fileExtension === "gif") {
          const loader = new TextureLoader();
          loader.crossOrigin = '';
          return new Promise((resolve) => {
            let texture = loader.load(path, () => {
              this.render();
              resolve();
            });
            texture.magFilter = LinearFilter;
            texture.minFilter = LinearFilter;
            texture.alpha = 1;
            texture.textureContent = null;
            this.textures.splice(index, 0, texture);

            if (index <= this.currentImage && this.loaded) {
              //We change the currentImage only if we loaded all  the images and the action is triggered from  the parent
              this.currentImage++;
            }
          });
        }
      }
    },
    insertVideo(index, textureContent = null) {
      let video = this.tVideo[index];
      video.preload = true;
      video.muted = true;
      video.setAttribute('muted', '');
      // video.disableremoteplayback = false;
      video.defaultMuted = true;
      video.playsinline = true;
      video.loop = true;
      video.timelineSelector = false;
      video.autoplay = false;
      video.setAttribute('webkit-playsinline', 'webkit-playsinline');
      video.setAttribute('playsinline', true);
      video.controls = true;
      const videoTexture = new VideoTexture(video);
      videoTexture.magFilter = LinearFilter;
      videoTexture.minFilter = LinearFilter;
      videoTexture.format = THREE.RGBFormat;
      videoTexture.alpha = 1;
      videoTexture.isVideo = 1;
      videoTexture.textureContent = textureContent;
      return new Promise((resolve) => {
        this.cover(this.videoAspect, window.innerWidth / window.innerHeight, videoTexture);
        this.render();
        this.textures.splice(index, 0, videoTexture);

        if (index <= this.currentImage && this.loaded) {
          //We change the currentImage only if we loaded all  the images and the action is triggered from  the parent
          this.currentImage++;
        }
        resolve();
      });
    },
    getVideoDimensions (e) {
      console.log(e);
      // e.target.videoHeight, e.target.videoWeight
    },
    cover: function ( videoAspect, aspect, texture ) {
      if ( aspect < videoAspect ) {
        texture.matrix.setUvTransform( 0, 0, aspect / videoAspect, 1, 0, 0.5, 0.5 );
      } else {
        texture.matrix.setUvTransform( 0, 0, 1, videoAspect / aspect, 0, 0.5, 0.5 );
      }
    },
    insertTransparentTexture() {
      return new Promise((resolve) => {
        const texture = new Texture();
        texture.image = {
          naturalWidth: this.slider.offsetWidth,
          naturalHeight: this.slider.offsetHeight
        };
        texture.alpha = 0;
      });
    },
    removeImage(index) {
      if (index !== this.currentImage) {
        this.textures.splice(index, 1);

        if (index < this.currentImage) {
          this.currentImage--;
        }
      }
    },
    goTo(index) {
      if (index >= 0 && index < this.textures.length) {
        this.next(index);
      }
    },
    animate() {
      if (this.isInteractive) {
        this.rafID = requestAnimationFrame(this.animate);
        this.getMouseSpeed();
      }

      this.render();
    },
    onMouseMove(e) {
      if (this.isInteractive && this.mat) {
        const sliderPosition = this.$refs.slider.getBoundingClientRect();
        this.mousePosition = {
          x: e.clientX - sliderPosition.left,
          y: e.clientY - sliderPosition.top
        };
        this.mat.uniforms.u_rgbPosition.value = new Vector2(
            this.mousePosition.x,
            this.mousePosition.y
        );
      }
    },
    getMouseSpeed() {
      if (this.mat) {
        const speed = Math.sqrt(
            (this.previousMousePosition.x - this.mousePosition.x) ** 2 +
            (this.previousMousePosition.y - this.mousePosition.y) ** 2
        ) || 0;

        gsap.to(this.mouseSpeed, {
          duration: this.interactionDuration,
          value: speed,
        });

        this.mat.uniforms.u_rgbVelocity.value = new Vector2(
            this.mouseSpeed.value * this.interactionFactor,
            this.mouseSpeed.value * this.interactionFactor
        );
      }

      this.previousMousePosition = this.mousePosition;
    }
  },
  mounted() {
    this.init();
    this.setScreenOrientation();
    window.addEventListener('resize', this.onResize);
    window.addEventListener('mousemove', this.onMouseMove);
    this.animate();
  },
  beforeDestroy() {
    cancelAnimationFrame(this.rafID);
    this.renderer.dispose();
    this.scene.traverse(object => {
      if (object instanceof THREE.Mesh) {
        if (object.geometry) {
          object.geometry.dispose();
        }
        if (object.material) {
          if (object.material instanceof Array) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      }
    });
    this.renderer.forceContextLoss();

    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('mousemove', this.onMouseMove);
  },
};
</script>
<style>
.vue-displacement-slideshow {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
