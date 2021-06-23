<template>
  <article class="prose prose-purple mx-auto dark:prose-light">
    <h1>Dự án</h1>
    <p class="font-bold">Dự án cá nhân:</p>

    <div class="flex space-x-6">
      <div>
        <icon-movie
          class="w-16 h-16 fill-current text-gray-600 dark:text-gray-400"
        />
      </div>
      <div>
        <a
          href="https://phim.phake.dev"
          target="_blank"
          rel="noopener noreferrer"
          class="block -mb-4"
        >
          <b>Movie Search Engine</b>
        </a>
        <p>
          Trang tìm kiếm từ các trang xem phim online và sử dụng VideoJS để
          play. Ứng dụng được triển khai trên mô hình JAMStack cụ thể là phần
          giao diện viết bằng <b>Vue3</b> được triển khai trên nền tảng Vercel
          và back-end sử dụng <b>AWS Lambda</b>, hướng tới một ứng dụng có khả
          năng tự động mở rộng về mặt hạ tầng.
        </p>
      </div>
    </div>

    <div class="flex space-x-6 mt-6">
      <div>
        <icon-popcorn
          class="w-16 h-16 fill-current text-gray-600 dark:text-gray-400"
        />
      </div>
      <div>
        <a
          href="https://her.phake.dev"
          target="_blank"
          rel="noopener noreferrer"
          class="block -mb-4"
        >
          <b>Her</b>
        </a>
        <p>
          Như tên gọi thì trang này tôi làm cho nàng. Hội tụ đủ những thứ nàng
          cần tìm kiếm. Ứng dụng sử dụng front-end là <b>NuxtJS</b> và "mượn"
          luôn API của các rạp chiếu phim tại Việt Nam.
        </p>
      </div>
    </div>

    <div class="flex space-x-6 mt-6">
      <div>
        <icon-vuello
          class="w-16 h-16 fill-current text-gray-600 dark:text-gray-400"
        />
      </div>
      <div>
        <a
          href="https://vuello.phake.dev"
          target="_blank"
          rel="noopener noreferrer"
          class="block -mb-4"
        >
          <b>Vuello</b>
        </a>
        <p>Trello clone được dựng bằng <b>Vue2</b> và <b>Lumen 8</b></p>
      </div>
    </div>

    <p class="font-bold">
      Dự án
      <a href="https://phake.dev" target="_blank" rel="noopener noreferrer">
        <b>Phake.dev</b> </a
      >:
    </p>

    <div class="grid grid-cols-2 gap-4">
      <div class="flex space-x-4">
        <div>
          <icon-template
            class="w-16 h-16 fill-current text-gray-600 dark:text-gray-400"
          />
        </div>
        <div>
          <a
            href="https://github.com/phakedev/vue-template"
            target="_blank"
            rel="noopener noreferrer"
            class="block -mb-4"
          >
            <b>Vue3 Template</b>
          </a>
          <p>Vite SSG + Vue3 + TypeScript + WindiCSS Starter Template</p>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { defineComponent, useMeta } from '@nuxtjs/composition-api'
import IconMovie from '~/assets/svg/icon-movie.svg?inline'
import IconPopcorn from '~/assets/svg/icon-popcorn.svg?inline'
import IconVuello from '~/assets/svg/icon-vuello.svg?inline'
import IconTemplate from '~/assets/svg/icon-template.svg?inline'

export default defineComponent({
  name: 'Porfolio',

  components: { IconMovie, IconPopcorn, IconVuello, IconTemplate },

  layout: 'home',

  setup() {
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
  },

  head: {},
})
</script>
