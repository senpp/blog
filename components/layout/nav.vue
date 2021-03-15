<template>
  <div
    class="w-full border-b border-gray-100 mb-2 sticky top-0 bg-white z-10 px-2 text-sm md:px-4 sm:text-base dark:bg-gray-900 dark:border-gray-800"
  >
    <div class="mx-auto max-w-5xl">
      <div class="flex items-center h-16">
        <nuxt-link to="/">
          <img
            src="https://s.gravatar.com/avatar/a5f485272d3ff15711f33bcf4f4c839f?s=150"
            alt="Phuong Phung's Avatar"
            class="block rounded-full w-8"
            :class="{ 'lg:hidden': !showAvatar }"
          />
        </nuxt-link>

        <div class="ml-auto">
          <nuxt-link
            to="/"
            class="font-medium mx-2 hover:font-semibold hover:text-purple-600 hover:underline dark:text-white"
          >
            Trang chủ
          </nuxt-link>
          <nuxt-link
            to="/portfolio"
            class="font-medium mx-2 hover:font-semibold hover:text-purple-600 hover:underline dark:text-white"
          >
            Về tôi
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showAvatar: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply font-medium text-purple-700 underline;
}
</style>
