<template>
  <div>
    <v-card class="nurd-radius" elevation="10">
      <!-- Card Title -->
      <v-card-title
        class="mt-8"
        :style="`background-color: ${authorCardData.cardColor}`"
      >
        <!-- Author Pic -->
        <v-avatar size="100">
          <img
            alt="user"
            src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
          />
        </v-avatar>
        <p class="text-h5 ml-3" v-html="authorCardData.name" />
      </v-card-title>

      <!-- Author Profile  -->
      <v-card-subtitle class="pt-3 pb-0">
        <blockquote class="blockquote ml-3">
          {{ authorCardData.profile }}
        </blockquote>
      </v-card-subtitle>

      <!-- Social Chips -->
      <v-card-subtitle>
        <v-chip
          dark
          small
          v-if="authorCardData.twitterUrl"
          target="_blank"
          :href="authorCardData.twitterUrl"
          color="blue"
          class="mr-2"
        >
          <v-avatar left>
            <v-icon color="#fff">{{ twitter }}</v-icon>
          </v-avatar>
          <span class="is-link-no-decoration">
            {{ authorCardData.twitterProfile }}
          </span>
        </v-chip>

        <v-chip
          dark
          small
          v-if="authorCardData.githubUrl"
          target="_blank"
          :href="authorCardData.githubUrl"
          color="grey"
          class="mr-2"
        >
          <v-avatar left>
            <v-icon color="#fff">{{ github }}</v-icon>
          </v-avatar>
          <span class="is-link-no-decoration">
            {{ authorCardData.githubProfile }}
          </span>
        </v-chip>

        <v-chip
          dark
          small
          v-if="authorCardData.instagramUrl"
          target="_blank"
          :href="authorCardData.instagramUrl"
          color="pink"
          class="mr-2"
        >
          <v-avatar left>
            <v-icon color="#fff">{{ instagram }}</v-icon>
          </v-avatar>
          <span class="is-link-no-decoration">
            {{ authorCardData.instagramProfile }}
          </span>
        </v-chip>
      </v-card-subtitle>

      <!-- Author Recent Work Timeline -->
      <v-card-text v-if="posts.length">
        <div class="font-weight-bold ml-8 my-2">Recent Work</div>

        <v-timeline align-top dense>
          <v-timeline-item
            v-for="post in posts"
            :key="post.title"
            :color="authorCardData.timelineColor"
            small
          >
            <div>
              <div class="font-weight-normal">
                <a :href="`/posts/${post.slug}`">
                  <strong>{{ post.title }}</strong>
                </a>
                @
                {{ post.createdAt | shortDt }}
              </div>
              <div>{{ post.description }}</div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mdiTwitter, mdiInstagram, mdiGithub } from '@mdi/js'

export default {
  props: {
    authorCardData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      posts: [],
      twitter: mdiTwitter,
      instagram: mdiInstagram,
      github: mdiGithub,
    }
  },
  async fetch() {
    this.posts = await this.$content('posts', { deep: true })
      .only(['title', 'description', 'slug', 'dir', 'author', 'createdAt'])
      .where({ author: this.authorCardData.name })
      .limit(5)
      .sortBy('createdAt', 'asc')
      .fetch()
  },
}
</script>

<style></style>
