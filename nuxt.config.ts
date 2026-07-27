// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  app: {
    head: {
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
        { name: 'description', content: 'Henry Lim is a Malaysian web developer working on COVIDNOW, Malaysia Vaccine Tracker, Remote for Slides, and more. He is also a Google Developer Expert in Web Technologies.' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#fff' },
        { property: 'og:description', content: 'Henry Lim is a Malaysian web developer working on COVIDNOW, Malaysia Vaccine Tracker, Remote for Slides, and more. He is also a Google Developer Expert in Web Technologies.' },
        { property: 'og:image', content: 'https://limhenry.xyz/images/about/gbike.jpeg' },
        { property: 'og:image:width', content: '1300' },
        { property: 'og:image:height', content: '976' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@henrylim96' },
        { name: 'twitter:title', content: 'Henry Lim' },
        { name: 'twitter:description', content: 'Henry Lim is a Malaysian web developer working on COVIDNOW, Malaysia Vaccine Tracker, Remote for Slides, and more. He is also a Google Developer Expert in Web Technologies.' },
        { name: 'twitter:image', content: 'https://limhenry.xyz/images/about/gbike.jpeg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
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
          type: 'text/javascript'
        }
      ]
    }
  },

  nitro: {
    output: {
      publicDir: 'dist'
    }
  }
})
