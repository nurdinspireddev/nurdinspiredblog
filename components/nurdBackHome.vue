<template>
  <div class="pb-5">
    <v-btn outlined to="/">
      <v-icon> {{ arrowLeft }} </v-icon>
      Back Home
    </v-btn>
  </div>
</template>

<script>
import { mdiArrowTopLeftThick } from '@mdi/js'

export default {
  data() {
    return {
      arrowLeft: mdiArrowTopLeftThick,
    }
  },
}
</script>
