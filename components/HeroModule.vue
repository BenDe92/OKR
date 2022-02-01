/* eslint-disable vue/require-prop-types */
<template>
  <div class="hero">
    <div class="text-wrapper flex justify-center items-center">
      <h1 class="title">Text to animte</h1>
    </div>
    <nuxt-link to="/test">click on this</nuxt-link>
    <!-- <pre>{{ data }}</pre> -->
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.moveUp()
  },
  methods: {
    moveUp() {
      gsap.fromTo(
        '.title',
        {
          y: 20,
          autoAlpha: 0,
        },
        { duration: 2, y: 0, autoAlpha: 1 }
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.hero {
  .text-wrapper {
    width: 100%;
    height: 500px;
    .title {
      font-size: 48px;
    }
  }
}
</style>
