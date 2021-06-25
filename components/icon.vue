<template>
  <div v-if="icon">
    <icon-movie v-if="icon === 'movie'" :class="classes" />
    <icon-popcorn v-if="icon === 'popcorn'" :class="classes" />
    <icon-vuello v-if="icon === 'vuello'" :class="classes" />
    <icon-template v-if="icon === 'template'" :class="classes" />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import IconMovie from '~/assets/svg/icon-movie.svg?inline'
import IconPopcorn from '~/assets/svg/icon-popcorn.svg?inline'
import IconVuello from '~/assets/svg/icon-vuello.svg?inline'
import IconTemplate from '~/assets/svg/icon-template.svg?inline'

export default defineComponent({
  components: { IconMovie, IconPopcorn, IconVuello, IconTemplate },

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
