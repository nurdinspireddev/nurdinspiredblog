<template>
  <v-footer :color="`${$vuetify.theme.dark ? '#121212' : '#fff'}`">
    <!-- Nurd Tags  -->
    <v-row align="center">
      <v-col cols="12" xs="12" style="text-align: center" class="py-0">
        <nurd-tags />
      </v-col>
      <!-- Nurd Social -->
      <v-col cols="12" xs="12">
        <v-row>
          <!-- Nurd Social -->
          <v-col cols="12" style="text-align: center">
            <nurd-social />
          </v-col>
        </v-row>
      </v-col>
      <!-- Nurd Copyright -->
      <v-col cols="12" class="text-right">
        <span class="body-2">
          NurdInspiredDev &copy; {{ new Date().getFullYear() }}
        </span>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {}
</script>
