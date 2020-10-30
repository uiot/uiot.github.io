<template>
  <div class="component">
    <v-card flat class="grey lighten-5">
      <v-card-title>
        <v-col cols="8">
          <v-select outlined dense v-model="selectedYears" :items="years" attach chips color="base" :label="$t('pages.publications.publicationYear')" multiple>
            <template v-slot:selection="{ attrs, item}">
              <v-chip v-bind="attrs" class="white--text" color="base">
                <template class="pr-2">
                  {{ item }}
                </template>
              </v-chip>
            </template>
          </v-select>
        </v-col>
      </v-card-title>
    </v-card>
    <list-publications :data="filtered.length ? filtered : all()"/>
  </div>
</template>

<script>
import listPublications from "../commom/ListPublications.vue"
import Publications from "../../texts/Publications"
import { filterPublications } from "../../functions/publications.js"


export default {
    components: {
      listPublications
    },
    data(){
        return {
            lastDateSelected: [ 2020 ],
            selectedYears: [ ],
            publicacoes: Publications,
            expanded: [],
            singleExpand: false,
            filtered_publications: [],
            headers: [
              { text: 'Year', align: 'start', sortable: false, value: 'year',},
              { text: '', value: '' },
              { text: 'Title', value: 'title' },
              { text: 'Published in', value: 'short',
                filter: value => {
                  if(!this.short) return true;
                  if( this.short.every( f => value.includes(f) ) ){
                    return value
                  }
                }
              },
              { text: 'Authors', value: 'authors' },
              { text: '', value: 'data-table-expand' },
            ],
        }
    },
    created(){
      this.filtered_publications = this.all
    },
    computed: {
      years(){
        return new filterPublications().getYears()
      },
      filtered(){
        return new filterPublications().byYears(this.selectedYears)
      },
      all(){
        return new filterPublications().all
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
      },
      setYear(){
        this.selectedYears = [ 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012 ]
      }
    }
}
</script>

<style scoped>
.component{
  padding-bottom: 10%;
}
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
.capitalize {
  text-transform: capitalize;
}
</style>
