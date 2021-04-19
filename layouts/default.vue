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

.is-link-no-decoration {
  /* Used with social and other links to force white text */
  color: #fff;
}

.home-shape-right {
  opacity: 0.1;
  background: #1565c0;
  width: 85%;
  height: 105%;
  -ms-transform: skewX(-eg);
  -webkit-transform: skewX(7deg);
  transform: skewX(7deg);
  border-radius: 30px;
  position: absolute;
  top: -100px;
}
.home-shape-left {
  opacity: 0.1;
  background: red;
  width: 75%;
  height: 106%;
  -ms-transform: skewX(-eg);
  -webkit-transform: skewX(-15deg);
  transform: skewX(-21deg);
  border-radius: 30px;
  position: absolute;
  top: -100px;
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
