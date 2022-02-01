<template>
  <div><slot /></div>
</template>
<script>
export default {
  data: () => {
    return {
      observer: null,
    };
  },
  // mounted() {
  //   this.initObserver();
  // },
  // beforeDestroy() {
  //   if (this.observer) {
  //     this.observer.disconnect();
  //   }
  // },
  methods: {
    initObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ isIntersecting, target }) => {
            if (isIntersecting) {
              // target.querySelectorAll('[data-animate]').forEach((item) => {
              //   item.classList.add('animate');
              // });
              console.log('is intersecting', target);
            }
          });
        },
        {
          rootMargin: '0px',
          threshold: 0.25,
        },
      ).observe(this.$refs.section);
    },
  },
};
</script>

