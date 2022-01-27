<template>
  <div>
    <Intro />
    <TestFile />
    <Footer :data="footerModel"></Footer>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const {
      // app,
      // store,
      route,
      // params,
      // query,
      // env,
      // isDev,
      // isHMR,
      redirect,
      // error,
      // $config,
      $axios,
    } = context

    try {
      const data = await $axios.get(route.fullPath)

      // if (
      //   data.request &&
      //   data.request._redirectable &&
      //   data.request._redirectable._redirectCount > 0
      // ) {
      //   console.log(`Redirecting ${data.config.url} to ${data.request.path}`)
      //   redirect(301, data.request.path)
      // } else if (data.status === 200 && typeof data.data !== 'object') {
      //   console.log(`Response not object: ${data.data}`)
      //   redirect('/500')
      // }

      return {
        moduleContent: data.data.moduleContent,
        headerModel: data.data.header ? data.data.header : null,
        footerModel: data.data.footer ? data.data.footer : null,
        metaData: data.data.metaData,
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return {
          isPageFourOFour: true,
          headerModel: null,
          footerModel: error.response.data.footer,
          moduleContent: error.response.data.moduleContent,
          metaData: error.response.data.metaData,
        }
      } else {
        redirect('/500')
      }
    }
  },

  data() {
    return {
      metaData: {},
      scriptArray: [],
      moduleContent: [],
      headerModel: {},
      footerModel: {},
      ui: {},
      isPageFourOFour: false,
    }
  },
}
</script>
