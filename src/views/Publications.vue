<template>
  <div class="publication">
    <div class="bloco_principal">
        <div class="bloco_titulo">
            Publications
        </div>
        <div class="bloco_texto">
            <p> {{ $t('lorenIpsum') }} </p>
        </div>
        <v-divider></v-divider>
        <div class="publicacoes">
            <publications></publications>
        </div>
    </div>
  </div>
</template>

<script>
import publications from "../components/Publications/Publications.vue"
export default {
    components: {
        publications,
    },
    data(){
        return {

        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

.publication{
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

.publicacoes{
    padding-top: 15px;
}
</style>