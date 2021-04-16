<template>
  <div>
    <v-card width="600">
      <!-- Card Title -->
      <v-card-title
        dark
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
        <p dark class="ml-3" v-html="authorCardDatas.name" />

        <!-- Author Name  Social Chips -->
        <div>
          <v-chip
            v-if="authorCardDatas.twitterUrl"
            target="_blank"
            :href="authorCardDatas.twitterUrl"
            color="blue"
          >
            <v-avatar left>
              <v-icon>{{ twitter }}</v-icon>
            </v-avatar>
            {{ authorCardDatas.twitterProfile }}
          </v-chip>

          <v-chip
            v-if="authorCardDatas.githubUrl"
            target="_blank"
            :href="authorCardDatas.githubUrl"
            color="grey"
          >
            <v-avatar left>
              <v-icon>{{ github }}</v-icon>
            </v-avatar>
            {{ authorCardDatas.githubProfile }}
          </v-chip>

          <v-chip
            v-if="authorCardDatas.instagramUrl"
            target="_blank"
            :href="authorCardDatas.instagramUrl"
            color="pink"
          >
            <v-avatar left>
              <v-icon>{{ instagram }}</v-icon>
            </v-avatar>
            {{ authorCardDatas.instagramProfile }}
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
