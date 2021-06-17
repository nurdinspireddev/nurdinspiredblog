<template>
  <div class="ml-3">
    <span v-for="(t, index) in tagArray" :key="index">
      <v-chip
        :class="[`ma-2 ${t.textColor}--text`]"
        :to="`/tag/${t.link}`"
        :color="t.color"
      >
        {{ t.name }}
      </v-chip>
    </span>
  </div>
</template>

<script>
import tags from '@/static/data/tags.json'

export default {
  data() {
    return {
      tagArray: [],
      posts: [],
    }
  },
  async fetch() {
    this.posts = await this.$content('posts', { deep: true })
      .only(['title', 'description', 'slug', 'dir', 'createdAt', 'tags'])
      //.sortBy('createdAt', 'desc')
      .fetch()

    this.posts.forEach((curr) => {
      curr.tags.forEach((currTag) => {
        let tag = tags.filter((f) => f.name === currTag)
        if (tag !== undefined) {
          if (this.tagArray.findIndex((f) => f.name === tag[0].name) < 0) {
            this.tagArray.push(tag[0])
          }
        }
      })
    })

    this.tagArray.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    )
  },
}
</script>

<style></style>
