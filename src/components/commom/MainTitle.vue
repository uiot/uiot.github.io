<template>
  <div class="header">
    <span class="main_title grey--text text--darken-2"> {{ title }} </span
    ><br />
    <span class="subtitle grey--text"> {{ subtitle }} </span>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle"],
};
</script>

<style scoped>
.main_title {
  font-family: "Titillium Web Bold", sans-serif;
  font-size: 30px;
}

.subtitle {
  font-family: "Titillium Web", sans-serif;
  font-size: 18px;
}
</style>
