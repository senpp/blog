<template>
  <article class="prose-lg prose-purple mx-auto dark:prose-light">
    <h2 class="!font-bold border-b inline-block">Dự án</h2>
    <div
      class="
        font-medium
        text-gray-800
        mt-6
        xl:mt-12
        mb-4
        xl:mb-4
        dark:text-white
      "
    >
      Dự án cá nhân:
    </div>

    <a
      v-for="(personalProject, index) in personalProjects"
      :key="`pp-${index}`"
      :href="personalProject.link"
      target="_blank"
      rel="noopener noreferrer"
      class="
        flex
        space-x-6
        transtion
        hover:transition hover:bg-gray-100
        rounded
        p-4
        dark:hover:bg-dark-700
      "
    >
      <div>
        <icon
          :icon="personalProject.icon"
          classes="w-12 h-12 fill-current text-gray-400"
        />
      </div>
      <div>
        <h5 class="block text-gray-800 font-semibold dark:text-white">
          {{ personalProject.name }}
        </h5>

        <h6 class="text-gray-500 font-light dark:text-gray-400">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <span v-html="personalProject.description" />
        </h6>
      </div>
    </a>

    <div
      class="
        font-medium
        text-gray-800
        mt-6
        xl:mt-12
        mb-4
        xl:mb-4
        dark:text-white
      "
    >
      <a href="https://phake.dev" target="_blank" rel="noopener noreferrer">
        <b>Phake.dev</b>
      </a>
      Templates
    </div>

    <div class="grid grid-cols-2 gap-4 xl:gap-4 !mb-16">
      <a
        v-for="(phakeDevProject, index) in phakeDevProjects"
        :key="`pdp-${index}`"
        :href="phakeDevProject.link"
        target="_blank"
        rel="noopener noreferrer"
        class="
          flex
          space-x-4
          hover:bg-gray-100
          rounded
          p-4
          dark:hover:bg-dark-700
        "
      >
        <div>
          <icon
            :icon="phakeDevProject.icon"
            classes="w-12 h-12 fill-current text-gray-400"
          />
        </div>
        <div>
          <h5 class="block text-gray-800 font-semibold dark:text-white">
            {{ phakeDevProject.name }}
          </h5>
          <h6 class="text-gray-500 font-light dark:text-gray-400">
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
        icon: 'trello',
        name: 'Vuello',
        link: 'https://vuello.phake.dev',
        description: `Trello clone được dựng bằng <b>Vue2</b> và <b>Lumen 8</b>`,
      },
    ]

    const phakeDevProjects = [
      {
        icon: 'vue',
        name: 'Vue3 Template',
        link: 'https://github.com/phakedev/vue-template',
        description: 'Vue3 TypeScript Starter Template',
      },
      {
        icon: 'flask',
        name: 'Flask Template',
        link: 'https://github.com/phakedev/flask-template',
        description: 'Python3 Flask Starter Template',
      },
      {
        icon: 'nestjs',
        name: 'NestJS Template',
        link: 'https://github.com/phakedev/nestjs-template',
        description: 'NestJS TypeScript Starter Template',
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
