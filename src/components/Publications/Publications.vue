<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="item in publicacoes" :key="item">
      <v-expansion-panel-header class="year"> <b> {{ item.year }} </b> </v-expansion-panel-header>
      <v-expansion-panel-content>
        <div v-for="i in item.publication" :key="i">
            <h1> {{ i.title }} </h1>
            <v-divider></v-divider><br>
            <div v-for="autor in i.authors" :key="autor">
                <div class="autor">{{ autor }}</div>
            </div>
            <br>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import Publications from "../../texts/Publications"

export default {
    data(){
        return {
            publicacoes: Publications.years
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