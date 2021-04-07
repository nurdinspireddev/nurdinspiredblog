<template>
  <v-hover v-slot="{ hover }">
    <v-card class="mx-auto" max-width="400">
      <nuxt-link :to="`/posts/${post.slug}`" tag="div" class="is-link">
        <v-img
          alt=""
          :src="post.image"
          :class="[{ 'on-hover': hover }, 'align-end', 'white--text']"
        >
          <!-- :class="`${$vuetify.theme.dark}--text`" -->
          <v-card-title v-text="post.title" />
        </v-img>
      </nuxt-link>

      <v-card-subtitle class="pb-0" v-text="post.subtitle" />

      <v-card-actions>
        <v-spacer />

        <v-btn icon @click="show = !show">
          <v-icon color="orange">{{ show ? chevronUp : chevronDown }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider />

          <v-card-text v-text="post.description" />
        </div>
      </v-expand-transition>
    </v-card>
  </v-hover>
</template>

<script>
import { mdiChevronUp, mdiChevronDown, mdiShareVariant } from '@mdi/js'

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      show: false,
      chevronDown: mdiChevronDown,
      chevronUp: mdiChevronUp,
      share: mdiShareVariant,
    }
  },
}
</script>

<style lang="sass" scoped>
.on-hover
  transform: scale(1.1)
</style>
