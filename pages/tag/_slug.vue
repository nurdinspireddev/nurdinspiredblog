<template>
  <div>
    <h1>Related {{ $route.params.slug }} posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.title">
        <nuxt-link :to="`/posts/${post.slug}`">{{ post.title }}</nuxt-link>
      </li>
    </ul>
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
