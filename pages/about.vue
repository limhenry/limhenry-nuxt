<template>
  <div class="grid gap-8 pt-8">
    <div class="grid items-center py-2 md:py-8">
      <h1 class="text-4xl md:text-5xl font-extralight leading-9 md:leading-[3.25rem] tracking-wide md:tracking-wider max-w-5xl">
        <div>About <span class="font-medium text-blue-800 dark:text-blue-300">Henry Lim</span></div>
      </h1>
    </div>
    <ul class="grid gap-2 text-md md:text-lg list-disc ml-5 max-w-5xl leading-6">
      <li>👋🏻 &nbsp;I am Henry Lim. My Chinese name is 林亨力, and it is pronounced as <i>lín hēng lì</i>.</li>
      <li>🍼 &nbsp;I was born and raised in Johor Bahru, a city located at the southern tip of the Malay Peninsula.</li>
      <li>🧑🏻‍💻 &nbsp;I write code for a living. Mostly JavaScript and CSS, plus a little bit of HTML.</li>
      <li>🏢 &nbsp;I am currently working for a software house as a front-end web developer in Bangkok, Thailand.</li>
      <li>🥑 &nbsp;I am a <a class="hover:underline text-blue-800 dark:text-blue-200" href="https://developers.google.com/community/experts/directory/profile/profile-henry-lim" target="_blank" rel="noopener noreferrer">Google Developer Expert (GDE) in Web Technologies</a> since 2018. I was one of the youngest GDE in the region.</li>
      <li>🧑🏻‍🏫 &nbsp;I taught college students coding fundamentals and web development at The One Academy back in 2018.</li>
      <li>💻 &nbsp;This website is built using Nuxt.js and TailwindCSS.</li>
      <li>🛠 &nbsp;I don't like jQuery and Bootstrap, but for some reason, I like TailwindCSS <a class="link" href="https://tailwindcss.com/docs/just-in-time-mode" target="_blank" rel="noopener noreferrer">(JIT is awesome!)</a>.</li>
      <li>😷 &nbsp;I <a class="link" href="https://covidnow.moh.gov.my/" target="_blank" rel="noopener noreferrer">developed a COVID-19 dashboard</a> for the people of Malaysia as a pro bono project. Over four million users visited the page on the launch month. It was featured on major news outlets in Malaysia.</li>
      <li>💉 &nbsp;I <a class="link" href="https://twitter.com/MYVaccineCount" target="_blank" rel="noopener noreferrer">developed the Malaysia Vaccine Tracker Twitter Bot</a>. It has more than 13,000 followers including prominent politicians, journalists, and more.</li>
      <li>🎛️ &nbsp;I <a class="link" href="/slides" target="_blank" rel="noopener noreferrer">developed a remote control web app for Google Slides called Remote for Slides</a>. Used by hundreds of thousands of people worldwide. It was featured on <a class="link" href="https://thenextweb.com/news/turn-your-phone-into-a-google-slides-remote-control-with-this-chrome-extension" target="_blank" rel="noopener noreferrer">The Next Web</a>.</li>
      <li>🎖 &nbsp;I won a Moto 360 smartwatch and a Raspberry Pi from Firebase Static Showdown Hackathon in 2016.</li>
      <li>🕹 &nbsp;I <a class="link" href="https://www.digitalnewsasia.com/mobility/student-nets-elusive-firebass-ticket-google%E2%80%99s-io-2017" target="_blank" rel="noopener noreferrer">won a free ticket to Google I/O 2017 from a Firebase's Alternate reality game</a> in 2016.</li>
      <li>🏆 &nbsp;I <a class="link" href="https://limhenry.medium.com/how-we-crashed-the-firebase-console-in-front-of-firebase-engineers-a04afac72095" target="_blank" rel="noopener noreferrer">won a Google Wifi and a few hundred dollars of Google Cloud Credit</a> from the Firebase AppFest Hackathon Malaysia in 2017.</li>
      <li>🤪 &nbsp;I love to build useless stuff like <a class="link" href="https://howmanydayssincehenrygothishaircut.limhenry.xyz/" target="_blank" rel="noopener noreferrer">How Many Days Since Henry Got His Haircut</a>, <a class="link" href="https://nothing.limhenry.xyz/" target="_blank" rel="noopener noreferrer">Nothing PWA</a>, and more.</li>
      <li>💈 &nbsp;I haven't had a haircut for more than <del>300 days</del> 1 year (since December 2020).</li>
      <li>🍎 &nbsp;I love Google, but I use iPhone and MacBook <i>(Don't ask me why)</i>.</li>
      <li>🚀 &nbsp;I love aviation and rocket science. I used to play Microsoft Flight Simulator X on my old, slow laptop in the past. Now <a class="link" href="https://twitter.com/henrylim96/status/1443965690646458371">I am playing Microsoft Flight Simulator 2020 on my Xbox Series S</a>.</li>
      <li>🛩 &nbsp;I have a very long list of every flight I've ever been on, since birth. And I flew with AirAsia more than 50 times.</li>
      <li>🧳 &nbsp;I once flew to San Francisco, and Hong Kong Airlines left my luggage on another side of the world.</li>
      <li>🦖 &nbsp;I love T-Rex, and I once <a class="link" href="https://twitter.com/henrylim96/status/1192680461618692096" target="_blank" rel="noopener noreferrer">wore a T-Rex costume at the hottest place on earth</a>: Death Valley National Park.</li>
      <li>🐥 &nbsp;I love to share weird stuff on my social media, like <a class="link" href="https://twitter.com/comrade_dcs/status/1447023763980120065" target="_blank" rel="noopener noreferrer">this</a>, <a class="link" href="https://twitter.com/thegallowboob/status/1446884244697931778" target="_blank" rel="noopener noreferrer">this</a>, and <a class="link" href="https://twitter.com/gatitos_qctd/status/1435683561869357060" target="_blank" rel="noopener noreferrer">this</a>.</li>
      <li>👕 &nbsp;My wardrobe is full of free t-shirts and hoodies from tech conferences.</li>
      <li>☕️ &nbsp;I love money (Who doesn't?). You can <a class="link" href="https://patreon.com/remoteforslides" target="_blank" rel="noopener noreferrer">support me on Patreon</a>, this will motivate me to build more cool stuff.</li>
      <li>🇲🇾 &nbsp;Malaysian food is better than Singaporean food.</li>
    </ul>
    <div class="grid items-center py-2 md:py-8">
      <h2 class="text-4xl md:text-5xl font-extralight leading-9 md:leading-[3.25rem] tracking-wide md:tracking-wider max-w-5xl">
        News Articles
      </h2>
    </div>
    <div class="grid gap-6 md:gap-8">
      <div
        v-for="(section, nKey) in news"
        :key="nKey"
        class="grid gap-4 text-md md:text-lg leading-5 md:leading-6"
      >
        <div>{{ section.date }}</div>
        <ul class="grid gap-2 list-disc ml-5 max-w-5xl">
          <li
            v-for="(item, key) in section.items"
            :key="key"
          >
            <a
              class="link"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
            >{{ item.title }}</a>
            <span> &middot; </span>
            <span class="text-gray-800 dark:text-gray-300">
              {{ item.source }}
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="grid gap-2 items-center py-2 md:py-8">
      <h2 class="text-4xl md:text-5xl font-extralight leading-9 md:leading-[3.25rem] tracking-wide md:tracking-wider max-w-5xl">
        Photos
      </h2>
      <h3 class="text-md md:text-lg font-light text-gray-700 dark:text-gray-300">
        If you are a conference, a print or online media, or otherwise, please feel free to use the below for articles or interviews.
      </h3>
    </div>
    <div class="grid grid-cols-2 gap-1.5 md:gap-4">
      <a
        v-for="(item, key) in photos"
        :key="key"
        :class="item.class"
        :href="`${item.path}-full.jpeg`"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Picture
          :path="item.path"
          :alt="item.alt"
          type="jpeg"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'About Henry Lim'
    }
  },
  computed: {
    news () {
      return [{
        date: 'March 2017',
        items: [{
          title: 'Student nets elusive Firebass for ticket to Google’s I/O 2017',
          url: 'https://www.digitalnewsasia.com/mobility/student-nets-elusive-firebass-ticket-google%E2%80%99s-io-2017',
          source: 'Digital News Asia'
        }]
      }, {
        date: 'April 2017',
        items: [{
          title: '解码通关',
          url: 'https://www.orientaldaily.com.my/news/education/2017/04/06/191483',
          source: 'Oriental Daily 東方日報'
        }]
      }, {
        date: 'December 2017',
        items: [{
          title: 'Turn your phone into a Google Slides remote control with this Chrome extension',
          url: 'https://thenextweb.com/news/turn-your-phone-into-a-google-slides-remote-control-with-this-chrome-extension',
          source: 'The Next Web'
        }, {
          title: 'Remote for Google Slides : l’extension Chrome pour les présentations',
          url: 'https://siecledigital.fr/2017/12/05/remote-google-slides-extension-chrome-pour-les-presentations/',
          source: 'Siècle Digital'
        }]
      }, {
        date: 'August 2021',
        items: [{
          title: 'Tech savvy guys step up',
          url: 'https://www.thestar.com.my/news/nation/2021/08/15/tech-savvy-guys-step-up',
          source: 'The Star'
        }]
      }, {
        date: 'September 2021',
        items: [{
          title: 'MOH launches COVIDNOW portal, provides more granular COVID-19 data including vaccine adverse effects',
          url: 'https://soyacincau.com/2021/09/09/malaysia-moh-covidnow-portal-granular-data-aefi-cases/',
          source: 'SOYACINCAU'
        }, {
          title: 'Khairy Launches Covid-19 Dashboard To \'Lift Veil Of Secrecy\'',
          url: 'https://codeblue.galencentre.org/2021/09/09/khairy-launches-covid-19-dashboard-to-lift-veil-of-secrecy/',
          source: 'CodeBlue'
        }, {
          title: 'COVIDNOW: The New National COVID-19 Statistics Website Is Now Live',
          url: 'https://www.lowyat.net/2021/252403/covidnow-national-covid-stats-site-live/',
          source: 'Lowyat.net'
        }, {
          title: '4年轻人不收费 义务创建卫部新网站COVIDNOW',
          url: 'https://www.orientaldaily.com.my/news/nation/2021/09/10/436942',
          source: 'Oriental Daily 東方日報'
        }, {
          title: '卫部 \'COVIDNOW\' 幕后功臣 4年轻人分文不取义务创建',
          url: 'https://www.sinchew.com.my/20210910/%E5%8D%AB%E9%83%A8covidnow%E5%B9%95%E5%90%8E%E5%8A%9F%E8%87%A3-4%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%88%86%E6%96%87%E4%B8%8D%E5%8F%96%E4%B9%89%E5%8A%A1%E5%88%9B%E5%BB%BA/',
          source: 'Sin Chew Daily 星洲日報'
        }, {
          title: 'Heroes lift Covid \'veil of secrecy',
          url: 'https://www.nst.com.my/news/nation/2021/09/726457/heroes-lift-covid-veil-secrecy',
          source: 'New Straits Times'
        }, {
          title: 'Promoting behavioural change',
          url: 'https://www.thestar.com.my/news/nation/2021/09/12/promoting-behavioural-change',
          source: 'The Star'
        }, {
          title: 'COVIDNOW: The Team Behind Malaysia’s Coronavirus Data Transparency',
          url: 'https://www.tatlerasia.com/style/wellness/covid-19-covidnow-website-covid-data-malaysia-khairy-jamaluddin-henry-lim-calum-lim-sheng-han-lim-ro',
          source: 'Tatler Asia'
        }]
      }, {
        date: 'October 2021',
        items: [{
          title: 'COVIDNOW portal reflects \'whole-of-society\' approach',
          url: 'https://www.nst.com.my/news/nation/2021/10/733870/covidnow-portal-reflects-whole-society-approach',
          source: 'New Straits Times',
          date: 'Oct 5, 2021'
        }, {
          title: 'Developers of COVIDNOW website committed to helping pro bono as long as they’re needed',
          url: 'https://www.malaymail.com/news/malaysia/2021/10/05/developers-of-covidnow-website-committed-to-helping-pro-bono-as-long-as-the/2010974',
          source: 'Malay Mail',
          date: 'Oct 5, 2021'
        }, {
          title: '新冠又一年 COVIDNOW质量不逊于外国 卫生部: 国人应自豪',
          url: 'https://www.chinapress.com.my/20211005/%E2%97%A4%E6%96%B0%E5%86%A0%E5%8F%88%E4%B8%80%E5%B9%B4%E2%97%A2-covidnow%E8%B4%A8%E9%87%8F%E4%B8%8D%E9%80%8A%E4%BA%8E%E5%A4%96%E5%9B%BD-%E5%8D%AB%E7%94%9F%E9%83%A8%EF%BC%9A%E5%9B%BD%E4%BA%BA%E5%BA%94/',
          source: 'China Press 中國報',
          date: 'Oct 5, 2021'
        }, {
          title: 'CPRC: COVIDNOW提供基准 或公布更多疾病数据',
          url: 'https://www.sinchew.com.my/20211005/cprc%EF%BC%9Acovidnow%E6%8F%90%E4%BE%9B%E5%9F%BA%E5%87%86-%E6%88%96%E5%85%AC%E5%B8%83%E6%9B%B4%E5%A4%9A%E7%96%BE%E7%97%85%E6%95%B0%E6%8D%AE/',
          source: 'Sin Chew Daily 星洲日報',
          date: 'Oct 5, 2021'
        }, {
          title: 'COVIDNOW提升透明度 人民轻易掌握数据信息',
          url: 'https://www.themalaysianinsight.com/chinese/s/343641',
          source: 'The Malaysian Insight',
          date: 'Oct 5, 2021'
        }, {
          title: 'COVIDNOW an unprecedented level of transparency for govt',
          url: 'https://www.themalaysianinsight.com/s/343637',
          source: 'The Malaysian Insight',
          date: 'Oct 5, 2021'
        }, {
          title: 'COVIDNOW: Making Sense Of The Pandemic',
          url: 'https://codeblue.galencentre.org/2021/10/06/covidnow-making-sense-of-the-pandemic/',
          source: 'CodeBlue',
          date: 'Oct 6, 2021'
        }]
      }]
    },
    photos () {
      return [{
        path: '/images/about/golden-gate',
        alt: 'Henry Lim with his dark gray parka at Golden Gate Overlook, San Francisco.',
        class: 'col-span-1 aspect-w-3 aspect-h-4'
      }, {
        path: '/images/about/bigsur',
        alt: 'Henry Lim holding a orangutan soft toy at Big Sur, California.',
        class: 'col-span-1 aspect-w-3 aspect-h-4'
      }, {
        path: '/images/about/gbike',
        alt: 'Henry Lim riding a GBike at Google\'s Mountain View campus in California.',
        class: 'col-span-full aspect-w-4 aspect-h-3'
      }, {
        path: '/images/about/talk',
        alt: 'Henry Lim giving a talk about the latest web technologies in Bangkok, Thailand.',
        class: 'col-span-full aspect-w-16 aspect-h-9'
      }, {
        path: '/images/about/trex',
        alt: 'Henry Lim in a T-Rex costume at Death Valley National Park, California.',
        class: 'col-span-full aspect-w-16 aspect-h-9'
      }]
    }
  }
}
</script>

<style scoped>
  .link {
    @apply hover:underline text-blue-800 dark:text-blue-200;
  }
</style>
