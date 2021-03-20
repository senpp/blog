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
          <elements-tag :label="page.category" :to="page.dir" />
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
