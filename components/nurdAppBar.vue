<template>
  <div>
    <!-- App Bar -->
    <v-app-bar color="deep-purple accent-4" dense dark fixed app>
      <v-toolbar-title class="is-link headline" @click="clickToHome">
        Nurd Inspired Dev
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Theme Toggle Button -->
      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon color="blue lighten-1" v-if="!$vuetify.theme.dark">
          {{ night }}
        </v-icon>
        <v-icon color="yellow" v-if="$vuetify.theme.dark">
          {{ sunny }}
        </v-icon>
      </v-btn>

      <!-- Drawer Menu Button  -->
      <v-btn icon @click="drawer = true">
        <v-icon>{{ menu }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <!-- Close Drawer -->
      <v-row>
        <v-col cols="12" align="end">
          <v-btn icon @click="drawer = false">
            <v-icon>{{ close }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <!-- Nav Items -->
      <v-list nav>
        <v-list-item-group v-model="group">
          <v-list-item link to="/">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/about">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <!-- Nurd Tag Links -->
      <v-row>
        <v-col cols="12">
          <nurd-tags />
        </v-col>
      </v-row>

      <!-- Nurd Social Links -->
      <v-row>
        <v-col cols="12">
          <nurd-social />
        </v-col>
      </v-row>
    </v-navigation-drawer>
  </div>
</template>

<script>
import {
  mdiDotsVertical,
  mdiMenu,
  mdiClose,
  mdiWeatherNight,
  mdiWeatherSunny,
} from '@mdi/js'

export default {
  data() {
    return {
      dots: mdiDotsVertical,
      night: mdiWeatherNight,
      sunny: mdiWeatherSunny,
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
