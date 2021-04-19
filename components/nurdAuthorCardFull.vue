<template>
  <div>
    <v-card width="600" class="nurd-radius" elevation="10">
      <!-- Card Title -->
      <v-card-title
        class="mt-8"
        :style="`background-color: ${authorCardDatas.cardColor}`"
      >
        <!-- Author Pic -->
        <v-avatar size="56">
          <img
            alt="user"
            src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
          />
        </v-avatar>
        <p class="ml-3" v-html="authorCardDatas.name" />

        <!-- Author Name  Social Chips -->
        <div class="mt-2">
          <v-chip
            dark
            v-if="authorCardDatas.twitterUrl"
            target="_blank"
            :href="authorCardDatas.twitterUrl"
            color="blue"
            class="is-link-no-decoration"
          >
            <v-avatar left>
              <v-icon color="#fff">{{ twitter }}</v-icon>
            </v-avatar>
            <span class="is-link-no-decoration">
              {{ authorCardDatas.twitterProfile }}
            </span>
          </v-chip>

          <v-chip
            dark
            v-if="authorCardDatas.githubUrl"
            target="_blank"
            :href="authorCardDatas.githubUrl"
            color="grey"
          >
            <v-avatar left>
              <v-icon color="#fff">{{ github }}</v-icon>
            </v-avatar>
            <span class="is-link-no-decoration">
              {{ authorCardDatas.githubProfile }}
            </span>
          </v-chip>

          <v-chip
            dark
            v-if="authorCardDatas.instagramUrl"
            target="_blank"
            :href="authorCardDatas.instagramUrl"
            color="pink"
          >
            <v-avatar left>
              <v-icon color="#fff">{{ instagram }}</v-icon>
            </v-avatar>
            <span class="is-link-no-decoration">
              {{ authorCardDatas.instagramProfile }}
            </span>
          </v-chip>
        </div>
      </v-card-title>

      <!-- Author Recent Work Timeline -->
      <v-card-text>
        <div class="font-weight-bold ml-8 my-2">Recent Work</div>

        <v-timeline align-top dense>
          <v-timeline-item
            v-for="message in authorCardDatas.work"
            :key="message.title"
            :color="authorCardDatas.timelineColor"
            small
          >
            <div>
              <div class="font-weight-normal">
                <strong>{{ message.title }}</strong> @
                {{ message.createdAt | shortDt }}
              </div>
              <div>{{ message.description }}</div>
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
      authorCardDatas: this.authorCardData,
      twitter: mdiTwitter,
      instagram: mdiInstagram,
      github: mdiGithub,
    }
  },
}
</script>

<style></style>
