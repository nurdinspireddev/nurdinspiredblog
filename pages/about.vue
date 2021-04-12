<template>
  <div>
    <h1>About Us</h1>
    <p>
      We are a team that is dedicated to bringing clarity to the evolving world
      of Software Engineering and Data Science. We're striving to provide the
      simplest and most relevant training material for beginning and advancing
      your programming skill sets.
    </p>
    <blockquote class="blockquote">
      No rocket science here, just helpful tips n tricks we've acquired and
      continue to learn.
    </blockquote>

    <!-- Author Cards -->
    <v-row>
      <v-col cols="12" class="pb-0">
        <h1>Nurds</h1>
      </v-col>
      <v-col
        class="pt-0"
        cols="12"
        md="6"
        v-for="(member, index) in teamMembers"
        :key="index"
      >
        <nurd-author-card-full :authorCardData="member" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import author from '@/static/data/authors.json'

export default {
  head() {
    return {
      title: 'About Us',
    }
  },
  data() {
    return {
      authors: author,
      authorData: [],
      teamMembers: [],
    }
  },
  async asyncData({ $content }) {
    const posts = await $content('posts', { deep: true })
      .only(['title', 'description', 'slug', 'dir', 'author', 'createdAt'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return { posts }
  },
  mounted() {
    this.posts.forEach((obj) => {
      let fIndex = this.teamMembers.findIndex((f) => f.name === obj.author)
      if (fIndex > -1) {
        this.teamMembers[fIndex].work.push({
          title: obj.title,
          description: obj.description,
          createdAt: obj.createdAt,
        })
      } else {
        let authorIndex = this.authors.findIndex((f) => f.name === obj.author)
        this.teamMembers.push({
          name: obj.author,
          color: this.authors[authorIndex].color,
          githubProfile: this.authors[authorIndex].githubProfile,
          githubUrl: this.authors[authorIndex].githubUrl,
          twitterProfile: this.authors[authorIndex].twitterProfile,
          twitterUrl: this.authors[authorIndex].twitterUrl,
          instagramProfile: this.authors[authorIndex].instagramProfile,
          instagramUrl: this.authors[authorIndex].instagramUrl,
          photoUrl: this.authors[authorIndex].photoUrl,
          work: [
            {
              title: obj.title,
              description: obj.description,
              createdAt: obj.createdAt,
            },
          ],
        })
      }
    })
  },
}
</script>

<style></style>
