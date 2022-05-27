<template>
  <div class="image-landscape mb-6 mb-md-0">
    <flicking
      ref="carousel"
      :options="{
        circular: true,
        align: 'center',
        panelsPerView: 1.5,
      }"
      :hide-before-init="true"
      @changed="onChange"
      @move="sizeChange"
      @ready="sizeChange"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="panel"
        :class="`${currentSlide === index ? 'active' : ''}`"
      >
        <div class="general-image-wrapper fill-height">
          <slot :item="item"></slot>
        </div>
      </div>
    </flicking>
    <v-row
      class="d-none d-md-flex ml-lg-0 mb-md-0 mb-lg-6 control-container"
      justify="space-between"
      no-gutters
    >
      <v-col class="col-auto ml-md-0 ml-lg-2 ml-xl-16">
        <v-btn
          icon
          plain
          :ripple="false"
          dark
          class="ml-8 ml-lg-16 cta-btn left"
          x-large
          @click="onPrev"
        >
          <img
            src="~/assets/svg/right.svg"
            class="rotate-180"
            :style="{ filter: hexToCssFilter(textColor) }"
          />
        </v-btn>
      </v-col>
      <v-col class="col-auto slider-slide swiper-slide-active"> </v-col>
      <v-col class="col-auto mr-md-0 mr-lg-2 mr-xl-16">
        <v-btn
          icond
          plain
          :ripple="false"
          class="mr-8 mr-lg-16 cta-btn right"
          x-large
          @click="onNext()"
        >
          <img
            src="~/assets/svg/right.svg"
            :style="{ filter: hexToCssFilter(textColor) }"
          />
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: null,
    },
    textColor: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      currentSlide: 0,
    }
  },
  methods: {
    onChange(event) {
      this.currentSlide = event.index
    },
    onNext() {
      if (!this.$refs.carousel.animating) {
        this.$refs.carousel.next()
      }
    },
    onPrev() {
      if (!this.$refs.carousel.animating) {
        this.$refs.carousel.prev()
      }
    },
    sizeChange() {
      const flicking = this.$refs.carousel
      const panels = flicking.visiblePanels
      panels.forEach((panel) => {
        const progress = panel.outsetProgress
        const el = panel.element
        const target = el
        target.style.transform = `scale(${1 - Math.abs(progress * 0.15)})`
        // target.firstChild.style.transform = `scale(${
        //   1 - Math.abs(progress * 0.2)
        // })`;
        // console.log(progress);
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.image-landscape {
  position: relative;

  .panel {
    z-index: 0;
    height: 164px;
    // transform: scale(1.05);
    // transition-timing-function: ease;
    // transition-duration: 300ms;

    height: 500px;

    .general-image-wrapper {
      // transform: scale(0.85);
      transition-timing-function: ease;
      transition-duration: 300ms;
    }

    // &.active {
    //   transform: scale(1);
    //   .general-image-wrapper {
    //     transform: scale(1);
    //     z-index: 1;
    //   }
    // }

    ::v-deep .general-image {
      width: 100%;
    }
  }

  .control-container {
    .cta-btn {
      z-index: 2;
    }
  }

  ::v-deep .responsive-image img {
    pointer-events: none;
  }
}
</style>
