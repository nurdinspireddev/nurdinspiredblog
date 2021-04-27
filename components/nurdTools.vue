<template>
  <div>
    <span>Powered by</span>
    <!-- Nuxt.js -->
    <a href="https://nuxtjs.org/" target="_blank">
      <v-img
        class="nurd-tools"
        src="/img/logos/nuxt.png"
        width="30"
        height="30"
      ></v-img>
    </a>
    <span> , styled by</span>
    <!-- VUETIFY -->
    <a href="https://vuetifyjs.com/en/" target="_blank">
      <v-img
        class="nurd-tools"
        src="/img/logos/vuetify.png"
        width="30"
        height="30"
      ></v-img>
    </a>
    <span>, and hosted on</span>
    <!-- NETLIFY -->
    <a href="https://www.netlify.com/" target="_blank">
      <v-img
        class="nurd-tools"
        src="/img/logos/netlify.png"
        width="30"
        height="30"
      ></v-img>
    </a>
    <span>.</span>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.nurd-tools {
  display: inline-block;
}
</style>
