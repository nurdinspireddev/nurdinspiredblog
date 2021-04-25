<template>
  <v-app id="app" dark>
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
  width: 95%;
  height: 105%;
  -ms-transform: skewX(-eg);
  -webkit-transform: skewX(7deg);
  transform: skewX(7deg);
  border-radius: 30px;
  position: fixed;
  top: -100px;
}
.home-shape-left {
  opacity: 0.1;
  background: red;
  width: 95%;
  height: 106%;
  -ms-transform: skewX(-eg);
  -webkit-transform: skewX(-15deg);
  transform: skewX(-21deg);
  border-radius: 30px;
  position: fixed;
  top: -100px;
}
.background-shape-right {
  opacity: 0.1;
  background: #1565c0;
  width: 95%;
  height: 500px;
  -ms-transform: skewY(-3eg);
  -webkit-transform: skewY(-3deg);
  transform: skewY(-3deg);
  border-radius: 30px;
  position: absolute;
  top: 1px;
  left: 18px;
}
.background-shape-left {
  opacity: 0.1;
  background: #d84315;
  width: 95%;
  height: 550px;
  -ms-transform: skewY(-3eg);
  -webkit-transform: skewY(-3deg);
  transform: skewY(-3deg);
  border-radius: 30px;
  position: absolute;
  top: 550px;
  right: 18px;
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
