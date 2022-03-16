<template>
  <v-app id="app">
    <Site/>
  </v-app>
</template>

<script>
import Site from './Site.vue'
export default {
  name: 'App',
  components: {
    Site
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
