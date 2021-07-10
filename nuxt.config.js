import MetaConfig from './config/meta'

export default {
  ssr: false,
  target: 'static',

  head: {
    title: 'phuongphung.com',
    titleTemplate: '%sphuongphung.com',
    meta: MetaConfig,
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/composition-api/module',
    'nuxt-windicss',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics',
    '@nuxtjs/google-fonts',
    '@nuxtjs/svg',
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
      Asap: true,
    },
    display: 'swap',
  },

  generate: {
    interval: 2000,
  },

  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },
}
