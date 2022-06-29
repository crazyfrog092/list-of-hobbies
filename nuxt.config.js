import localeRu from './locales/ru.js';

export default {
  ssr: false,

  head: {
    title: 'Список хобби',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  css: ['~/assets/scss/main/index.scss'],

  styleResources: {
    scss: ['~/assets/scss/styleResources/index.scss'],
  },

  plugins: [
    { src: '~/plugins/injectComponents.js' },
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
  ],

  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/i18n',
  ],

  build: {
  },

  i18n: {
    locales: ['ru'],
    defaultLocale: 'ru',
    strategy: 'no_prefix',
    vueI18n: {
      messages: {
        ru: localeRu,
      },
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
    },
  },
};
