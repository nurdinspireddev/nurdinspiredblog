<template>
  <v-footer>
    <v-row class="d-none d-md-flex">
      <!-- Nurd Tags  -->
      <v-col cols="12" xs="12" md="6" class="py-0">
        <nurd-tags />
      </v-col>

      <!-- Nurd Social -->
      <!-- <v-col cols="12" xs="12" md="3">
        <nurd-social />
      </v-col> -->

      <!-- Nurd Copyright -->
      <v-col
        cols="12"
        xs="12"
        md="3"
        offset-md="3"
        align-self="end"
        style="text-align: end"
        class="py-0"
      >
        <v-row>
          <v-col cols="12" class="py-0">
            <!-- Nurd Social -->
            <nurd-social />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="py-0">
            <span class="body-2"
              >NurdInspiredDev &copy; {{ new Date().getFullYear() }}</span
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
