import Sass from 'sass'
require('dotenv').config();
const {VUE_APP_FIREBASE_PROJECT_ID} = process.env

export default {
  chainWebpack: config => {
    config.plugin('copy').tap(([options]) => {
      options[0].ignore = ['./index.html', '.DS_Store']
      return [options]
    })
  },

  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rc',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/tailwind.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/vue-full-calendar', ssr: false, mode: 'client' }
    // '~/plugins/vue-social-sharing.js',
    { src: '~/plugins/persistedstate.js', ssr: false},
    { src: '@/plugins/vee-validate'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    "vue2-editor/nuxt",
    'nuxt-client-init-module'
    // 'vue-social-sharing/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // hostingの時に書いてあげると、.nuxtのdistをコピーできるよ！
  target:'static',
  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // mp3ファイル再生のための拡張
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      })
    },
    loaders: {
      scss: {
        implementation: Sass,
        // sassOptions: {
        //   fiber: Fiber
        // }
      },
    },
    transpile: [
      'vee-validate/dist/rules',
    ],
    // 内部にcssnanoプラグイン構成を追加することで問題を修正
        postcss: {
            plugins: {
                'cssnano': {
                    preset: [
                        "default",
                        {
                            "calc": false
                        }
                    ]
                }
            }
        }
  },

  env: {
    VUE_APP_FIREBASE_PROJECT_ID
  }

  
  
}
