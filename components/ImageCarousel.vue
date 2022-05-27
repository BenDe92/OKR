<template>
  <div class="wrapper">
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
<style lang="scss" scoped></style>
