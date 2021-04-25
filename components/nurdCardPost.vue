<template>
  <v-hover v-slot="{ hover }">
    <v-card class="nurd-radius mx-auto" max-width="450">
      <nuxt-link :to="`/posts/${post.slug}`" v-slot="{ navigate }" custom>
        <span @click="navigate" @keypress.enter="navigate" role="link">
          <v-img
            alt=""
            :src="post.image"
            :class="[
              { 'on-hover': hover },
              'align-end',
              'white--text',
              'nurd-radius',
              'is-link',
            ]"
          >
          </v-img>
        </span>
      </nuxt-link>

      <v-card-title v-text="post.title" />
      <v-card-subtitle class="pb-0" v-text="post.subtitle" />

      <v-card-actions>
        <span class="mx-3">{{ post.author }}</span>
        <v-divider vertical inset class="mx-3" />
        <span>{{ post.createdAt | shortDt }}</span>
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
