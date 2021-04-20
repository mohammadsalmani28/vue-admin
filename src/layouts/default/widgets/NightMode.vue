<template>
  <v-btn class="mt-n2 ml-n2 mr-2" fab small elevation="2" height="44" width="44" @click="nightMode">
    <v-icon>mdi-weather-night</v-icon>
  </v-btn>
</template>

<script>
  export default {
    name: 'NightMode',
    methods: {
      nightMode () {
        this.$vuetify.theme.dark = this.$vuetify.theme.dark === false;
      },
    },
  }
</script>
