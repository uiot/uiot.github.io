<template>
<div class="footer">
  <v-footer color="blue" padless fixed="">
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong> UIoT </strong>
    </v-col>
  </v-footer>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.footer{
  padding-top: 100px;
}
</style>