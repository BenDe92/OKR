<template>
  <div class="footer p-5">
    <h2 class="footer-title">text to animate</h2>
    <!-- <pre>{{ data }}</pre> -->
    <div class="img-cnt">
      <img class="img-item" src="~/static/unnamed.jpg" alt="" />
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <div class="time-line flex justify-end gap-3">
      <div id="one" class="img-cnt-tl">
        <img class="img-item-tl" src="~/static/unnamed.jpg" alt="" />
      </div>
      <div id="two" class="img-cnt-tl">
        <img class="img-item-tl" src="~/static/unnamed.jpg" alt="" />
      </div>
      <div id="three" class="img-cnt-tl">
        <img class="img-item-tl" src="~/static/unnamed.jpg" alt="" />
      </div>
      <div id="four" class="img-cnt-tl">
        <img class="img-item-tl" src="~/static/unnamed.jpg" alt="" />
      </div>
      <div id="five" class="img-cnt-tl">
        <img class="img-item-tl" src="~/static/unnamed.jpg" alt="" />
      </div>
      <br /><br />
    </div>

    <p class="text">text animated without delay</p>

    <div class="control-buttons flex justify-end gap-5">
      <button id="start">Start</button>
      <button id="pause">Pause</button>
      <button id="stop">Stop</button>
      <button id="reverse">Reverse</button>
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
    // this.mover()
    this.timeLine()
  },
  methods: {
    mover() {
      const d = 2
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
        delay: d + 8,
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
        duration: 5,
        delay: 2,
        backgroundColor: 'transparent',
        x: 0,
        y: 0,
        width: 'fit-content',
        fontSize: '-=75',
      })
    },

    timeLine() {
      const tl = gsap.timeline()

      tl.to('#one, #two, #three, #four, #five', {
        duration: 5,
        y: -150,
        stagger: 2.5,
        ease: 'elastic.out(1, 0.3)',
      })

      tl.to('.text', {
        duration: 2,
        y: -100,
      })

      const playBtn = document.querySelector('#start')
      const pauseBtn = document.querySelector('#pause')
      const stopBtn = document.querySelector('#stop')
      const reverseBtn = document.querySelector('#reverse')

      playBtn.addEventListener('click', () => {
        tl.play()
      })
      pauseBtn.addEventListener('click', () => {
        tl.pause()
      })
      stopBtn.addEventListener('click', () => {
        tl.remove()
      })
      reverseBtn.addEventListener('click', () => {
        tl.reverse()
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

.time-line {
  .img-cnt-tl {
    width: 70px;
    height: 70px;

    .img-item-tl {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
</style>
