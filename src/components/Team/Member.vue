<template>
  <v-row justify="center">
    <v-btn
    text
      @click.stop="dialog = true"
    >
      Meet
    </v-btn>

    <v-dialog
      v-model="dialog"
    >
      <v-card>
          <v-container>
              <v-row>
                  <v-col cols="12" xs="2" sm="2" md="6" lg="12">
              <v-img
                class="imagem"
                :src="`https://picsum.photos/500/300?image=${id.id}`"
                :lazy-src="`https://picsum.photos/10/6?image=${id.id}`"
                width="90%"
              ></v-img>
                      <v-card-title>
                          {{ id.name }}
                      </v-card-title>
                      <v-card-subtitle>
                          <span>{{ id.role }}</span><br>
                          <span>{{ id.email }}</span><br>
                          <span>{{ id.bio }}</span>
                      </v-card-subtitle>
                      <v-card-actions>
                          <v-btn>
                              Linkedin
                          </v-btn>
                      </v-card-actions>
                  </v-col>
                  <v-col cols="12" md="6">

                  </v-col>
              </v-row>
          </v-container>
        

        <v-card-text>
        </v-card-text>

      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return {
            dialog: false,
        }
    }
}
</script>

<style scoped>
.imagem{
  border-radius: 5px;
}
</style>