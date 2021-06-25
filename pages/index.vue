<template>
  <article class="prose prose-purple mx-auto dark:prose-light">
    <h1>Phuong Phung</h1>

    <p>Hi, tôi là Phương Phùng,</p>

    <p>
      Từng đem mộng trở thành một game thủ khi còn nhỏ, rồi do không có tiền đem
      máy tính ra tiệm sửa nên tìm hiểu về phần cứng máy tính, sau cùng là thích
      code. Tôi tốt nghiệp ngành CNTT tại HUBT (K19). Bắt đầu đi làm từ năm
      2016. Sau 1 năm thực tập tại một công ty outsource, tới tháng 7 năm 2017
      tôi đã chân ướt chân ráo dấn thân vào con đường làm sản phẩm, và khi đó
      <a href="https://base.vn" target="_blank" rel="noopener noreferrer">
        Base.vn
      </a>
      là một dấu mốc quan trọng trong những năm đầu trong ngành của tôi.
    </p>

    <p>
      Là một người yêu công nghệ và muốn dùng ngôn ngữ lập trình để tạo ra tất
      cả mọi thứ mình muốn. Đích đến của tôi là trở thành open sourceror toàn
      thời gian.
    </p>

    <p>
      Ngoài code ra thì sở thích của tôi là cà phê và chụp ảnh, tôi thích sự
      chính xác đến từng <i><b>mg</b></i> khi pha chế ra một ly cà phê.
    </p>

    <p>Một số kỹ năng của tôi:</p>

    <ul>
      <li>
        <b>4 năm</b> kinh nghiệm làm việc với PHP nói chung và Laravel/Lumen
        Framework nói riêng.
      </li>

      <li>
        <b>2 năm</b> kinh nghiệm làm việc với Node.js, cả front-end
        (<b>Vue.js</b>, <b>React.js</b>) và back-end (<b>NestJS</b>). Với khả
        năng tiếp cận ngôn ngữ mới khá nhanh nên tôi cũng đang tự phát triển
        những dự án cá nhân với <b>Go</b> và <b>Python</b>.
      </li>
    </ul>

    <p>
      Liên lạc với tôi qua
      <a
        href="https://github.com/senpp"
        rel="noopener noreferrer"
        target="_blank"
      >
        GitHub </a
      >,
      <a
        href="https://www.facebook.com/phungthephuong"
        rel="noopener noreferrer"
        target="_blank"
      >
        Facebook </a
      >, hoặc gửi mail về
      <a
        href="mailto:hi@phuongphung.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        hi@phuongphung.com
      </a>
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
      title: 'Phuong Phung - ',
      meta: [
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://phuongphung.com',
        },
      ],
    }))
  },

  head: {},
})
</script>

<style lang="postcss" scoped>
a {
  @apply border-b border-gray-200 transition hover:border-gray-600 hover:transition;
}
</style>
