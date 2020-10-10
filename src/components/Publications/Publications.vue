<template>
  <div>
    <v-card flat class="grey lighten-5">
      <v-card-title> 
        <v-col cols="8">
          <v-select outlined dense v-model="selectedYears" :items="years" attach chips color="base" label="Ano de publicação" multiple>
            <template v-slot:selection="{ attrs, item}">
              <v-chip v-bind="attrs" class="white--text" color="base">
                <template class="pr-2">
                  {{ item }}
                </template>
              </v-chip>
            </template>
          </v-select>
        </v-col>
          <v-spacer/>
          <v-col cols="4">
            <v-text-field
            label="Autor"
          ></v-text-field>
          </v-col>
        <v-spacer/> 
      </v-card-title>
    </v-card>
    <v-data-table
      :headers="headers"
      :items="filtered"
      class="grey lighten-5"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="title"
      show-expand
    >
      <!-- <template v-slot:body="{ items }">
        <tbody>
          <tr
            v-for="(item, i) in items"
            :key="`${i}-${item.id}`"
          >
            <td>{{ item.year }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.authors }}</td>
          </tr>
        </tbody>
      </template> -->
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
            selectedYears: [],
            publicacoes: Publications,
            expanded: [],
            singleExpand: false,
            headers: [
              { text: 'Year', align: 'start', sortable: false, value: 'year',},
              { text: 'Title', value: 'title' },
              { text: 'Authors', value: 'authors' },
              { text: '', value: 'data-table-expand' },
            ],
        }
    },
    filters: {
      teste(value){
        return value
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