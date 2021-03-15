<template>
  <div class="pt-4 md:px-4 mx-auto prose prose-purple dark:prose-light">
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
