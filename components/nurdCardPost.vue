<template>
  <v-hover v-slot="{ hover }">
    <v-card class="mx-auto" max-width="400">
      <nuxt-link :to="`/posts/${post.slug}`" tag="div" class="is-link">
        <v-img
          class="white--text align-end"
          alt=""
          :src="post.image"
          :class="{ 'on-hover': hover }"
        >
          <v-card-title>{{ post.title }}</v-card-title>
        </v-img>
      </nuxt-link>

      <v-card-subtitle class="pb-0">
        {{ post.subtitle }}
      </v-card-subtitle>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon color="orange">{{ show ? chevronUp : chevronDown }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            {{ post.description }}
          </v-card-text>
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
.on-hover.theme--dark
  transform: scale(1.1)
  >.v-card__text
    color: #000
</style>
