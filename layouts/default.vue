<template>
  <v-app dark>
    <nurd-app-bar></nurd-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <nurd-footer></nurd-footer>
  </v-app>
</template>

<script>
export default {
  components: {
    nurdAppBar: () => import('../components/nurdAppBar.vue'),
    nurdFooter: () => import('../components/nurdFooter.vue')
  }
}
</script>
