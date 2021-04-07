<template>
  <v-footer :fixed="fixed" app>
    <v-row>
      <v-col>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-col>
      <v-col>
        <v-col cols="12" xs="12">
          <div>
            <h1>Tags</h1>
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
        </v-col>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
import tags from '@/static/data/tags.json'

export default {
  data() {
    return {
      fixed: false,
      tagArray: tags.tagArray,
    }
  },
  computed: {
    page() {
      return this.$route.meta
    },
  },
}
</script>
