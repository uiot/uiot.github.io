<template>
<div>
  <div class="background">
    teste
  </div>
  <div class="footer">
    <v-footer color="blue" padless >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong> UIoT </strong>
      </v-col>
    </v-footer>
    </div>
</div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.first{
  box-shadow: blue;
  background-color: rgb(204, 204, 204);
}
.footer{
  /* padding-top: 100px; */
}
</style>