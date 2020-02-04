<template>
  <div class="toolbar">
    <v-toolbar>
      <v-toolbar-title> <v-btn text to="/"> UIoT </v-btn> </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text to="/publications">Publications</v-btn>
        <v-btn text to="/projects">Projects</v-btn>
        <v-btn text to="/news">News</v-btn>
        <v-btn text to="/team">Team</v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              color="primary"
              dark
              v-on="on"
            >
              Dropdown
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in languages"
              :key="index"
            >
              <v-list-item-title >
                <v-btn text @click="changeLocale(item.language)" class="botao">
                  {{ item.title }}
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
    </v-menu>
      </v-toolbar-items>

    </v-toolbar>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';
export default {
  data() {    
    return {      
      items: [
        { title: 'English' },
        { title: 'Portugues' },
      ],  
      languages: [            
        { 
          flag: 'us', 
          language: 'en', 
          title: 'English' 
        },            
        { 
          flag: 'pt-br', 
          language: 'pt-br', 
          title: 'Portugues' 
        }        
      ]    
    };
  },
  methods: {    
    changeLocale(locale) {        
      i18n.locale = locale;    
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

.toolbar{
    font-family: 'Raleway', sans-serif;
}

.botao{
    font-family: 'Raleway', sans-serif;
}

</style>