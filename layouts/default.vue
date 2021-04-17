<template>
  <v-app dark id="app">
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
export default {}
</script>
<style>
#app {
  font-family: 'Roboto', Tahoma;
}

.nurd-radius {
  border-radius: 15px !important;
}

/* Override default vuetify `Code` markdown css, Prism Theme is used */
.v-application code {
  all: unset;
}

.v-application a {
  color: var(--v-info-base) !important;
  text-decoration: none;
}
</style>
