<template>
  <div class="footer">
    <h2 class="footer-title">text to animate</h2>
    <!-- <pre>{{ data }}</pre> -->
    <div class="img-cnt">
      <img class="img-item" src="~/static/unnamed.jpg" alt="" />
    </div>
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
    this.mover()
  },
  methods: {
    mover() {
      gsap.to('.img-cnt', {
        duration: 2,
        x: 250,
        y: 100,
        height: 300,
        width: 750,
        onComplete: this.backImgToNormal,
        onCompleteParams: ['.img-cnt'],
      })

      gsap.to('.footer-title', {
        duration: 2,
        delay: 2,
        backgroundColor: 'red',
        x: 450,
        y: 100,
        width: 'fit-content',
        fontSize: '+=75',
        onComplete: this.backTextToNormal,
      })
    },

    backImgToNormal(params) {
      gsap.to(params, {
        duration: 2,
        x: 0,
        y: 0,
        height: 200,
        width: 350,
      })
    },

    backTextToNormal() {
      gsap.to('.footer-title', {
        duration: 2,
        delay: 2,
        backgroundColor: 'transparent',
        x: 0,
        y: 0,
        width: 'fit-content',
        fontSize: '-=75',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.footer-title {
  margin-bottom: 20px;
}
.img-cnt {
  width: 350px;
  height: 200px;
  .img-item {
    width: 100%;
    height: 100%;
  }
}
</style>
