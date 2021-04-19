<template>
  <div class="">
    <span class="text-h5"> Table of contents </span>
    <nav class="mt-4">
      <ul>
        <li v-for="link of toc" :key="link.id">
          <a role="button" :href="`#${link.id}`">{{ link.text }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    toc: Array,
  },
}
</script>

<style></style>
