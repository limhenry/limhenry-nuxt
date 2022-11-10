<template>
  <!-- Credit: https://twitter.com/mxbck/status/1590809274808147990 -->
  <div class="relative">
    <div
      v-if="showDialog"
      class="fixed w-full h-full z-10 top-0 left-0"
      @click="showDialog = false"
    />
    <div
      v-show="showDialog"
      class="absolute z-20 top-8 md:left-4 grid gap-2 bg-white dark:bg-gray-800 dark:text-white shadow-lg border border-gray-200 dark:border-gray-800 rounded-2xl px-4 py-6 w-full min-w-[320px] text-center"
    >
      <IconVerified class="transition-colors mx-auto" width="32" />
      <div class="text-xl font-bold leading-8">
        Verified account
      </div>
      <div class="text-sm leading-4 opacity-90">
        Yo $8 checkmark! I guess I am fames now?
      </div>
    </div>
    <div class="grid grid-flow-col gap-2">
      <router-link to="/">
        <Picture
          path="/images/avatar/avatar"
          type="jpg"
          width="48"
          height="48"
          style-class="rounded-full w-[48px]"
          alt="Profile picture of Henry Lim"
          loading="eager"
        />
      </router-link>
      <div class="flex flex-col justify-center gap-1">
        <div class="grid grid-flow-col items-center justify-start gap-1 dark:text-white">
          <router-link to="/">
            <h1 class="text-lg font-extrabold leading-5">
              Henry Lim
            </h1>
          </router-link>
          <button @click="showDialog = !showDialog">
            <IconVerified class="transition-colors" />
          </button>
        </div>
        <router-link to="/" class="grid grid-flow-col items-center justify-start gap-0.5 font-medium text-gray-600 dark:text-gray-400">
          <IconOfficial class="transition-colors" />
          <span class="text-md leading-4">Official</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showDialog: false
  })
}
</script>
