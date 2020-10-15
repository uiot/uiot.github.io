<template>
  <div class="home">

      <div class="presentation grey lighten-3">
          <h1> {{ $t('welcomeMsg') }} </h1>
        <div class="title">
        </div>
      </div>

    <div class="barraAzul base"/>

    <div class="whatwedo">
      <h2 class="base--text">  <v-icon class="base--text" size="40"> mdi-magnify </v-icon> <b> {{ $t('wwdo') }} </b> </h2>
      <p class="text"> {{ $t("lorenIpsum") }} </p>
      <v-row>
        <v-col sm="12" md="4">
          <v-card flat color="grey lighten-2">
            <v-card-title>
              Hardware
            </v-card-title>
            <v-card-text>
              {{ $t("lorenIpsum") }}
            </v-card-text>
          </v-card>
        </v-col>
        <v-col sm="12" md="4">
          <v-card flat color="grey darken-3 white--text">
            <v-card-title>
              Software
            </v-card-title>
            <v-card-text class="white--text">
              {{ $t("lorenIpsum") }}
            </v-card-text>
          </v-card>
        </v-col>
        <v-col sm="12" md="4">
          <v-card flat color="blue-grey lighten-2">
            <v-card-title>
              Security
            </v-card-title>
            <v-card-text>
              {{ $t("lorenIpsum") }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <div>
        <v-btn outlined class="base lighten-1 white--text" to="/projects"> <b> Check out </b> </v-btn>
      </div>
    </div>

    <div class="academics base lighten-1">
        <h2 class="white--text">  <v-icon class="white--text" size="40"> mdi-book-open-variant </v-icon> <b> {{ $t('home.academics.title') }} </b> </h2>
        <div class="text white--text"> {{ $t('home.academics.text') }} </div>
        <v-row>
          <v-col sm="12" md="6" lg="6" v-for="item in publications" :key="item.title">
            <v-card flat :class="`${item.color} lighten-2`">
              <v-card-subtitle>
                <span class="font-weight-light title_card"> {{ item.year }} - {{ item.title }} </span> 
              </v-card-subtitle>
            </v-card>
          </v-col>
          <v-col sm="12" md="6" lg="6">
            <v-icon size="50" class="white--text">  mdi-plus-circle-outline </v-icon>
          </v-col>
        </v-row>
    </div>

    <div class="team">

    </div>


  </div>
</template>

<script>
import { filterPublications } from "../functions/publications.js"
// @ is an alias to /src

export default {
  name: "home",
  components: {
  },
  data() {
    return {
      
    }
  },
  computed: {
    publications(){
      let publications = new filterPublications().byQuantity(5) 
      publications[0]['color'] = 'grey'
      publications[1]['color'] = 'blue-grey'
      publications[2]['color'] = 'teal'
      publications[3]['color'] = 'red'
      publications[4]['color'] = 'brown'
      return publications
    }
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
  padding-top: 2%;
  padding-bottom: 2%;
  text-align: center;
  font-family: 'Titillium Web', sans-serif;
  font-size: 25px;
  padding-left: 2%;
  padding-right: 2%;
}

.whatwedo .text{
  font-size: 15px;
}

.academics {
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 2%;
  padding-right: 2%;
  text-align: center;
  font-family: 'Titillium Web', sans-serif;
  font-size: 20px;
}

.academics .text{
  margin-top: -2px;
  font-size: 13px;
}

.academics .title_card{
  font-size: 17px;
}

.team{
  height: 300px;
  padding-top: 2%;
  text-align: center;
  font-family: 'Titillium Web', sans-serif;
  font-size: 20px;
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