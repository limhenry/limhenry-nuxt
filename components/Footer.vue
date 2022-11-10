<template>
  <footer class="grid gap-6 px-3 pt-24 pb-12 text-gray-500 dark:text-gray-400">
    <div class="grid grid-cols-4 sm:grid-cols-8 gap-y-4 gap-6 md:gap-8 justify-center justify-items-center mx-auto">
      <a
        href="https://twitter.com/henrylim96"
        target="_blank"
        rel="noopener noreferrer"
        class="transition hover:text-gray-600 dark:hover:text-gray-300"
      >
        <IconTwitter class="w-[22px] h-[22px]" />
      </a>
      <a
        href="http://github.com/limhenry"
        target="_blank"
        rel="noopener noreferrer"
        class="transition hover:text-gray-600 dark:hover:text-gray-300"
      >
        <IconGithub class="w-[22px] h-[22px]" />
      </a>
      <a
        href="https://www.linkedin.com/in/henrylim96/"
        target="_blank"
        rel="noopener noreferrer"
        class="transition hover:text-gray-600 dark:hover:text-gray-300"
      >
        <IconLinkedin class="w-[22px] h-[22px]" />
      </a>
      <a
        href="https://dev.to/henrylim96"
        target="_blank"
        rel="noopener noreferrer"
        class="transition hover:text-gray-600 dark:hover:text-gray-300"
      >
        <IconDevto class="w-[22px] h-[22px]" />
      </a>
      <a
        href="https://limhenry.medium.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="transition hover:text-gray-600 dark:hover:text-gray-300"
      >
        <IconMedium class="w-[22px] h-[22px]" />
      </a>
      <a
        href="https://developers.google.com/community/experts/directory/profile/profile-henry-lim"
        target="_blank"
        rel="noopener noreferrer"
        class="transition hover:text-gray-600 dark:hover:text-gray-300"
      >
        <IconGde class="w-[22px] h-[22px]" />
      </a>
      <a
        href="https://www.patreon.com/remoteforslides/"
        target="_blank"
        rel="noopener noreferrer"
        class="transition hover:text-gray-600 dark:hover:text-gray-300"
      >
        <IconKofi class="w-[22px] h-[22px]" />
      </a>
      <a
        href="https://patreon.com/remoteforslides"
        target="_blank"
        rel="noopener noreferrer"
        class="transition hover:text-gray-600 dark:hover:text-gray-300"
      >
        <IconPatreon class="w-[22px] h-[22px]" />
      </a>
    </div>
    <div class="text-sm text-center">
      &copy; {{ new Date().getFullYear() }} Henry Lim. All rights reserved.
    </div>
  </footer>
</template>
