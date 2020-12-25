<template>
  <v-row>
    <v-col cols="12" xs="12">
      <h1>Posts</h1>
      <v-row>
        <v-col cols="12" xs="12" md="4" v-for="(p, index) in post" :key="index">
          <nurd-card-post :post="p"></nurd-card-post>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import nurdCardPost from '~/components/nurdCardPost.vue'

export default {
  components: {
    nurdCardPost,
  },
  async asyncData({ $content, params }) {
    const post = await $content('posts', { deep: true })
      .only(['title', 'subtitle', 'description', 'image', 'slug', 'dir'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return { post }
  },
}
</script>
