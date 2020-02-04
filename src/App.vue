<template>
  <v-app class="grey lighten-4 all">
    <ToolBar/>
      <!-- <v-content class="mx-4 mb-4"> -->
          <router-view></router-view>
      <!-- </v-content>   -->
    <Footer></Footer>
  </v-app>
</template>

<script>
import ToolBar from '../src/components/Toolbar.vue'
import Footer from '../src/components/Footer.vue'

export default {
  name: "App",
  components: {
    ToolBar,
    Footer
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>

</style>
