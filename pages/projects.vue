<template>
  <article class="prose prose-purple mx-auto dark:prose-light">
    <h1>Dự án</h1>
    <div class="font-medium text-gray-600 mt-6 xl:mt-12 mb-4 xl:mb-4">
      Dự án cá nhân:
    </div>

    <a
      v-for="(personalProject, index) in personalProjects"
      :key="`pp-${index}`"
      :href="personalProject.link"
      target="_blank"
      rel="noopener noreferrer"
      class="flex space-x-6 hover:bg-gray-100 rounded p-4"
    >
      <div>
        <icon
          :icon="personalProject.icon"
          classes="w-12 h-12 fill-current text-gray-400"
        />
      </div>
      <div>
        <h5 class="block text-gray-700">
          {{ personalProject.name }}
        </h5>

        <h6 class="text-gray-400 font-normal">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <span v-html="personalProject.description" />
        </h6>
      </div>
    </a>

    <div class="font-medium text-gray-600 mt-6 xl:mt-12 mb-4 xl:mb-4">
      Dự án
      <a href="https://phake.dev" target="_blank" rel="noopener noreferrer">
        <b>Phake.dev</b>
      </a>
    </div>

    <div class="grid grid-cols-2 gap-4 xl:gap-8">
      <a
        v-for="(phakeDevProject, index) in phakeDevProjects"
        :key="`pdp-${index}`"
        :href="phakeDevProject.link"
        target="_blank"
        rel="noopener noreferrer"
        class="flex space-x-4 hover:bg-gray-100 rounded p-4"
      >
        <div>
          <icon
            :icon="phakeDevProject.icon"
            classes="w-12 h-12 fill-current text-gray-400"
          />
        </div>
        <div>
          <h5 class="block text-gray-700">{{ phakeDevProject.name }}</h5>
          <h6 class="text-gray-400 font-normal">
            {{ phakeDevProject.description }}
          </h6>
        </div>
      </a>
    </div>
  </article>
</template>

<script>
import { defineComponent, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Porfolio',

  layout: 'home',

  setup() {
    const personalProjects = [
      {
        icon: 'movie',
        name: 'Phim',
        link: 'https://phim.phake.dev',
        description: `Trang tìm kiếm từ các trang xem phim online và sử dụng VideoJS để
          play. Ứng dụng được triển khai trên mô hình JAMStack cụ thể là phần
          giao diện viết bằng <b>Vue3</b> được triển khai trên nền tảng Vercel
          và back-end sử dụng <b>AWS Lambda</b>, hướng tới một ứng dụng có khả
          năng tự động mở rộng về mặt hạ tầng.`,
      },
      {
        icon: 'popcorn',
        name: 'Her',
        link: 'https://her.phake.dev',
        description: `Như tên gọi thì trang này tôi làm cho nàng. Hội tụ đủ những thứ nàng
          cần tìm kiếm. Ứng dụng sử dụng front-end là <b>NuxtJS</b> và "mượn"
          luôn API của các rạp chiếu phim tại Việt Nam.`,
      },
      {
        icon: 'vuello',
        name: 'Vuello',
        link: 'https://vuello.phake.dev',
        description: `Trello clone được dựng bằng <b>Vue2</b> và <b>Lumen 8</b>`,
      },
    ]

    const phakeDevProjects = [
      {
        icon: 'template',
        name: 'Vue3 Template',
        link: 'https://github.com/phakedev/vue-template',
        description: 'Vue3 Starter Template',
      },
      {
        icon: 'movie',
        name: 'Phim',
        link: 'https://phim.phake.dev',
        description: 'Movie Search Engine',
      },
    ]

    useMeta(() => ({
      title: 'Dự án - ',
      meta: [
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://phuongphung.com/projects',
        },
      ],
    }))

    return { personalProjects, phakeDevProjects }
  },

  head: {},
})
</script>
