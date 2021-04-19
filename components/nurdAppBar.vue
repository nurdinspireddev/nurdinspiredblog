<template>
  <div>
    <!-- App Bar -->

    <div class="nurd-bar">
      <!-- Theme Toggle Button -->
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            @click="$vuetify.theme.dark = !$vuetify.theme.dark"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon color="blue darken-4" v-if="!$vuetify.theme.dark">
              {{ night }}
            </v-icon>
            <v-icon color="yellow" v-if="$vuetify.theme.dark">
              {{ sunny }}
            </v-icon>
          </v-btn>
        </template>
        <span>Theme Toggle</span>
      </v-tooltip>

      <!-- Drawer Menu Button  -->
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon @click="drawer = true" v-bind="attrs" v-on="on">
            <v-icon>{{ menu }}</v-icon>
          </v-btn>
        </template>
        <span>Menu</span>
      </v-tooltip>
    </div>

    <v-navigation-drawer v-model="drawer" app temporary right>
      <!-- Nav Items -->
      <v-list nav>
        <v-list-item-group v-model="group">
          <v-list-item link> </v-list-item>

          <v-list-item link to="/">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/about">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import {
  mdiDotsVertical,
  mdiMenu,
  mdiClose,
  mdiWeatherNight,
  mdiWhiteBalanceSunny,
} from '@mdi/js'

export default {
  data() {
    return {
      dots: mdiDotsVertical,
      night: mdiWeatherNight,
      sunny: mdiWhiteBalanceSunny,
      menu: mdiMenu,
      close: mdiClose,
      drawer: false,
      group: null,
    }
  },
  methods: {
    clickToHome() {
      this.$router.push('/')
    },
  },
}
</script>
<style>
.nurd-bar {
  z-index: 1000;
  position: relative;
  text-align: right;
  margin-right: 10px;
  margin-top: 10px;
}
</style>
