<template>
  <transition
    enter-active-class="ease-out duration-300"
    enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    enter-to-class="opacity-100 translate-y-0 sm:scale-100"
    leave-active-class="ease-in duration-200"
    leave-class="opacity-100 translate-y-0 sm:scale-100"
    leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  >
    <div class="relative min-h-10">
      <div
        v-if="busy"
        class="
          flex
          absolute
          items-center
          bg-white
          dark:bg-gray-900
          h-full
          w-full
          py-1
          rounded
          cursor-wait
          select-none
        "
      >
        <span
          class="tracking-tight font-light text-gray-500 dark:text-indigo-50"
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
export default defineComponent({
  components: {},
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
