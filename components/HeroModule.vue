/* eslint-disable vue/require-prop-types */
<template>
  <div class="hero flex flex-col justify-center items-center">
    <div class="anim-up text-wrapper flex flex-col justify-center items-center">
      <p>PreHeading</p>
      <h1 class="title">Text to animte</h1>
      <p>
        Lorem is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>
    </div>
    <!-- <nuxt-link to="/test">click on this</nuxt-link> -->
    <!-- <pre>{{ data }}</pre> -->
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.hero {
  .text-wrapper {
    width: 50%;
    height: 500px;
    .title {
      font-size: 48px;
    }
  }
}
</style>
