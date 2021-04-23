<template>
  <v-container class="background mb-6">
    <v-row align="center">
      <v-col class="xs-12 md-6 mx-auto">
        <div id="countUp" class="counter" style="margin-top: 20%;">
          <div class="number" data-count="404">{{ counter }}</div>
          <div class="text">Page not found</div>
          <div class="text">This may not mean anything.</div>
          <v-btn :to="'/'" rounded outlined style="color: white">Dashboard</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'PageNotFound',
    data () {
      return {
        counter: 1,
        interval: null,
      }
    },
    created () {
      this.interval = setInterval(this.increament.bind(this), 5);
    },
    methods: {
      increament () {
        this.counter = this.counter + 1
        if (this.counter === 404) {
          clearInterval(this.interval)
        }
      },
    },
  }
</script>

<style scoped>

.background {
  background-image: url('/status-page-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  min-width: 100vw;
  font-family: "Roboto Mono", "Liberation Mono", Consolas, monospace;
  color: rgba(255, 255, 255, .87);
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.container,
.container > .row,
.container > .row > div {
  height: 100%;
}

#countUp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.number {
  font-size: 4rem;
  font-weight: 500;
}

.text {
  margin: 0 0 1rem;
  font-weight: 300;
  text-align: center;
}

</style>
