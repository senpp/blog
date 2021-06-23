<template>
  <div class="dark:bg-gray-900 bg-white min-h-screen">
    <layout-nav :show-avatar="false" />
    <div class="w-full max-w-5xl mx-auto pt-16">
      <div class="relative">
        <main
          class="
            w-full
            flex-auto
            p-2
            lg:px-12
            md:p-4
            lg:py-6 lg:pt-10 lg:static lg:max-h-full
          "
        >
          <Nuxt />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $colorMode } = useContext()

    const toggleColorMode = () => {
      if ($colorMode.value === 'light') {
        $colorMode.preference = 'dark'
      } else {
        $colorMode.preference = 'light'
      }
    }

    return { toggleColorMode }
  },
})
</script>
