<template>
  <div class="toolbar">
    <mobile v-if="$isMobile()"></mobile>
    <web v-if="!$isMobile()"></web>
  </div>
</template>

<script>
import web from "./toolbar/web.vue"
import mobile from "./toolbar/mobile.vue"
import i18n from '@/plugins/i18n';

export default {
  components: {
    web,
    mobile
  },
  data() {    
    return {      
      show: false,   
    };
  },
  created() {

  },
  computed: {
    currentRoute(){
      return this.$route.name
    }
  },
  methods: {  
    changeLocale(locale) {        
      i18n.locale = locale;
      this.currentLang = i18n.locale    
    },
    checkRouteColor(name, routeName){
      if(name == routeName){
        return true
      }else{
        return false
      }
    },
    goTo(){
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>
.nameLogo{
  float: left;
}

.titleText{
  padding-left: 10px;
}

.rotateLogo:hover{
  transform: rotate(360deg);
  transition: 2s;
  
}

.toolbar{
    font-family: 'Titillium Web', sans-serif;
}

.botao{
    font-family: 'Raleway', sans-serif;
}

.hoverItem{
  background-color: blue;
}

.style-top{
  height: 10px;
}
</style>