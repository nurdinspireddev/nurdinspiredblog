<template>
  <v-container fluid>
    <div class="home-shape-right"></div>
    <nurd-back-home />
    <div>
      <span class="text-h5 text-md-h4 text-lg-h2">#{{ $route.params.slug }} posts</span>
      <tag-item :posts="posts" />
    </div>
  </v-container>
</template>
<script>
export default {
  components: {
    tagItem: () => import('./tagItem'),
  },
  async asyncData({ $content, params }) {
    const posts = await $content('posts', { deep: true })
      .where({
        tags: { $contains: params.slug },
      })
      .fetch()
    return { posts }
  },
}
</script>
<style scoped>
.post-list {
  z-index: 1000;
  position: relative;
}
</style>
