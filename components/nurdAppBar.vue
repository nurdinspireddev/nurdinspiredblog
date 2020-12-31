<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-toolbar-title>nurd inspired</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-switch
        color="#fff"
        v-model="$vuetify.theme.dark"
        inset
        label="Light / Dark"
        persistent-hint
      ></v-switch>
      <!-- <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>{{ dots }}</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>
  </div>
</template>

<script>
import { mdiDotsVertical } from '@mdi/js'

export default {
  data() {
    return {
      dots: mdiDotsVertical,
    }
  },
}
</script>
