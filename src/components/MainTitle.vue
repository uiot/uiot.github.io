<template>
  <div class="component grey lighten-3">
    <span class="title">
      <h2>
        <v-icon size="30"> {{ icon }} </v-icon> {{ title }}
      </h2>
      <h3>{{ subtitle }}</h3>
    </span>
  </div>
</template>

<script>
export default {
  props: ["icon", "title", "subtitle"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.component {
  padding-top: 5%;
}
.component h2 {
  color: rgb(82, 82, 82);
  padding-left: 5%;
}
.component h3 {
  color: rgb(117, 117, 117);
  font-size: 12px;
  padding-left: 5%;
  padding-bottom: 15px;
}
</style>
