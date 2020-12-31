<template>
  <div>
    <div class="post-head">
      <h1>{{ post.title }}</h1>
      <div>
        <div>{{ post.createdAt | longDtTm }}</div>
        <div>
          <span v-for="tag in post.tags" :key="tag">
            <v-chip class="ma-2" close :to="'/tag/' + tag">
              {{ tag }}
            </v-chip>
          </span>
        </div>
      </div>
    </div>
    <nuxt-content :document="post" />
  </div>
</template>
<script>
export default {
  async asyncData({ params, error, $content }) {
    try {
      const postPath = `/posts/${params.slug}`
      const [post] = await $content('posts', { deep: true })
        .where({ dir: postPath })
        .fetch()
      return { post }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found',
      })
    }
  },
}
</script>
