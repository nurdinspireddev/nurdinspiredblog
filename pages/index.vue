<template>
  <div>
    <div class="home-shape-right"></div>
    <div class="home-shape-left"></div>
    <v-row>
      <v-col cols="12" xs="12">
        <v-row>
          <v-col
            cols="12"
            xs="12"
            md="6"
            lg="4"
            v-for="(p, index) in post"
            :key="index"
          >
            <nurd-card-post :post="p"></nurd-card-post>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const post = await $content('posts', { deep: true })
      .only([
        'title',
        'subtitle',
        'description',
        'image',
        'slug',
        'dir',
        'createdAt',
        'updatedAt',
        'author',
      ])
      .sortBy('createdAt', 'asc')
      .fetch()
    return { post }
  },
  head() {
    return {
      title: 'HI!',
    }
  },
}
</script>
