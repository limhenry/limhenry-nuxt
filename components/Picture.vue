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
      :width="width"
      :height="height"
      :class="styleClass"
      :loading="loading"
      class="w-full dark:saturate-[90%]"
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
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    loading: {
      type: String,
      default: 'lazy'
    }
  }
}
</script>
