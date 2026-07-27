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

<script setup lang="ts">
interface Props {
  path: string
  type?: string
  alt: string
  styleClass?: string
  width?: string
  height?: string
  loading?: 'lazy' | 'eager'
}

withDefaults(defineProps<Props>(), {
  type: 'jpeg',
  styleClass: '',
  width: '',
  height: '',
  loading: 'lazy'
})
</script>
