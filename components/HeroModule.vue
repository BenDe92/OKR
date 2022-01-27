<template>
  <div>
    <h1>test</h1>
    <nuxt-link to="/test">click on this</nuxt-link>
    <pre>{{ data }}</pre>
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
