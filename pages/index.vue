<template>
  <div>
    <template v-if="!busy">
      <div v-for="page in pages" :key="page.slug" class="mb-12">
        <nuxt-link
          :to="{
            path: page.path,
          }"
          class="text-xl font-medium text-gray-700 transition dark:hover:text-purple-400 hover:text-purple-700 dark:text-white"
        >
          {{ page.title }}
        </nuxt-link>
        <div class="flex items-center">
          <span
            class="uppercase text-sm font-medium text-gray-400 dark:text-gray-400"
          >
            {{ $dayjs(page.createdAt).format('DD MMM, YYYY') }}
          </span>

          <div class="ml-4">
            <elements-tag :label="page.category" :to="page.dir" />
          </div>
        </div>
      </div>
    </template>

    <elements-overlay v-if="busy" :busy="busy" class="h-30" />
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  useAsync,
  useContext,
  useMeta,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Homepage',

  layout: 'home',

  setup() {
    const { $content } = useContext()
    const busy = ref(true)

    const pages = useAsync(
      async () =>
        await $content('', { deep: true })
          .where({ publish: true })
          .sortBy('updatedAt', 'desc')
          .limit(10)
          .fetch()
    )

    busy.value = false

    useMeta(() => ({ title: '' }))

    return {
      pages,
      busy,
    }
  },

  head: {},
})
</script>
