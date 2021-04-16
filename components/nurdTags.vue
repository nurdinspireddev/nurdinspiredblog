<template>
  <div class="ml-3">
    <span class="title">Tags</span>
    <span v-for="(t, index) in tagArray" :key="index">
      <v-chip
        small
        :class="[`ma-2 ${t.textColor}--text`]"
        :to="`/tag/${t.link}`"
        :color="t.color"
      >
        {{ t.name }}
      </v-chip>
    </span>
  </div>
</template>

<script>
import tags from '@/static/data/tags.json'

export default {
  data() {
    return {
      tagArray: tags.tagArray,
    }
  },
}
</script>

<style></style>
