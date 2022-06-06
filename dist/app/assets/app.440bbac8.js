import{openBlock as d,createElementBlock as p,resolveComponent as g,createBlock as v,createApp as x}from"vue";import{S as y,W as w,O as I,g as u,T as c,R as m,a as R,V as a,P as _,M as P,b as A,L as l,c as b,d as $}from"./vendor.cc374b14.js";const T=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}};T();const M=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,F=`
varying vec2 vUv;
uniform float dispFactor;
uniform sampler2D disp;
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform float texture1Alpha;
uniform float texture2Alpha;
uniform float angle1;
uniform float angle2;
uniform float intensity1;
uniform float intensity2;
uniform vec2 resolution;
uniform vec2 imageResolution;
uniform vec2 sliderResolution;
uniform vec2 u_rgbPosition;
uniform vec2 u_rgbVelocity;

mat2 getRotM(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

vec2 centeredAspectRatio(vec2 uvs, vec2 factor, vec2 ratio, vec2 distortedPosition){
  return uvs * ratio + (1.0 - ratio) * 0.5 * factor - factor /2. + 0.5 + distortedPosition;
}

void main() {
  vec2 normalizedRgbPos = u_rgbPosition / sliderResolution;
  normalizedRgbPos.y = 1. - normalizedRgbPos.y; 
  vec2 vel = u_rgbVelocity;
  float dist = distance(normalizedRgbPos + vel / sliderResolution, vUv.xy);
  float ratio = clamp(1.0 - dist * 5., 0., 1.);
  vec4 tex1 = vec4(1.);
  vec4 tex2 = vec4(1.);
  vec2 u_textureFactor = vec2(1.0);
  vec2 u_texture2Factor = vec2(1.0);
  vec2 uv = vUv; 
  vec4 disp = texture2D(disp, vUv);
  vec2 dispVec = vec2(disp.r, disp.g);
  
  vec2 aspectRatio = vec2(
    min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),
    min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)
  );
      
  vec2 distortedPosition1 = getRotM(angle1) * dispVec * intensity1 * dispFactor;
  vec2 distortedPosition2 = getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);
  
  uv.x -= sin(uv.y) * ratio / 100. * (vel.x + vel.y) / 7.;
  uv.y -= sin(uv.x) * ratio / 100. * (vel.x + vel.y) / 7.;
  tex1.r = texture2D(texture1, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition1)).r;
  tex2.r = texture2D(texture2, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition2)).r;
    
  uv.x -= sin(uv.y) * ratio / 150. * (vel.x + vel.y) / 7.;
  uv.y -= sin(uv.x) * ratio / 150. * (vel.x + vel.y) / 7.;
  tex1.g = texture2D(texture1, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition1)).g;
  tex2.g = texture2D(texture2, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition2)).g;
    
  uv.x -= sin(uv.y) * ratio / 300. * (vel.x + vel.y) / 7.;
  uv.y -= sin(uv.x) * ratio / 300. * (vel.x + vel.y) / 7.;
  tex1.b = texture2D(texture1, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition1)).b;
  tex2.b = texture2D(texture2, centeredAspectRatio(uv, u_textureFactor, aspectRatio, distortedPosition2)).b;
  
  tex1.a  = texture1Alpha;
  tex2.a  = texture2Alpha;
     
  vec4 mixedTextures =  mix(tex1, tex2, dispFactor);
  gl_FragColor = mixedTextures;
}
`;function h(e,t){const r=(e%t+t)%t;return r<0?r+Math.abs(t):r}var f=(e,t)=>{for(const[r,n]of t)e[r]=n;return e};const S={name:"vue-displacement-slideshow",props:{images:{required:!0,type:Array,default:()=>[]},displacement:{required:!0,type:String},intensity:{required:!1,type:Number,default:1},speedIn:{required:!1,type:Number,default:1},speedOut:{required:!1,type:Number,default:1},ease:{required:!1,type:String,default:"expo.inOut"},preserveAspectRatio:{required:!1,type:Boolean,default:!0},isInteractive:{required:!1,type:Boolean,default:!1},interactionFactor:{required:!1,type:Number,default:1},interactionDuration:{required:!1,type:Number,default:1},angle:{required:!1,type:Number,default:Math.PI/4},startAsTransparent:{required:!1,type:Boolean,default:!1}},data(){return{currentImage:0,scene:new y,renderer:new w({antialias:!1,alpha:!0}),mat:null,textures:[],disp:null,nextImage:0,imagesLoaded:[],isAnimating:!1,currentTransition:null,mousePosition:{},previousMousePosition:null,rafID:null,mouseSpeed:{value:0},loaded:!1}},computed:{slider(){return this.$refs.slider},camera(){const e=new I(this.slider.offsetWidth/-2,this.slider.offsetWidth/2,this.slider.offsetHeight/2,this.slider.offsetHeight/-2,1,1e3);return e.position.z=1,e}},methods:{initScene(){this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(16777215,0),this.renderer.setSize(this.slider.offsetWidth,this.slider.offsetHeight),this.$refs.slider.appendChild(this.renderer.domElement)},render(){this.renderer.render(this.scene,this.camera)},transitionIn(){this.currentTransition=u.to(this.mat.uniforms.dispFactor,{duration:this.speedIn,value:1,ease:this.ease,onUpdate:this.render,onComplete:this.onAnimationEnd(!0),paused:!0}),this.currentTransition.play(),this.setImageResolution(this.speedIn)},transitionOut(){this.currentTransition=u.to(this.mat.uniforms.dispFactor,{duration:this.speedOut,value:0,ease:this.ease,onUpdate:this.render,onComplete:this.onAnimationEnd(!1),paused:!0}),this.currentTransition.play(),this.setImageResolution(this.speedOut)},setImageResolution(e){u.to(this.mat.uniforms.imageResolution.value,{duration:e,x:this.textures[this.nextImage].image.naturalWidth,y:this.textures[this.nextImage].image.naturalHeight,ease:this.ease,onUpdate:this.render})},onAnimationEnd(e){e&&(this.currentImage=this.nextImage,this.mat.uniforms.dispFactor.value=0),this.isAnimating=!1,this.$emit("animationEnd"),this.render()},assignTexturesToMaterial(){this.mat.uniforms.texture1.value=this.textures[this.currentImage],this.mat.uniforms.texture2.value=this.textures[this.nextImage]},previous(){if(!this.isAnimating){if(this.mat===null){this.currentImage=h(this.currentImage-1,this.textures.length);return}this.isAnimating=!0,this.mat.uniforms.dispFactor.value=1,this.nextImage=h(this.currentImage-1,this.textures.length),this.mat.uniforms.texture1.value=this.textures[this.nextImage],this.mat.uniforms.texture2.value=this.textures[this.currentImage],this.mat.uniforms.texture1Alpha.value=this.textures[this.nextImage].alpha,this.mat.uniforms.texture2Alpha.value=this.textures[this.currentImage].alpha,this.transitionOut(),this.currentImage=this.nextImage}},next(e=null){if(!this.isAnimating){if(this.mat===null){this.currentImage=h(this.currentImage+1,this.textures.length);return}this.isAnimating=!0,this.nextImage=e!==null?e:h(this.currentImage+1,this.textures.length),this.assignTexturesToMaterial(),this.mat.uniforms.texture1Alpha.value=this.textures[this.currentImage].alpha,this.mat.uniforms.texture2Alpha.value=this.textures[this.nextImage].alpha,this.transitionIn()}},loadTextures(){this.images.forEach((t,r)=>{let n=this.insertImage(t,r);this.imagesLoaded.push(n)}),this.startAsTransparent&&this.insertTransparentTexture(0);const e=new c;e.crossOrigin="",this.disp=e.load(this.displacement,this.render),this.disp.wrapS=m,this.disp.wrapT=m},initShaderMaterial(){const e={width:this.preserveAspectRatio?this.slider.offsetWidth:this.textures[this.currentImage].image.naturalWidth,height:this.preserveAspectRatio?this.slider.offsetHeight:this.textures[this.currentImage].image.naturalHeight};this.mat=new R({uniforms:{intensity1:{type:"f",value:this.intensity},intensity2:{type:"f",value:this.intensity},dispFactor:{type:"f",value:0},angle1:{type:"f",value:this.angle},angle2:{type:"f",value:-Math.PI+this.angle},texture1:{type:"t",value:this.textures[this.currentImage]},texture2:{type:"t",value:this.textures[this.nextImage]},texture1Alpha:{type:"f",value:this.textures[this.currentImage].alpha},texture2Alpha:{type:"f",value:this.textures[this.nextImage].alpha},disp:{type:"t",value:this.disp},resolution:{type:"v2",value:new a(e.width,e.height)},imageResolution:{type:"v2",value:new a(this.textures[this.currentImage].image.naturalWidth,this.textures[this.currentImage].image.naturalHeight)},sliderResolution:{type:"v2",value:new a(this.slider.offsetWidth,this.slider.offsetHeight)},u_rgbPosition:{type:"v2",value:new a(window.innerWidth/2,window.innerHeight/2)},u_rgbVelocity:{type:"v2",value:new a(0,0)}},vertexShader:M,fragmentShader:F,transparent:!0,opacity:1});const t=new _(this.slider.offsetWidth,this.slider.offsetHeight,1),r=new P(t,this.mat);this.scene.add(r)},init(){this.initScene(),this.loadTextures(),Promise.all(this.imagesLoaded).then(()=>{this.initShaderMaterial(),this.loaded=!0,this.$emit("loaded"),this.render()})},onResize(){const e={width:this.preserveAspectRatio?this.slider.offsetWidth:this.textures[this.currentImage].image.naturalWidth,height:this.preserveAspectRatio?this.slider.offsetHeight:this.textures[this.currentImage].image.naturalHeight};this.renderer.setSize(this.slider.offsetWidth,this.slider.offsetHeight),this.camera.aspect=this.slider.innerWidth/this.slider.innerHeight,this.camera.updateProjectionMatrix(),this.mat.uniforms.resolution.value.set(e.width,e.height),this.mat.uniforms.sliderResolution.value.set(this.slider.offsetWidth,this.slider.offsetHeight),this.render()},play(){this.currentTransition&&this.currentTransition.play()},pause(){this.currentTransition&&this.currentTransition.pause()},insertImage(e,t=this.textures.length){const r=e.split(".").pop();if(r==="mp4"||r==="webm"){const n=document.createElement("video");n.src=e,n.autoplay=!0,n.muted=!0,n.loop=!0,n.load();const i=new A(n);return i.magFilter=l,i.minFilter=l,i.format=b,i.alpha=1,i.isVideo=1,new Promise(s=>{s(),this.render(),this.textures.splice(t,0,i),t<=this.currentImage&&this.loaded&&this.currentImage++})}if(r==="jpg"||r==="png"){const n=new c;return n.crossOrigin="",new Promise(i=>{let s=n.load(e,()=>{this.render(),i()});s.magFilter=l,s.minFilter=l,s.alpha=1,this.textures.splice(t,0,s),t<=this.currentImage&&this.loaded&&this.currentImage++})}},insertTransparentTexture(e){const t=new $;t.image={naturalWidth:this.slider.offsetWidth,naturalHeight:this.slider.offsetHeight},t.alpha=0,this.textures.splice(e,0,t)},removeImage(e){e!==this.currentImage&&(this.textures.splice(e,1),e<this.currentImage&&this.currentImage--)},goTo(e){e>=0&&e<this.textures.length&&this.next(e)},animate(){this.isInteractive&&(this.rafID=requestAnimationFrame(this.animate),this.getMouseSpeed()),this.render()},onMouseMove(e){if(this.isInteractive&&this.mat){const t=this.$refs.slider.getBoundingClientRect();this.mousePosition={x:e.clientX-t.left,y:e.clientY-t.top},this.mat.uniforms.u_rgbPosition.value=new a(this.mousePosition.x,this.mousePosition.y)}},getMouseSpeed(){if(this.mat){const e=Math.sqrt((this.previousMousePosition.x-this.mousePosition.x)**2+(this.previousMousePosition.y-this.mousePosition.y)**2)||0;u.to(this.mouseSpeed,{duration:this.interactionDuration,value:e}),this.mat.uniforms.u_rgbVelocity.value=new a(this.mouseSpeed.value*this.interactionFactor,this.mouseSpeed.value*this.interactionFactor)}this.previousMousePosition=this.mousePosition}},mounted(){this.init(),window.addEventListener("resize",this.onResize),window.addEventListener("mousemove",this.onMouseMove),this.animate()},beforeDestroy(){cancelAnimationFrame(this.rafID),window.removeEventListener("resize",this.onResize),window.removeEventListener("mousemove",this.onMouseMove)}},L={class:"vue-displacement-slideshow",ref:"slider",style:{width:"100%",height:"100%"}};function W(e,t,r,n,i,s){return d(),p("div",L,null,512)}var V=f(S,[["render",W]]);const C={data:function(){return{scrollCompleted:1,scrollBlocked:0}},components:{VueDisplacementSlideshow:V},computed:{images(){return[new URL("/assets/anterne.c0205d10.jpg",self.location).href,new URL("/assets/dolomites.5a3c363e.jpg",self.location).href]},displacement(){return new URL("/assets/displacement.25ba2f84.png",self.location).href}},methods:{handleScroll:function(e=0){e===1&&!this.$refs.slideshow.isAnimating&&this.scrollCompleted===1&&this.scrollBlocked===0&&(this.scrollCompleted=0,this.$refs.slideshow.textures[this.$refs.slideshow.currentImage].isVideo&&this.$refs.slideshow.textures[this.$refs.slideshow.currentImage].image.pause(),this.$refs.slideshow.next(),this.$refs.slideshow.textures[this.$refs.slideshow.currentImage].isVideo&&this.$refs.slideshow.textures[this.$refs.slideshow.currentImage].image.play(),setTimeout(()=>this.scrollCompleted=1,2e3)),e===-1&&!this.$refs.slideshow.isAnimating&&this.scrollCompleted===1&&this.scrollBlocked===0&&(this.scrollCompleted=0,this.$refs.slideshow.textures[this.$refs.slideshow.currentImage].isVideo&&this.$refs.slideshow.textures[this.$refs.slideshow.currentImage].image.pause(),this.$refs.slideshow.previous(),this.$refs.slideshow.textures[this.$refs.slideshow.currentImage].isVideo&&this.$refs.slideshow.textures[this.$refs.slideshow.currentImage].image.play(),setTimeout(()=>this.scrollCompleted=1,2e3))}},mounted(){window.addEventListener("wheel",e=>{const t=Math.sign(e.deltaY);this.handleScroll(t)})},destroyed(){window.removeEventListener("wheel",this.handleScroll)}};function D(e,t,r,n,i,s){const o=g("vue-displacement-slideshow");return d(),v(o,{images:s.images,displacement:s.displacement,intensity:.2,speedIn:1.4,speedOut:1.4,ease:"Liner.easeInOut",ref:"slideshow","is-interactive":!0,interactionVelocity:{x:5,y:150},angle:1.2},null,8,["images","displacement","intensity","speedIn","speedOut","angle"])}var H=f(C,[["render",D]]);x(H).mount("#app");
