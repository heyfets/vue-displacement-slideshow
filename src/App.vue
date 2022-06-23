<template>
  <vue-displacement-slideshow :images="images"
                              :displacement="displacement"
                              :intensity="0.2"
                              :speedIn="1.4"
                              :speedOut="1.4"
                              ease="Liner.easeInOut"
                              ref="slideshow"
                              :is-interactive="true"
                              :interactionVelocity="{ x : 5, y : 150 }"
                              :angle="1.2"/>
</template>

<script>

import VueDisplacementSlideshow from "../lib/VueDisplacementSlideshow.vue";
// uncomment to test the built component
//import VueDisplacementSlideshow from "../dist/lib/vue-displacement-slideshow.es.js";

export default {
  data: function() {
    return {
      scrollCompleted: 1,
      scrollBlocked: 0,
    }
  },
  components: {
    VueDisplacementSlideshow,
  },
  computed: {
    images() {
      return [
        new URL('./assets/anterne.jpg', import.meta.url).href,
        new URL('./assets/dolomites.jpg', import.meta.url).href,
      ];
    },
    displacement(){
      return new URL('./assets/displacement.png', import.meta.url).href
    }
  },
  methods: {
    handleScroll: function(delta = 0) {
      if (delta === 1
          && !this.$refs.slideshow.isAnimating
          && this.scrollCompleted === 1
          && this.scrollBlocked === 0) {
        this.scrollCompleted = 0;
        if (this.$refs.slideshow.textures[this.$refs.slideshow.currentImage].isVideo) {
          this.$refs.slideshow.textures[this.$refs.slideshow.currentImage].image.pause();
        }
        this.$refs.slideshow.next();
        if (this.$refs.slideshow.textures[this.$refs.slideshow.currentImage].isVideo) {
          this.$refs.slideshow.textures[this.$refs.slideshow.currentImage].image.play();
        }
        setTimeout(() => this.scrollCompleted = 1, 2000);
      }
      if (delta === -1
          && !this.$refs.slideshow.isAnimating
          && this.scrollCompleted === 1
          && this.scrollBlocked === 0) {
        this.scrollCompleted = 0;
        if (this.$refs.slideshow.textures[this.$refs.slideshow.currentImage].isVideo) {
          this.$refs.slideshow.textures[this.$refs.slideshow.currentImage].image.pause();
        }
        this.$refs.slideshow.previous();
        if (this.$refs.slideshow.textures[this.$refs.slideshow.currentImage].isVideo) {
          this.$refs.slideshow.textures[this.$refs.slideshow.currentImage].image.play();
        }
        setTimeout(() => this.scrollCompleted = 1, 2000);
      }
    },
    handleMove: function (e) {
      const touchStart = e.touches[0].screenY;
      window.addEventListener('touchend', ev => {
        const touchEnd = ev.changedTouches[0].screenY;
        if (touchStart > touchEnd) {
          this.handleScroll(1);
        } else {
          this.handleScroll(-1);
        }
      });
    }
  },
  mounted() {
    window.addEventListener('wheel', event => {
      const delta = Math.sign(event.deltaY);
      this.handleScroll(delta);

    });
    window.addEventListener('touchstart', event => {
      this.handleMove(event);
    });
  },
  destroyed() {
    window.removeEventListener('wheel', this.handleScroll)
    window.removeEventListener('touchstart', this.handleMove)
  }
}

</script>

<style>

html, body {
  margin: 0;
}

html, body, #app {
  height: 100%;
  overflow: hidden;
}

</style>
