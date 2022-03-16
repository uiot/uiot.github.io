<template>
  <v-app class="white">
    <ToolBar />
    <Home />
    <Footer />
  </v-app>
</template>

<script>
import ToolBar from "../src/components/Toolbar.vue";
import Footer from "../src/components/Footer.vue";
import Home from "../src/components/Home.vue";

export default {
  name: "MainSite",
  components: {
    ToolBar,
    Footer,
    Home
  },

  data: () => ({
    //
  })
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;1,300&display=swap");

.barraAzul {
  background-color: rgb(36, 180, 180);
  height: 5px;
}
</style>