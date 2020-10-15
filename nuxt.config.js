const BASE_PATH = "/meeting";

//只有生产或者预发环境走CDN
//我这个项目生产环境也不走CDN所以不配置
const CDNPATH = undefined;


let isOnline = process.env.NODE_ENV != 'test';

console.log('nuxtconfig.js',process.env.NODE_ENV)

export default {
  mode: 'universal',
  env:{
    NODE_ENV:process.env.NODE_ENV
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0;' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/ga.ts'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    // Doc: https://typescript.nuxtjs.org/guide/setup.html#installation
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/proxy-module
    '@nuxtjs/proxy'
  ],
  router: {
    base: BASE_PATH,
    // 多语言页面生成信息提取
    extendRoutes (routes, resolve) {
      // console.log(routes)
      // todo
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  proxy: {
    '/api/':{ target: 'https://ncovquestion.totok.team'/*, pathRewrite: {'^/api/': ''}*/ }
  },
  /*
  ** Build configuration
  */
  build: {
    publicPath: isOnline ? CDNPATH : undefined,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
