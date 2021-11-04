<template>
  <header class="grid grid-cols-[auto,1fr,auto] py-4 items-center text-gray-700 dark:text-gray-300">
    <router-link to="/">
      <IconLogo class="transition-colors hover:text-blue-700 dark:hover:text-blue-300" />
    </router-link>
    <div />
    <div class="grid grid-flow-col gap-3 md:gap-8 items-center text-lg font-light">
      <NuxtLink
        to="/about"
        class="nav-link hidden md:block transition border-b-2 border-transparent hover:border-gray-500 dark:hover:text-gray-200 dark:hover:border-gray-200"
      >
        About
      </NuxtLink>
      <a
        href="https://twitter.com/henrylim96"
        target="_blank"
        rel="noopener noreferrer"
        class="hidden md:block transition border-b-2 border-transparent hover:border-gray-500 dark:hover:text-gray-200 dark:hover:border-gray-200"
      >
        Twitter
      </a>
      <a
        href="https://patreon.com/remoteforslides"
        target="_blank"
        rel="noopener noreferrer"
        class="hidden md:block transition border-b-2 border-transparent hover:border-gray-500 dark:hover:text-gray-200 dark:hover:border-gray-200"
      >
        Buy me a coffee
      </a>
      <button
        class="-ml-2 transition hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-full opacity-90"
        title="Toggle light/dark theme"
        @click="toggleTheme"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="currentColor"
          class="dark:hover:text-gray-200"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path class="transition-opacity opacity-0 dark:opacity-100" d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
          <path class="transition-opacity dark:opacity-0" d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z" />
        </svg>
      </button>
      <button
        class="md:hidden transition hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-full opacity-90"
        aria-label="Open Drawer"
        @click="showDrawer = true"
      >
        <IconMenu class="dark:hover:text-gray-200" />
      </button>
    </div>
    <div
      class="transition-opacity duration-300 fixed md:hidden inset-0 backdrop-filter backdrop-brightness-50 z-10"
      :class="`${showDrawer ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`"
      @click="showDrawer = false"
    />
    <div
      class="transition-transform duration-300 fixed md:hidden grid gap-4 grid-rows-[auto,auto,1fr] w-[90%] max-w-[300px] inset-y-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-20 rounded-l-xl"
      :class="`${showDrawer ? 'translate-x-0' : 'translate-x-full'}`"
    >
      <div class="grid grid-cols-[1fr,auto] pt-4 pl-6 pr-4">
        <IconLogo class="transition-colors hover:text-blue-700 dark:hover:text-blue-300" />
        <button
          class="grid place-items-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full w-[38px] h-[38px]"
          aria-label="Close Drawer"
          :tabindex="`${showDrawer ? '0' : '-1'}`"
          @click="showDrawer = false"
        >
          <IconClose class="text-gray-900 dark:text-gray-100" />
        </button>
      </div>
      <div class="w-full h-[1px] bg-gray-300 dark:bg-gray-500" />
      <div class="grid gap-2 text-gray-900 dark:text-gray-100 font-light mb-auto pl-3">
        <NuxtLink
          to="/"
          class="drawer-link hover:bg-blue-50 dark:hover:bg-gray-700 rounded-l-full px-5 py-3"
          :tabindex="`${showDrawer ? '0' : '-1'}`"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="drawer-link hover:bg-blue-50 dark:hover:bg-gray-700 rounded-l-full px-5 py-3"
          :tabindex="`${showDrawer ? '0' : '-1'}`"
        >
          About
        </NuxtLink>
        <a
          href="https://twitter.com/henrylim96"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:bg-blue-50 dark:hover:bg-gray-700 rounded-l-full px-5 py-3"
          :tabindex="`${showDrawer ? '0' : '-1'}`"
        >
          Twitter
        </a>
        <a
          href="https://patreon.com/remoteforslides"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:bg-blue-50 dark:hover:bg-gray-700 rounded-l-full px-5 py-3"
          :tabindex="`${showDrawer ? '0' : '-1'}`"
        >
          Buy me a coffee
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    showDrawer: false
  }),
  watch: {
    '$route.name' () {
      this.showDrawer = false
    }
  },
  methods: {
    toggleTheme () {
      const theme = document.querySelector('meta[name=theme-color]')
      if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark')
        theme.setAttribute('content', '#fff')
      } else {
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')
        theme.setAttribute('content', '#111827')
      }
    }
  }
}
</script>

<style scoped>
  a.nav-link.nuxt-link-exact-active {
    @apply border-gray-700 text-gray-900 dark:text-gray-200 dark:border-gray-200;
  }
  a.drawer-link.nuxt-link-exact-active {
    @apply bg-blue-100 text-gray-900 font-medium;
  }
</style>
