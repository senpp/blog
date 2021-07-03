<template>
  <transition
    enter-active-class="ease-out duration-300"
    enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    enter-to-class="opacity-100 translate-y-0 sm:scale-100"
    leave-active-class="ease-in duration-200"
    leave-class="opacity-100 translate-y-0 sm:scale-100"
    leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  >
    <div class="relative min-h-40">
      <div
        v-if="busy"
        class="
          flex
          absolute
          top-1/2
          left-1/2
          transform
          -translate-y-1/2 -translate-x-1/2
          items-center
          bg-white
          shadow
          dark:shadow-none dark:bg-dark-100
          py-1
          px-2
          rounded
          cursor-wait
          select-none
        "
      >
        <icon-loading
          class="
            animate-spin
            h-5
            w-5
            text-gray-400
            dark:text-indigo-50
            mr-2
            loading-spin
          "
        />
        <span
          class="
            text-xs
            tracking-tight
            font-medium
            text-gray-500
            dark:text-indigo-50
          "
        >
          Đang tải bài viết...
        </span>
      </div>

      <slot />
    </div>
  </transition>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import IconLoading from '~/assets/svg/icon-loading.svg?inline'
export default defineComponent({
  components: { IconLoading },
  props: {
    busy: {
      type: Boolean,
      default: false,
    },
  },
  setup() {},
})
</script>

<style scoped>
.loading-spin circle {
  opacity: 0.25;
}
</style>
