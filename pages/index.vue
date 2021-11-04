<template>
  <div class="grid gap-12">
    <div class="grid items-center py-8 md:min-h-[60vh]">
      <h1 class="text-2xl md:text-4xl font-extralight leading-9 md:leading-[3.25rem] tracking-wide md:tracking-wider max-w-5xl">
        Hi there, my name is
        <span class="font-medium text-blue-800 dark:text-blue-300">Henry Lim</span>,
        and I am a Malaysian web developer working on
        <span class="font-medium text-blue-800 dark:text-blue-300">COVIDNOW</span>,
        <span class="font-medium text-blue-800 dark:text-blue-300">Malaysia Vaccine Tracker</span>,
        <span class="font-medium text-blue-800 dark:text-blue-300">Remote for Slides</span>,
        and more.
        I am also a <span class="font-medium text-blue-800 dark:text-blue-300">Google Developer Expert</span> in Web Technologies.
      </h1>
    </div>
    <div class="grid gap-2 lg:gap-4 md:grid-cols-2">
      <div class="col-span-full text-2xl md:text-3xl font-semibold mb-2">
        Featured Projects
      </div>
      <a
        v-for="(item, key) in projects"
        :key="key"
        :href="item.url"
        target="_blank"
        rel="noopener noreferrer"
        class="pt-1 md:pt-2 pb-4 md:pb-6 rounded-xl cursor-pointer transition hover:bg-gray-100 dark:hover:bg-gray-700 overflow-x-hidden"
      >
        <div class="-mx-1.5 aspect-w-1000 aspect-h-659">
          <Picture
            :path="`/images/projects/${item.image}`"
            type="png"
            alt="Image"
            style-class="dark:hidden"
          />
          <Picture
            :path="`/images/projects/${item.imageDark}`"
            type="png"
            :alt="item.title"
            style-class="hidden dark:block"
          />
        </div>
        <div class="grid gap-1 px-3 md:px-5 -mt-2 md:-mt-3">
          <div class="text-xl md:text-2xl leading-6 text-gray-800 dark:text-gray-100 font-semibold">
            {{ item.title }}
          </div>
          <div class="text-sm md:text-base md:leading-6 font-light dark:text-gray-300">
            {{ item.description }}
          </div>
        </div>
      </a>
    </div>
    <div class="grid gap-2 lg:gap-4 md:grid-cols-2">
      <div class="col-span-full text-2xl md:text-3xl font-semibold mb-2">
        Featured Blog Posts
      </div>
      <a
        v-for="(item, key) in blogs"
        :key="key"
        :href="item.url"
        target="_blank"
        rel="noopener noreferrer"
        class="pt-1 md:pt-2 pb-4 md:pb-6 rounded-xl cursor-pointer transition hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <div class="px-5 pt-3 pb-2">
          <div class="-mx-2 md:-mx-1 aspect-w-16 aspect-h-9">
            <Picture
              :path="`/images/blogs/${item.image}`"
              type="jpeg"
              :alt="item.title"
              style-class="rounded-md"
            />
          </div>
        </div>
        <div class="grid gap-1 px-3 md:px-5 mt-0.5">
          <div class="text-xl md:text-2xl leading-6 text-gray-800 dark:text-gray-100 font-semibold">
            {{ item.title }}
          </div>
          <div class="text-sm md:text-base md:leading-6 font-light dark:text-gray-300">
            {{ item.description }}
          </div>
        </div>
      </a>
    </div>
    <div class="grid grid-cols-3 grid-rows-5 md:grid-rows-4 md:grid-cols-10 gap-2 lg:gap-6 items-center justify-center">
      <div class="col-span-full text-2xl md:text-3xl font-semibold mb-2">
        Find me on the news
      </div>
      <a
        v-for="(item, key) in news"
        :key="key"
        :href="item.url"
        target="_blank"
        rel="noopener noreferrer"
        class="md:col-span-2 w-full h-full rounded-lg md:rounded-xl transition hover:bg-gray-100 dark:bg-gray-50 dark:hover:bg-gray-200"
        :class="item.containerClass"
      >
        <div class="aspect-w-15 aspect-h-8">
          <Picture
            :path="`/images/news/${item.image}`"
            :type="item.type || 'png'"
            :alt="item.name"
            :style-class="`max-w-[80%] md:max-w-[75%] m-auto ${item.class}`"
          />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects () {
      return [{
        title: 'COVIDNOW - Ministry of Health Malaysia',
        description: 'The official Malaysia government website for data and insights on COVID-19. Over a million users visited the page on the launch month. Built using Nuxt.js and TailwindCSS.',
        image: 'covidnow',
        imageDark: 'covidnow-dark',
        url: 'https://covidnow.moh.gov.my'
      }, {
        title: 'Malaysia Vaccine Tracker Twitter Bot',
        description: 'Track the latest vaccination progress in Malaysia on Twitter. Followed by over 13,000 people including prominent politicians, journalists, and more. Built using Firebase Cloud Functions.',
        image: 'vaccine',
        imageDark: 'vaccine-dark',
        url: 'https://twitter.com/MYVaccineCount'
      }, {
        title: 'Remote for Slides',
        description: 'A new way to control Google Slides on any device, remotely, without the need of any extra hardware. Built using Preact and Firebase.',
        image: 'remote',
        imageDark: 'remote-dark',
        url: '/slides'
      }, {
        title: 'Launcher Icon Previewer',
        description: 'Launcher Icon Previewer allows you to preview your launcher icon design on your mobile devices. Built using Firebase.',
        image: 'launcher',
        imageDark: 'launcher-dark',
        url: 'https://limhenry.medium.com/meet-launcher-icon-previewer-preview-your-app-icon-design-on-your-device-321112359bfc'
      }]
    },
    blogs () {
      return [{
        title: 'How to Create Malaysia Flag with HTML and CSS 🇲🇾',
        description: 'A fun way to celebrate  Malaysia\'s 62nd birthday: Create the Malaysia Flag using HTML and CSS.',
        image: 'flag',
        url: 'https://dev.to/henrylim96/how-to-create-malaysia-flag-with-html-and-css-3obe'
      }, {
        title: 'Reading Xiaomi Mi Scale data with Web Bluetooth Scanning API',
        description: 'Learn how I "hack" the Xiaomi Mi Body Composition Scale using Web Bluetooth Scanning API.',
        image: 'scale',
        url: 'https://dev.to/henrylim96/reading-xiaomi-mi-scale-data-with-web-bluetooth-scanning-api-1mb9'
      }, {
        title: 'Zero to 15 — Building a Nothing PWA in 15 mins',
        description: 'Learn how I build a fun (but useless) “Nothing” Progressive Web App in 15 minutes.',
        image: 'nothing',
        url: 'https://dev.to/henrylim96/zero-to-15--building-a-nothing-pwa-in-15-minutes-258j'
      }, {
        title: '30 Events & 10 Websites later — My journey with Google Developer Group Kuala Lumpur',
        description: 'A story of my journey with Google Developer Group Kuala Lumpur.',
        image: 'gdg',
        url: 'https://limhenry.medium.com/my-journey-with-gdg-kuala-lumpur-81e5b82ed7ed'
      }]
    },
    news () {
      return [{
        name: 'The Next Web',
        image: 'tnw',
        type: 'svg',
        url: 'https://thenextweb.com/news/turn-your-phone-into-a-google-slides-remote-control-with-this-chrome-extension'
      }, {
        name: 'New Straits Times',
        image: 'nst',
        url: 'https://www.nst.com.my/news/nation/2021/09/726457/heroes-lift-covid-veil-secrecy'
      }, {
        name: 'The Star',
        image: 'thestar',
        type: 'svg',
        url: 'https://www.thestar.com.my/news/nation/2021/08/15/tech-savvy-guys-step-up'
      }, {
        name: 'Malay Mail',
        image: 'malaymail',
        url: 'https://www.malaymail.com/news/malaysia/2021/10/05/developers-of-covidnow-website-committed-to-helping-pro-bono-as-long-as-the/2010974'
      }, {
        name: 'Digital News Asia',
        image: 'dna',
        url: 'https://www.digitalnewsasia.com/mobility/student-nets-elusive-firebass-ticket-google%E2%80%99s-io-2017'
      }, {
        name: 'Oriental Daily 東方日報',
        image: 'orientaldaily',
        url: 'https://www.orientaldaily.com.my/news/education/2017/04/06/191483'
      }, {
        name: 'China Press 中國報',
        image: 'chinapress',
        url: 'https://www.chinapress.com.my/20211005/%E2%97%A4%E6%96%B0%E5%86%A0%E5%8F%88%E4%B8%80%E5%B9%B4%E2%97%A2-covidnow%E8%B4%A8%E9%87%8F%E4%B8%8D%E9%80%8A%E4%BA%8E%E5%A4%96%E5%9B%BD-%E5%8D%AB%E7%94%9F%E9%83%A8%EF%BC%9A%E5%9B%BD%E4%BA%BA%E5%BA%94/'
      }, {
        name: 'Sin Chew Daily 星洲日報',
        image: 'sinchew',
        url: 'https://www.sinchew.com.my/20211005/cprc%EF%BC%9Acovidnow%E6%8F%90%E4%BE%9B%E5%9F%BA%E5%87%86-%E6%88%96%E5%85%AC%E5%B8%83%E6%9B%B4%E5%A4%9A%E7%96%BE%E7%97%85%E6%95%B0%E6%8D%AE/'
      }, {
        name: 'SOYACINCAU',
        image: 'soyacincau',
        url: 'https://soyacincau.com/2021/09/09/malaysia-moh-covidnow-portal-granular-data-aefi-cases/'
      }, {
        name: 'Lowyat.net',
        image: 'lowyat',
        url: 'https://www.lowyat.net/2021/252403/covidnow-national-covid-stats-site-live/'
      }, {
        name: 'Tatler Asia',
        image: 'tatler',
        url: 'https://www.tatlerasia.com/style/wellness/covid-19-covidnow-website-covid-data-malaysia-khairy-jamaluddin-henry-lim-calum-lim-sheng-han-lim-ro',
        containerClass: 'md:col-start-4',
        class: 'w-auto h-[48px] lg:h-[68px]'
      }, {
        name: 'The Malaysian Insight',
        image: 'tmi',
        url: 'https://www.themalaysianinsight.com/s/343637',
        containerClass: 'md:col-start-6'
      }]
    }
  }
}
</script>

<style scoped>

</style>
