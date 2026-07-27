<template>
  <div :class="{'max-w-6xl mx-auto px-4 md:px-6': !isSlides}">
    <Header v-if="!isSlides" />
    <main>
      <slot />
    </main>
    <Footer v-if="!isSlides" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const isSlides = computed(() => route.name === 'slides')
</script>
