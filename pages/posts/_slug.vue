<template>
  <v-container fluid>
    <div class="background-shape-right"></div>
    <nurd-back-home />
    <div>
      <v-row>
        <!-- Post image -->
        <v-col cols="12" md="4">
          <v-img class="nurd-radius" alt="user" :src="`/${post.image}`" />
        </v-col>
        <!-- Post Meta -->
        <v-col cols="12" md="8" class="text-right">
          <!-- Title -->
          <h1 v-html="post.title" />
          <!-- Author -->
          <div class="text-h5">
            <span>Author: {{ post.author }}</span>
          </div>
          <!-- Reading Time -->
          <div class="text-h6">
            <v-icon>{{ clock }}</v-icon>
            {{ post.readingTime.text }}
          </div>
          <!-- Timestamps -->
          <!-- <div>Created: {{ post.createdAt | shortDt }}</div> -->
          <div>Last Updated: {{ post.updatedAt | shortDt }}</div>
          <!-- Tags -->
          <div>
            <span v-for="tag in post.tags" :key="tag.name">
              <v-chip
                :class="[`ma-2 ${tag.textColor}--text`]"
                :to="'/tag/' + tag.link"
                :color="tag.color"
              >
                {{ tag.name }}
              </v-chip>
            </span>
          </div>
        </v-col>
      </v-row>
      <!-- <v-row>
        <v-col cols="12">
          <nurd-toc :toc="post.toc" />
        </v-col>
      </v-row> -->
      <v-spacer class="py-10" />
      <nuxt-content :document="post" />
    </div>
  </v-container>
</template>
<script>
import tags from '@/static/data/tags.json'
import { mdiClockOutline } from '@mdi/js'

export default {
  data() {
    return {
      tagArray: tags,
      clock: mdiClockOutline,
    }
  },
  async asyncData({ params, error, $content }) {
    try {
      const postPath = `/posts/${params.slug}`
      const [post] = await $content('posts', { deep: true })
        .where({ dir: postPath })
        .fetch()

      //Match tags from post to tags.json for metadata
      const dataTags = post.tags.map((item) => {
        let t = tags[tags.findIndex((f) => f.name === item)]
        return t
      })
      post.tags = dataTags

      return { post }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found',
      })
    }
  },
  //dynamically set Page to Post Title
  head() {
    return {
      title: this.post.title,
    }
  },
}
</script>
