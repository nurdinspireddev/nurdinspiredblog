<template>
  <div class="ml-3">
    <h3>Keep In Touch!</h3>
    <span v-for="(dm, index) in dms" :key="index">
      <v-btn
        class="ma-2"
        fab
        x-small
        dark
        :color="dm.color"
        target="_blank"
        :href="dm.link"
      >
        <v-icon>{{ dm.icon }}</v-icon>
      </v-btn>
    </span>
  </div>
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
