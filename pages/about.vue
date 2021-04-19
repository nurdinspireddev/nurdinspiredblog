<template>
  <v-container>
    <div class="background-shape-right"></div>
    <div class="background-shape-left"></div>
    <nurd-back-home />
    <!-- About Us Page -->
    <span class="text-h2">ABOUT US</span>
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
        <span class="text-h4">NURDS</span>
      </v-col>
      <v-col
        class="pt-0"
        cols="12"
        md="6"
        xl="4"
        v-for="(member, index) in authors"
        :key="index"
      >
        <nurd-author-card-full :authorCardData="member" />
      </v-col>
    </v-row>
  </v-container>
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
    }
  },
}
</script>
