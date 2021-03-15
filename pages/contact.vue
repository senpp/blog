<template>
  <div class="prose prose-purple mx-auto dark:prose-light">
    <h1>Liên hệ</h1>

    <p>Tôi thường sử dụng các kênh mạng liên lạc sau:</p>

    <ul>
      <li>
        Email:
        <a href="mailto:phuongthephung@gmail.com"> phuongthephung@gmail.com </a>
      </li>
      <li>
        Facebook:
        <a
          href="https://www.facebook.com/phungthephuong"
          rel="noopener noreferrer"
          target="_blank"
        >
          @phuongthephung
        </a>
      </li>
      <li>Skype: <a href="skype:phuongthephung?chat">@phuongthephung</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Porfolio',
  layout: 'home',

  head() {
    return {
      title: 'Liên hệ - ',
    }
  },
}
</script>
