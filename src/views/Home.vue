<template>
  <div class="home">

      <div class="presentation grey lighten-3">
          <h1> {{ $t('welcomeMsg') }} </h1>
        <div class="title">
        </div>
      </div>

    <!-- <div class="barraAzul"/> -->

    <div class="whatwedo">
      <h2 class="base--text">  <v-icon class="base--text" size="40"> mdi-magnify </v-icon> <b> {{ $t('wwdo') }} </b> </h2>
    </div>

    <div class="academics base lighten-1">
        <h2 class="white--text">  <v-icon class="white--text" size="40"> mdi-book-open-variant </v-icon> <b> {{ $t('home.academics.title') }} </b> </h2>
        <div class="text white--text"> {{ $t('home.academics.text') }} </div>
    </div>

    <div class="team">

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

.presentation{
  height: 500px;
  text-align: center;
}

.presentation h1 {
  color: rgb(70, 70, 70);
  padding-top: 200px;
}

.whatwedo{
  height: 500px;
  padding-top: 2%;
  text-align: center;
  font-family: 'Titillium Web', sans-serif;
  font-size: 25px;
}

.academics {
  height: 300px;
  padding-top: 2%;
  text-align: center;
  font-family: 'Titillium Web', sans-serif;
  font-size: 20px;
}

.academics .text{
  margin-top: -2px;
  font-size: 13px;
}


.team{
  height: 300px;
  padding-top: 2%;
  text-align: center;
  font-family: 'Titillium Web', sans-serif;
  font-size: 20px;
}





.teste{
  /* background-image: url("https://cdn.vuetifyjs.com/images/parallax/material.jpg"); */
}

.home{
  font-family: 'Raleway', sans-serif;
}

.text_wwdo{
  color: rgb(110, 81, 81);
}

.text_wwdo{
  padding-bottom: 20px;
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