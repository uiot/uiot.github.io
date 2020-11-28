<template>
  <div class="news">
    <div class="bloco_principal">
      <div class="bloco_titulo">
        News
      </div>
      <div class="bloco_texto">
        Este é um texto de bloco de texto
      </div>
      <v-divider></v-divider>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");

.news {
  margin-top: 2%;
  margin-left: 7%;
  margin-right: 7%;
  font-family: "Raleway", sans-serif;
}

.bloco_titulo {
  font-size: 35px;
  background-color: aqua;
  height: 100px;
  text-align: center;
  line-height: 100px;
  background-image: url("https://picsum.photos/1500/100");
}

.bloco_texto {
  padding-top: 30px;
  padding-bottom: 20px;
}
</style>
