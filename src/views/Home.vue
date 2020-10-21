<template>
  <div class="home">
      
      <!-- <v-btn @click="go">ClickHere</v-btn>
      <div class="block" ref="square">Teste</div> -->

      <div class="presentation grey lighten-3">
          <h1> {{ $t('welcomeMsg') }} </h1>
      </div>

    <div class="barraAzul base"/>

    <div class="whatwedo">
      <h2 class="base--text">  <v-icon class="base--text" size="40"> mdi-magnify </v-icon> <b> {{ $t('wwdo.title') }} </b> </h2>
      <p class="text"> {{ $t("wwdo.text") }} </p>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
          <v-card flat color="grey lighten-2">
            <v-card-title>
              {{ $t("wwdo.hardware.title") }}
            </v-card-title>
            <v-card-text>
              {{ $t("wwdo.hardware.text") }}
            </v-card-text>
          </v-card>
        </v-col>
        <v-col sm="12" md="4">
          <v-card flat color="grey darken-3 white--text">
            <v-card-title>
              {{ $t("wwdo.software.title") }}
            </v-card-title>
            <v-card-text class="white--text">
              {{ $t("wwdo.software.text") }}
            </v-card-text>
          </v-card>
        </v-col>
        <v-col sm="12" md="4">
          <v-card flat color="blue-grey lighten-2">
            <v-card-title>
              {{ $t("wwdo.security.title") }}
            </v-card-title>
            <v-card-text>
              {{ $t("wwdo.security.text") }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <div>
        <v-btn outlined class="base lighten-1 white--text" to="/projects"> <b> {{ $t("wwdo.button") }} </b> </v-btn>
      </div>
    </div>

    <div class="academics base lighten-1">
        <h2 class="white--text">  <v-icon class="white--text" size="40"> mdi-book-open-variant </v-icon> <b> {{ $t('home.academics.title') }} </b> </h2>
        <div class="text white--text"> {{ $t('home.academics.text') }} </div>
        <v-row>
          <v-col xs="12" sm="6" md="4" lg="4" v-for="item in publications" :key="item.title">
            <v-hover v-slot:default="{ hover }" >
              <v-card :elevation="hover ? 6 : 0" flat :color="item.color" min-height="75">
                <v-card-subtitle>
                  <span class="font-weight-bold title_card"> {{ item.title }} </span> 
                </v-card-subtitle>
              </v-card>
            </v-hover>
          </v-col>
          <v-col sm="6" md="4" lg="4">
            <v-hover v-slot:default="{ hover }" >
              <v-card :elevation="hover ? 6 : 0" flat color="#a9d2db" min-height="75" @click="goTo('/publications')">
                <v-card-subtitle>
                  <span text> <h2> <strong> See more </strong> </h2> <v-icon size="15" class="icon">  mdi-plus-circle-outline </v-icon> </span>
                </v-card-subtitle>
              </v-card>
            </v-hover>
          </v-col>
            
        </v-row>
    </div>
    <div class="team">
      <h2 class="base--text">  <v-icon class="base--text" size="40"> mdi-account-group </v-icon> <b> {{ $t('team.title') }} </b> </h2>
      <p class="text"> {{ $t("team.text") }} </p>
    </div>
  </div>
</template>

<script>
import { filterPublications } from "../functions/publications.js"
// import anime from 'animejs';
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
      publications[0]['color'] = '#c1c3d6'
      publications[1]['color'] = '#c1d6c8'
      publications[2]['color'] = '#e8ebd5'
      publications[3]['color'] = '#dfd5eb'
      publications[4]['color'] = '#ebdad5'
      return publications
    }
  },
  mounted() {
    const targets = this.$el;
    this
      .$anime
      .timeline
      .add({
        targets,
        translateX: 250,
        easing: 'easeOutExpo',
      })
      .add({
        targets,
        translateX: 250,
        easing: 'easeOutExpo',
      });
  },
  methods: {
    // go(){
    //   anime({
    //     targets: this.$refs.square,
    //     translateX: 250,
    //     delay: 1000
    //   })
    // },
    goTo(text){
      this.$router.push(text)
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
  font-size: 15px;
}

.academics .title_card{
  font-size: 17px;
}

.team{
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 2%;
  padding-right: 2%;
  text-align: center;
  font-family: 'Titillium Web', sans-serif;
  font-size: 13px;
  height: 300px;
}

.icon{
  padding-left: 10px;
  padding-right: 10px;
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