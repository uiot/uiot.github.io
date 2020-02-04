<template>
  <div class="projects">
    <div class="bloco_principal">
        <div class="bloco_titulo">
            Projects
        </div>
        <div class="bloco_texto">
            {{ $t('lorenIpsum') }}
        </div>
        <v-divider></v-divider>
        <Projects></Projects>
    </div>
  </div>
</template>

<script>
import Projects from '../components/Projects/Projects';
export default {
    components: { Projects },
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

.projects{
    margin-top: 2%;
    margin-left: 7%;
    margin-right: 7%;    
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