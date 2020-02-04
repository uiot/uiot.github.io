<template>
    <div class="team">
        <v-container fluid>
          <v-row>
            <v-col
              v-for="i in Atuais"
              :key="i"
              cols="12"
              sm="4"
              md="3"
              lg="3"
            >
              <v-img
                class="image"
                :src="`https://picsum.photos/500/300?image=${i.id}`"
                :lazy-src="`https://picsum.photos/10/6?image=${4 * 5 + 10}`"
                aspect-ratio="1"
              ></v-img>
              <v-card>
                  <v-card-title>
                    {{ i.name }}
                  </v-card-title>
                  <v-card-subtitle>
                      {{ i.email }}
                  </v-card-subtitle>
                  <v-card-actions>
                      <meet  v-bind:id="i"></meet>
                  </v-card-actions>
              </v-card>
              
            </v-col>
          </v-row>
        </v-container>  
    </div>
</template>

<script>
import Members from "../../texts/Members"
import Meet from "./Member.vue"

export default {
    components: { Meet },
    data(){
        return {
            Atuais: Members.Current
        }
    }    
}
</script>

<style scoped>
.image{
  border-radius:2px;
}
</style>