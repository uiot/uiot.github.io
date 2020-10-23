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
    <v-data-table
      :headers="headers"
      :items="filtered.length ? filtered : setYear()"
      class="grey lighten-5"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="title"
      show-expand
    >
      <template v-slot:body="{ items }">
        <tbody>
          <tr
            v-for="(item, i) in items"
            :key="`${i}-${item.id}`"
          >
            <td> <v-chip class="base white--text"> <b> {{ item.year }} </b> </v-chip> </td>
            <td v-if="!item.language"></td>
            <td v-else-if="item.language === 'en'"> <img width="20" :src="require(`@/assets/united-states.png`)"> </td>
            <td v-else-if="item.language === 'pt-br'"> <img width="20" :src="require(`@/assets/brazil.png`)"> </td>
            <td v-else></td>
            <td>{{ item.title }}</td>
            <td>{{ item.authors | teste }}</td>
            <td v-if="item.download"><a :href="item.download"> <img width="20" :src="require(`@/assets/pdf.png`)"> </a></td>
            <td v-else></td>
          </tr>
        </tbody>
      </template>
    <template v-slot:expanded-item="{  item }">
      <span v-for="author in item.authors" :key="author"> {{ author }} </span>
    </template>
    </v-data-table>
  </div>
</template>

<script>
import Publications from "../../texts/Publications"
import { filterPublications } from "../../functions/publications.js"


export default {
    data(){
        return {
            lastDateSelected: [ 2020 ],
            selectedYears: [ 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012 ],
            publicacoes: Publications,
            expanded: [],
            singleExpand: false,
            headers: [
              { text: 'Year', align: 'start', sortable: false, value: 'year',},
              { text: '', value: '' },
              { text: 'Title', value: 'title' },
              { text: 'Authors', value: 'authors' },
              { text: '', value: 'data-table-expand' },
            ],
        }
    },
    filters: {
      teste(value){
        return value.join(', ')
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
      },
      setYear(){
        this.selectedYears = [ 2019 ]
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
</style>
