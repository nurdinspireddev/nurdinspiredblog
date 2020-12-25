<template>
  <v-footer :fixed="fixed" app>
    <v-row>
      <v-col>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-col>
      <v-col>
        <v-col cols="12" xs="12">
          <div>
            <h1>Tags</h1>
            <span v-for="(t, index) in tagArray" :key="index">
              <v-chip
                :class="[`ma-2 ${t.textColor}--text`]"
                close
                :to="`/tag/${t.link}`"
                :color="t.color"
              >
                {{ t.name }}
              </v-chip>
            </span>
          </div>
        </v-col>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  data() {
    return {
      fixed: false,
      tagArray: [
        {
          name: 'JavaScript',
          link: 'JavaScript',
          color: 'yellow',
          textColor: 'black',
        },
        {
          name: 'C#',
          link: 'C#',
          color: 'purple',
          textColor: 'white',
        },
        {
          name: 'DataEngineering',
          link: 'DataEngineering',
          color: 'black',
          textColor: 'white',
        },
        {
          name: 'SqlServer',
          link: 'SqlServer',
          color: 'red',
          textColor: 'white',
        },
        {
          name: 'Vue.JS',
          link: 'Vue.JS',
          color: 'green',
          textColor: 'white',
        },
        {
          name: 'Vuex',
          link: 'Vuex',
          color: 'green',
          textColor: 'white',
        },
      ],
    }
  },
}
</script>
