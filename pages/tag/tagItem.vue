<template>
  <ul>
    <li v-for="post in posts" :key="post.title" class="my-3">
      <v-btn text :to="`/posts/${post.slug}`" class="text-h5 pl-0">
        {{ post.title }}
      </v-btn>
      <div>@ {{ post.createdAt | shortDt }} - {{ post.author }}</div>
      <div>"{{ post.description }}"</div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    posts: Array,
  },
}
</script>

<style></style>
