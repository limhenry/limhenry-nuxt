<template>
  <div :class="{'max-w-6xl mx-auto px-4 md:px-6': !isSlides}">
    <Header v-if="!isSlides" />
    <main>
      <Nuxt />
    </main>
    <Footer v-if="!isSlides" />
  </div>
</template>

<script>
export default {
  computed: {
    isSlides () {
      return this.$route.name === 'slides'
    }
  }
}
</script>
