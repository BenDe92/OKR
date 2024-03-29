export default {
  serverRuntimeConfig: {
    umbracoURL: process.env.UMBRACO_URL || 'https://qa-cms.apeshill.com/',
  },
  publicRuntimeConfig: {
    dataCacheMaxAge: process.env.DATA_CACHE_MAX_AGE || 1000 * 60 * 10,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'OKR',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/tailwind.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-flicking.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    prefix: '/api',
  },
  proxy: {
    '/api/': {
      target: process.env.UMBRACO_URL || 'https://qa-cms.apeshill.com',
      pathRewrite: { '^/api/': '' },
      changeOrigin: true,
      //
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { transpile: ['gsap'] },
}
