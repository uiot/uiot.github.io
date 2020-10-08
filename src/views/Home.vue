<template>
  <div class="home">
      <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
    <div class="image">
      <h1> {{ $t('welcomeMsg') }} </h1>
    </div>
      </v-parallax>

    <div class="barraAzul">
    </div>
    <div class="corpo">    
      <div class="bloco_titulo">
          <h1 class="texto_titulo"> {{ $t('wwdo') }} </h1>
      </div>
      <div class="text_wwdo">
          {{ $t('lorenIpsum') }}
      </div>
      <v-divider></v-divider>
      <v-row class="times">
        <v-col cols="12" sm="12" md="4" lg="4">
          <h1> Hardware </h1>
          <p> {{ $t('lorenIpsum') }} </p>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
          <h1> Software </h1>
          <p> {{ $t('lorenIpsum') }} </p>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
          <h1> Segurança </h1>
          <p> {{ $t('lorenIpsum') }} </p>
        </v-col>
      </v-row>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {
  }
};
</script>

<style scoped>

.home{
  font-family: 'Raleway', sans-serif;
}

.text_wwdo{
  color: rgb(110, 81, 81);
}

.text_wwdo{
  padding-bottom: 20px;
}

.image{
  line-height: 500px;
  text-align: center;
  color: rgb(49, 49, 49);
  height: 500px;
}
.barraAzul{
  background-color: rgb(36, 180, 180);
  height: 5px;
}
.bloco_titulo{
  padding-top: 15px;
  text-align: center;
}
.texto_titulo{
  size: 10px;
}
.subtitulo{
  margin-left: 10%;
  margin-right: 10px;
}
.corpo{
    margin-top: 2%;
    margin-left: 7%;
    margin-right: 7%;     
}
.times{
  text-align: center;
}

.bloco_texto_time{
  padding-left: 1px;
  padding-right: 1px;
}
</style>