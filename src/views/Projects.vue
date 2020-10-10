<template>
  <div class="projects">
    <div class="title">
        <v-icon> mdi-devices </v-icon>  
        <span> <b>{{ $t('projects.title') }}</b> </span>
    </div>
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
// import Projects from '../components/Projects/Projects';
export default {
    // components: { Projects },
    
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
    margin-top: 2%;
    margin-left: 3%;
    margin-right: 3%;    
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