<template>
  <div class="projects">
        <main-title
            :icon="'mdi-wrench'"
            :title="$t('pages.projects.title')"
            :subtitle="$t('pages.projects.subtitle')"
        />
        <div class="barraAzul base lighten-2"></div>
    <!-- <div class="bloco_principal">
        <div class="bloco_titulo">
            Projects
        </div>
        <div class="bloco_texto">
            {{ $t('lorenIpsum') }}
        </div>
        <v-divider></v-divider>
        <Projects></Projects>
    </div> -->
  </div>
</template>

<script>
import mainTitle from "../components/MainTitle.vue";
// import Projects from '../components/Projects/Projects';
export default {
    components: { mainTitle },
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

.title{
    font-family: 'Titillium Web', sans-serif;
    color: rgb(77, 77, 77);
    size: 100px;
}

.projects{
    font-family: 'Raleway', sans-serif;
}

.bloco_titulo{
    font-size: 35px;
    background-color: aqua;
    height: 100px;
    text-align: center;
    line-height: 100px;
    background-image: url('https://picsum.photos/1500/100');
}

.bloco_texto{
    padding-top: 20px;
    padding-bottom: 20px;
}
</style>