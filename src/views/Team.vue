<template>
  <div class="team">
        <main-title
            :icon="'mdi-account'"
            :title="$t('pages.team.title')"
            :subtitle="$t('pages.team.subtitle')"
        />
        <div class="barraAzul base lighten-2"></div>
        <team></team>
  </div>
</template>

<script>
import mainTitle from "../components/MainTitle";
import Team from "../components/Team/Team";
// import left from '../components/Team/Left.vue';

export default {
    components: { mainTitle, Team },
    data(){
      return {
        tab: null,
        items: [
          'Current', 'Left :/',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    }
    
}
</script>

<style scoped>
.team{
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
    padding-top: 30px;
    padding-bottom: 20px;
}
</style>