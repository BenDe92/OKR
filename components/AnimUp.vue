<template>
  <div></div>
</template>
<script>
import { gsap } from 'gsap'
export default {
  mounted() {
    this.animUp()
  },
  methods: {
    animUp() {
      const animUp = gsap.utils.toArray('.anim-up')

      animUp.forEach((item) => {
        gsap.fromTo(
          item,
          { y: 30, autoAlpha: 0 },
          { duration: 2, y: 0, autoAlpha: 1 }
        )
      })
    },
  },
}
</script>
<style></style>
