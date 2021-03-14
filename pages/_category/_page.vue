<template>
  <div
    class="pt-4 prose prose-sm prose-purple sm:prose md:px-4 lg:prose-lg mx-auto"
  >
    <h1>
      {{ page.title }}
    </h1>
    <p class="text-gray-400 text-base">
      {{ $dayjs(page.updatedAt).format('DD MMM, YYYY') }}
    </p>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  name: 'SinglePage',
  layout: 'page',

  async asyncData({ $content, route }) {
    const page = await $content(route.params.category)
      .where({ slug: route.params.page })
      .limit(1)
      .fetch()

    return {
      page: page[0],
    }
  },

  head() {
    return {
      title: this.page ? `${this.page.title} - ` : '',
    }
  },
}
</script>
