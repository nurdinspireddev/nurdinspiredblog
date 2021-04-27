import colors from 'vuetify/es5/util/colors'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Nurd Inspired Dev',
    title: 'Nurd Inspired Dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href:"https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;1,300;1,400&display=swap" }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/dateFilters.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],
  hooks: {
    // Adding reading-time 
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        //const { time } = require('reading-time')(document.text)
        const readingTime = require('reading-time');
        const stats = readingTime(document.text);

        document.readingTime = stats
      }
    }
  },
  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
    prism: {
      theme: '~/assets/prism-dm-mono.css'
    }
  }
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    defaultAssets: {
      font: {
        family: 'Roboto'
      },
      icons: false //'mdi'
    },
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './plugins/vuetify.options.js'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    cssSourceMap: false, //console error
  }
}
