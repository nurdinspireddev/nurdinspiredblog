<template>
  <v-row class="ml-3">
    <v-col cols="12">
      <span class="title">Keep In Touch!</span>
    </v-col>

    <v-col cols="12" class="py-0">
      <span v-for="(dm, index) in dms" :key="index">
        <v-btn
          fab
          x-small
          class="ma-2"
          dark
          :color="dm.color"
          target="_blank"
          :href="dm.link"
        >
          <!-- White icon fill -->
          <v-icon color="#fff">{{ dm.icon }}</v-icon>
        </v-btn>
      </span>
    </v-col>
  </v-row>
</template>

<script>
import { mdiTwitter, mdiInstagram, mdiGithub, mdiYoutube } from '@mdi/js'

export default {
  data() {
    return {
      dms: [
        {
          name: 'Twitter',
          link: 'https://twitter.com/nurdinspireddev',
          icon: mdiTwitter,
          color: 'blue',
        },
        {
          name: 'Instagram',
          link: 'https://www.instagram.com/nurdinspireddotdev',
          icon: mdiInstagram,
          color: 'pink',
        },
        {
          name: 'GitHub',
          link: 'https://github.com/nurdinspireddev',
          icon: mdiGithub,
          color: 'grey',
        },
        {
          name: 'YouTube',
          link: 'https://www.youtube.com/channel/UCJ2Xk43PkQYCStMtOTVd2AQ',
          icon: mdiYoutube,
          color: 'red',
        },
      ],
    }
  },
}
</script>

<style></style>
