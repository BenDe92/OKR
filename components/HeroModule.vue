/* eslint-disable vue/require-prop-types */
<template>
  <div class="hero flex flex-col justify-center items-center">
    <div class="anim-up text-wrapper flex flex-col justify-center items-center">
      <p>PreHeading</p>
      <h1 class="title">Text to animte</h1>
      <p class="quote">
        Lorem is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>
    </div>
    <!-- <nuxt-link to="/test">click on this</nuxt-link> -->
    <!-- <pre>{{ data }}</pre> -->
    <div
      class="wrapper"
      style="
        width: 300px;
        height: 300px;
        border-top: 2px solid black;
        border-bottom: 2px solid black;
      "
    >
      <div class="line1">
        <img class="img-item-tl" src="~/static/unnamed.jpg" alt="" />
      </div>
    </div>
    <div v-html="video"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      video:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/b_U992pPNDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    }
  },
  mounted() {
    this.textAnim()
  },
  methods: {
    textAnim() {
      const tl = gsap.timeline()
      const mySplitText = new SplitText('.quote ', { type: 'lines' })
      const lines = mySplitText.lines

      tl.from(lines, {
        duration: 0.8,
        opacity: 0,
        // scale: 0,
        y: 80,
        // rotationX: 180,
        transformOrigin: '0% 50% -50',
        // ease: 'back',
        stagger: 1,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.hero {
  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    // flex-direction: column;
    .line1,
    .line2 {
      width: 100%;
      height: 0;
      background-color: black;
      position: absolute;
      left: 0;

      transition: all 1s;
      overflow: hidden;
      // top: 0;
      .img-item-tl {
        width: 100%;
        height: 100%;
      }
    }

    // .line1 {
    //   transform: rotate(45deg);

    //   top: -100%;
    //   right: -50%;
    // }
    // .line2 {
    //   transform: rotate(-45deg);
    //   top: -100%;
    //   left: -50%;
    // }
    // .line2 {
    //   transform: rotate(-45deg);
    // }
  }

  .wrapper:hover {
    .line1 {
      height: 100%;
      // .img-item-tl {
      //   height: 100%;
      // }
      // top: 0;
      // right: 45%;
      // transition-delay: 0.5s;
    }
    .line2 {
      top: 0;
      left: 50%;
    }
    // transform: translate(0, 0) rotate(45deg);
  }
  .text-wrapper {
    width: 30%;
    height: 500px;
    .title {
      font-size: 48px;
    }
  }
}
</style>
