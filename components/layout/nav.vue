<template>
  <div
    class="
      w-full
      border-b border-gray-100
      mb-2
      fixed
      top-0
      bg-white
      z-10
      px-2
      text-sm
      md:px-4
      sm:text-base
      dark:bg-gray-900
      dark:border-gray-800
    "
  >
    <div class="mx-auto max-w-5xl">
      <div class="flex items-center h-16">
        <nuxt-link to="/">
          <img
            src="https://s.gravatar.com/avatar/a5f485272d3ff15711f33bcf4f4c839f?s=32"
            alt="Phuong Phung's Avatar"
            class="block rounded-full"
            width="32"
            height="32"
            :class="{ 'lg:hidden': !showAvatar }"
          />
        </nuxt-link>

        <div class="ml-auto">
          <nuxt-link
            v-for="item in items"
            :key="item.to.substring(1) ? item.to.substring(1) : 'home'"
            :to="item.to"
            exact-active-class="text-purple-700 dark:text-purple-400 underline"
            class="
              font-medium
              mx-2
              hover:text-purple-600
              dark:hover:text-purple-400
              hover:underline
              dark:text-white
            "
          >
            {{ item.label }}
          </nuxt-link>
        </div>

        <div
          class="ml-8"
          :class="{ 'lg:hidden': !showAvatar }"
          @click.prevent.stop="toggleColorMode()"
        >
          <icon-sun
            v-if="$colorMode.value === 'light'"
            class="w-8 h-8 cursor-pointer"
          />

          <icon-moon v-else class="w-8 h-8 cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, useContext } from '@nuxtjs/composition-api'
import IconSun from '~/assets/svg/icon-sun.svg?inline'
import IconMoon from '~/assets/svg/icon-moon.svg?inline'

export default defineComponent({
  components: { IconSun, IconMoon },

  props: {
    showAvatar: {
      type: Boolean,
      default: true,
    },
  },

  setup() {
    const { $colorMode } = useContext()

    const toggleColorMode = () => {
      if ($colorMode.value === 'light') {
        $colorMode.preference = 'dark'
      } else {
        $colorMode.preference = 'light'
      }
    }

    const items = [
      {
        label: 'Trang chủ',
        to: '/',
      },
      {
        label: 'Về tôi',
        to: '/portfolio',
      },
    ]

    return { toggleColorMode, items }
  },
})
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply font-medium text-purple-700 underline;
}
</style>
