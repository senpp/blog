<template>
  <nuxt-link
    v-if="label"
    class="
      text-sm
      inline-block
      bg-purple-100
      text-purple-700
      px-2
      py-1
      rounded
      hover:underline hover:text-purple-900
      dark:bg-purple-900 dark:text-white dark:opacity-90
    "
    :to="{
      path: to,
    }"
  >
    {{ label }}
  </nuxt-link>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    label: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
  },
})
</script>
