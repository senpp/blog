<template>
  <article class="prose prose-purple mx-auto dark:prose-light">
    <h1>Về tôi</h1>

    <p>
      Từ một đứa mê <s>nghiện</s> game, rồi tìm hiểu về phần cứng máy tính, sau
      cùng là thích code dạo. Tôi tốt nghiệp ngành CNTT tại HUBT (K19). Bắt đầu
      đi làm từ năm 2016. Sau 1 năm thực tập tại một công ty outsource, tới
      tháng 7 năm 2017 tôi đã chân ướt chân ráo dấn thân vào con đường làm sản
      phẩm, và khi đó
      <a href="https://base.vn" target="_blank" rel="noopener noreferrer">
        Base.vn
      </a>
      là một dấu mốc quan trọng trong những năm đầu trong ngành của tôi.
    </p>

    <p>Một số sản phẩm làm chơi chơi của tôi:</p>

    <ul>
      <li>
        <a
          href="https://vuello.phake.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>Vuello</b>
        </a>
        , Trello clone được dựng bằng <b>Vue2</b> và <b>Lumen 8</b>
      </li>
    </ul>

    <p>
      Liên lạc với tôi như thế nào?
      <nuxt-link to="/contact">Liên hệ</nuxt-link>.
    </p>
  </article>
</template>

<script>
import { defineComponent, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Porfolio',
  layout: 'home',

  setup() {
    useMeta(() => ({
      title: 'Tôi là phuongphung - ',
    }))
  },

  head: {},
})
</script>
