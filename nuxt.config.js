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

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/dayjs',
    '@nuxtjs/sitemap',
  ],

  googleAnalytics: {
    id: 'UA-163272788-1',
  },

  axios: {},

  content: {
    liveEdit: false,
  },

  googleFonts: {
    families: {
      Inter: true,
    },
    display: 'swap',
  },

  sitemap: {
    gzip: true,
    path: '/sitemap.xml',
    cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
  },

  build: {},
}
