<template>
    <div class="projetos">
        <v-container fluid>
          <v-row>
            <v-col cols="12" md="6">
                <h1> Cidade inteligente </h1>
                <p> Texto sobre a cidade inteligente </p>
                <cidade></cidade>
            </v-col>
            <v-col cols="12" md="6">
                <v-img
                    :src="`https://picsum.photos/500/300?image=`"
                    :lazy-src="`https://picsum.photos/id/884`"
                    sizes="10%"
                >

                </v-img>
            </v-col>
        </v-row>
    </v-container>
    </div>
</template>

<script>
import cidade from './cidade_inteligente/City.vue'
export default {
    components: { cidade },
    
}
</script>

<style scoped>

</style>