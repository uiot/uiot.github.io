<template>
  <div class="team">
    <div class="bloco_principal">
        <div class="bloco_titulo">
            Team
        </div>
        <div class="bloco_texto">
            {{ $t('lorenIpsum') }}
        </div>
        <v-divider></v-divider>
        <v-tabs
        v-model="tab"
        color="blue"
        grow
        >
        <v-tab
            v-for="item in items"
            :key="item"
        >
            {{ item }}
        </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
        <v-tab-item
            v-for="item in items"
            :key="item"
        >
            <v-card flat color="basil">
                <current></current>
            </v-card>
        </v-tab-item>
        </v-tabs-items>
        
    </div>
  </div>
</template>

<script>
import current from '../components/Team/Current.vue';
// import left from '../components/Team/Left.vue';

export default {
    components: { current },
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
    padding-top: 30px;
    padding-bottom: 20px;
}
</style>