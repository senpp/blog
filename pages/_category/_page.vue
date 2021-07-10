<template>
  <elements-overlay>
    <div class="pt-4 md:px-4 mx-auto prose-lg prose-purple dark:prose-light">
      <h2 class="!font-black">
        {{ page.title }}
      </h2>
      <p class="text-gray-400 text-base">
        {{ $dayjs(page.updatedAt).format('DD MMM, YYYY') }}
      </p>
      <nuxt-content :document="page" />
    </div>
  </elements-overlay>
</template>

<script>
export default {
  name: 'SinglePage',
  layout: 'home',

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
      meta: [
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: `https://phuongphung.com${this.$route.fullPath}`,
        },
      ],
    }
  },
}
</script>
