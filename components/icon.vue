<template>
  <div v-if="icon">
    <icon-movie v-if="icon === 'movie'" :class="classes" />
    <icon-popcorn v-if="icon === 'popcorn'" :class="classes" />
    <icon-vuello v-if="icon === 'vuello'" :class="classes" />
    <icon-template v-if="icon === 'template'" :class="classes" />
    <icon-nestjs v-if="icon === 'nestjs'" :class="classes" />
    <icon-flask v-if="icon === 'flask'" :class="classes" />
    <icon-vue v-if="icon === 'vue'" :class="classes" />
    <icon-trello v-if="icon === 'trello'" :class="classes" />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import IconMovie from '~/assets/svg/icon-movie.svg?inline'
import IconPopcorn from '~/assets/svg/icon-popcorn.svg?inline'
import IconVuello from '~/assets/svg/icon-vuello.svg?inline'
import IconTemplate from '~/assets/svg/icon-template.svg?inline'
import IconNestjs from '~/assets/svg/icon-nestjs.svg?inline'
import IconFlask from '~/assets/svg/icon-flask.svg?inline'
import IconVue from '~/assets/svg/icon-vue.svg?inline'
import IconTrello from '~/assets/svg/icon-trello.svg?inline'

export default defineComponent({
  components: {
    IconMovie,
    IconPopcorn,
    IconVuello,
    IconTemplate,
    IconNestjs,
    IconFlask,
    IconVue,
    IconTrello,
  },

  props: {
    icon: {
      type: String,
      default: null,
    },

    classes: {
      type: [String, Array, Object],
      default: '',
    },
  },

  setup() {
    return {}
  },
})
</script>
