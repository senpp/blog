import MetaConfig from './config/meta'

export default {
  ssr: false,
  target: 'static',

  head: {
    titleTemplate: '%sphuongphung.com',
    meta: MetaConfig,
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxt/content', '@nuxtjs/dayjs'],

  googleAnalytics: {
    id: 'UA-163272788-1',
  },

  axios: {},

  content: {
    liveEdit: false,
  },

  colorMode: {
    classSuffix: '',
  },

  googleFonts: {
    families: {
      Inter: true,
    },
    display: 'swap',
  },

  build: {},
}
