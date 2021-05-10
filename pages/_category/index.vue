<template>
  <elements-overlay :busy="busy">
    <template v-if="pages && pages[0]">
      <div class="mb-8">
        <span
          class="
            text-sm
            font-medium
            text-gray-500
            uppercase
            inline-block
            dark:text-white
          "
        >
          # {{ pages[0].category }}
        </span>
      </div>

      <div v-for="page in pages" :key="page.slug" class="mb-12">
        <nuxt-link
          :to="{
            path: page.path,
          }"
          class="
            text-xl
            font-medium
            text-gray-700
            hover:text-purple-700
            dark:text-white
          "
        >
          {{ page.title }}
        </nuxt-link>
        <div class="flex items-center">
          <span class="uppercase text-sm font-medium text-gray-400">
            {{ $dayjs(page.updatedAt).format('DD MMM, YYYY') }}
          </span>

          <div class="ml-4">
            <elements-tag :label="page.category" :to="page.dir" />
          </div>
        </div>
      </div>
    </template>

    <div v-else>
      <p class="text-gray-600 dark:text-gray-400">Không tìm thấy danh mục.</p>
    </div>
  </elements-overlay>
</template>

<script>
import {
  defineComponent,
  useMeta,
  useContext,
  useRoute,
  useAsync,
  ref,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'CategoryPage',

  layout: 'home',

  setup() {
    const { $content, params } = useContext()
    const busy = ref(true)
    const route = useRoute()

    const pages = useAsync(async () => {
      busy.value = false
      return await $content(params.value.category).fetch()
    })

    useMeta(() => ({
      title:
        pages && pages[0]
          ? `${pages[0].category
              .charAt(0)
              .toUpperCase()}${pages[0].category.slice(1)} - `
          : '',

      meta: [
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: `https://phuongphung.com${route.value.fullPath}`,
        },
      ],
    }))

    return {
      pages,
      busy,
    }
  },

  head: {},
})
</script>
