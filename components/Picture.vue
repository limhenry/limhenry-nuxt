<template>
  <picture class="flex">
    <source
      v-if="type === 'svg'"
      :srcset="`${path}.svg`"
      type="image/svg+xml"
    >
    <source
      :srcset="`${path}.avif`"
      type="image/avif"
    >
    <source
      :srcset="`${path}.webp`"
      type="image/webp"
    >
    <img
      :src="`${path}.${type}`"
      :alt="alt"
      loading="lazy"
      class="w-full dark:saturate-[90%]"
      :class="styleClass"
    >
  </picture>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'jpeg'
    },
    alt: {
      type: String,
      required: true
    },
    styleClass: {
      type: String,
      default: ''
    }
  }
}
</script>
