<template>
  <div class="footer">
    <h2>footer</h2>
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
