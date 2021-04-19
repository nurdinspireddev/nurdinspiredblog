<template>
  <div>
    <div class="home-shape-right"></div>
    <div class="post-list">
      <span class="text-sm-h2 text-h4">#{{ $route.params.slug }} posts</span>
      <ul>
        <li v-for="post in posts" :key="post.title" class="my-3">
          <nuxt-link :to="`/posts/${post.slug}`" class="text-h5">
            {{ post.title }}
          </nuxt-link>
          <div>@ {{ post.createdAt | shortDt }} - {{ post.author }}</div>
          <div>"{{ post.description }}"</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content('posts', { deep: true })
      .where({
        tags: { $contains: params.slug },
      })
      .fetch()
    return {
      posts,
    }
  },
}
</script>
<style scoped>
.post-list {
  z-index: 1000;
  position: relative;
}
</style>
