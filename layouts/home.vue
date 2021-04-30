<template>
  <div class="dark:bg-gray-900 bg-white min-h-screen">
    <layout-nav :show-avatar="false" />
    <div class="w-full max-w-5xl mx-auto pt-16">
      <div class="lg:flex relative">
        <aside
          class="h-screen -mt-16 sticky top-0 border-gray-100 hidden p-4 lg:pt-32 lg:block lg:border-r lg:w-96 dark:border-transparent"
        >
          <div class="relative">
            <div @click.prevent.stop="toggleColorMode()">
              <icons-sun
                v-if="$colorMode.value === 'light'"
                class="w-8 h-8 absolute left-0 cursor-pointer z-10"
              />

              <icons-moon
                v-else
                class="w-8 h-8 absolute left-0 cursor-pointer z-10"
              />
            </div>
            <img
              src="https://s.gravatar.com/avatar/a5f485272d3ff15711f33bcf4f4c839f?s=150"
              alt="Phuong Phung's Avatar"
              class="rounded-full w-32"
            />
          </div>

          <h2
            class="font-medium text-xl mb-2 mt-4 text-gray-700 dark:text-gray-50"
          >
            Phuong Phung
            <a
              href="https://github.com/senpp"
              rel="noopener noreferrer"
              target="_blank"
              class="text-purple-600 dark:text-purple-400 hover:underline"
            >
              @senpp
            </a>
          </h2>

          <p class="text-gray-400 dark:text-gray-400">
            Blog của tôi không viết 100% về code, nó còn là về cuộc sống của
            tôi.
          </p>
        </aside>

        <main
          class="w-full flex-auto p-2 lg:px-12 md:p-4 lg:py-6 lg:pt-10 lg:static lg:max-h-full"
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
