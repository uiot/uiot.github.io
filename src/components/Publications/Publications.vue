<template>
  <div>
    <v-card >
      <v-card-title> 
        <v-menu open-on-hover bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    text
                    color="black"
                    dark
                    v-bind="attrs"
                    v-on="on"
                >
                Anos <v-icon> mdi-arrow-bottom-right </v-icon>
                </v-btn>
            </template>
            <v-list color="#133e79">
                <v-list-item v-for="(year, index) in years" :key="index" @click="changeDates(year)">
                    <v-list-item-title class="white--text">{{ year }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-spacer/> 
        <v-chip
          v-for="year in selectedYears" :key="year" class="ma-2 white--text" color="base">
            {{year}}
        </v-chip>
      </v-card-title>
    </v-card>

    {{ filtered}}
  </div>
</template>

<script>
import Publications from "../../texts/Publications"
import { filterPublications } from "../../functions/publications.js"


export default {
    data(){
        return {
            selectedYears: [],
            publicacoes: Publications
        }
    },
    computed: {
      years(){
        return new filterPublications().getYears()
      },
      filtered(){
        return new filterPublications().byYears(this.selectedYears)
      }
    },
    methods: {
      changeDates(year){
        if(this.selectedYears.includes(year)){
          let idx = this.selectedYears.indexOf(year)
          this.selectedYears.splice(idx, 1)
        }else{
          this.selectedYears.push(year)
        }
      }
    } 
}
</script>

<style scoped>

.year{
  font-size: 30px;
  color: rgb(56, 56, 56);
}

h1{
  color: rgb(71, 71, 71);
}
.autor{
  color: rgb(73, 73, 73);
}
</style>