export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    __dangerouslyDisableSanitizers: ['script'],
    title: 'Henry Lim',
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      class: 'transition dark:bg-gray-900 dark:text-gray-50'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Henry Lim is a Malaysian web developer working on COVIDNOW, Malaysia Vaccine Tracker, Remote for Slides, and more. He is also a Google Developer Expert in Web Technologies.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#fff' },
      { hid: 'og:description', property: 'og:description', content: 'Henry Lim is a Malaysian web developer working on COVIDNOW, Malaysia Vaccine Tracker, Remote for Slides, and more. He is also a Google Developer Expert in Web Technologies.' },
      { hid: 'og:image', property: 'og:image', content: 'https://limhenry.xyz/images/about/gbike.jpeg' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1300' },
      { hid: 'og:image:height', property: 'og:image:height', content: '976' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@henrylim96' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Henry Lim' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Henry Lim is a Malaysian web developer working on COVIDNOW, Malaysia Vaccine Tracker, Remote for Slides, and more. He is also a Google Developer Expert in Web Technologies.' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://limhenry.xyz/images/about/gbike.jpeg' }
    ],
    link: [
      { hid: 'favicon', rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        hid: 'theme',
        innerHTML: `
          if (typeof theme === 'undefined') {
            const theme = document.querySelector('meta[name=theme-color]')
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
              theme.setAttribute('content', '#111827')
            } else {
              document.documentElement.classList.remove('dark')
              theme.setAttribute('content', '#fff')
            }
          }
        `,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  features: {
    router: true, // not implemented
    store: false,
    layouts: true,
    meta: true,
    middleware: false,
    transitions: false,
    deprecations: false,
    validate: false,
    asyncData: false,
    fetch: false,
    clientOnline: false,
    clientPrefetch: false,
    clientUseUrl: false, // this is a bit of an odd one, but using URL should eg be ok for modern mode already
    componentAliases: false,
    componentClientOnly: true
  }
}
