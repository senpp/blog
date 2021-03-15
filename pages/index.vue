<template>
  <div>
    <div v-for="page in pages" :key="page.slug" class="mb-12">
      <nuxt-link
        :to="{
          path: page.path,
        }"
        class="text-xl font-medium text-gray-700 transition hover:text-purple-700 dark:text-white"
      >
        {{ page.title }}
      </nuxt-link>
      <div class="flex items-center">
        <span
          class="uppercase text-sm font-medium text-gray-400 dark:text-gray-400"
        >
          {{ $dayjs(page.updatedAt).format('DD MMM, YYYY') }}
        </span>

        <div class="ml-4">
          <nuxt-link
            class="text-sm inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded hover:underline hover:text-purple-900 dark:bg-purple-900 dark:text-white dark:opacity-50"
            :to="{
              path: page.dir,
            }"
          >
            {{ page.category }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  layout: 'home',

  async asyncData({ $content }) {
    const pages = await $content('', { deep: true })
      .sortBy('updatedAt', 'desc')
      .limit(10)
      .fetch()

    return {
      pages,
    }
  },

  head() {
    return {
      title: '',
    }
  },
}
</script>
