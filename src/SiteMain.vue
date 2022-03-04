<template>
  <v-app class="white">
    <ToolBar />
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import ToolBar from "./components/TheToolbar.vue";
import Footer from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    ToolBar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;1,300&display=swap");

.barraAzul {
  background-color: rgb(36, 180, 180);
  height: 5px;
}
</style>
