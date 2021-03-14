<template>
  <div>
    <div class="mb-8">
      <span class="text-2xl capitalize font-medium text-gray-700 inline-block">
        {{ pages[0].category }}
      </span>
    </div>

    <div v-for="page in pages" :key="page.slug" class="mb-12">
      <nuxt-link
        :to="{
          path: page.path,
        }"
        class="text-xl font-medium text-gray-700 hover:text-purple-700"
      >
        {{ page.title }}
      </nuxt-link>
      <div class="flex items-center">
        <span class="uppercase text-sm font-medium text-gray-400">
          {{ $dayjs(page.updatedAt).format('DD MMM, YYYY') }}
        </span>

        <div class="ml-4">
          <span class="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded">
            {{ page.category }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryPage',

  layout: 'home',

  async asyncData({ $content, route }) {
    const pages = await $content(route.params.category).fetch()

    return {
      pages,
    }
  },

  head() {
    return {
      title:
        this.pages && this.pages[0]
          ? `${this.pages[0].category
              .charAt(0)
              .toUpperCase()}${this.pages[0].category.slice(1)} - `
          : '',
    }
  },
}
</script>
