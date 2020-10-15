<template>
    <div class="projetos">
        <v-container fluid>
            <div class="header">
                <span class="main_title grey--text text--darken-2"> Middleware UIoT </span><br>
                <span class="subtitle grey--text"> short description </span>
            </div>
            <v-row>
                <v-col v-for="item in middleware" :key="item" cols="12" sm="12" md="4" xl="4" >
                    <v-card flat :color="item.color" :class="`${item.text_color}`">
                        <v-card-title> 
                            <v-icon :class="`${item.text_color}`" > {{item.icon}} </v-icon>
                            <span class="card_title">
                                <b>
                                    {{item.name}} 
                                </b>
                            </span>
                        </v-card-title>
                        <v-card-text :class="`${item.text_color}`">
                            <span class="text_text">
                                {{ $t('lorenIpsum') }}
                            </span>
                        </v-card-text>
                        <v-card-actions class="footer-card ">
                            <v-spacer/>
                            <v-icon v-for="i in item.technologies" :key="i" :class="`${item.text_color} pr-3`"> {{i}} </v-icon>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-container fluid>
            <div class="header">
                <span class="main_title grey--text text--darken-2"> Amoris </span><br>
                <span class="subtitle grey--text"> short description </span>
            </div>
            <v-row>
                <v-col v-for="item in covid" :key="item" cols="12" sm="12" md="4" xl="4" >
                    <v-card flat :color="item.color" :class="`${item.text_color}`">
                        <v-card-title> 
                            <v-icon :class="`${item.text_color}`" > {{item.icon}} </v-icon>
                            <span class="card_title">
                                <b>
                                    {{item.name}} 
                                </b>
                            </span>
                        </v-card-title>
                        <v-card-text :class="`${item.text_color}`">
                            <span class="text_text">
                                {{ $t('lorenIpsum') }}
                            </span>
                        </v-card-text>
                        <v-card-actions class="footer-card ">
                            <v-spacer/>
                            <v-icon v-for="i in item.technologies" :key="i" :class="`${item.text_color} pr-3`"> {{i}} </v-icon>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Projects from "../../texts/Projects.js"

export default {
    data(){
        return {
            middleware: Projects.middleware,
            covid: Projects.covid,
        }
    }
}
</script>

<style scoped>
.projetos{
    padding: 2% 2% 10% 2%;
}

.header{

}

.main_title{
    font-family: 'Titillium Web Bold', sans-serif;
    font-size: 30px;
}

.subtitle{
    font-family: 'Titillium Web', sans-serif;
    font-size: 18px;
}

.card_title{
    font-family: 'Titillium Web', sans-serif;
    padding-left: 10px;
}


.text_text{
    font-size: 12px;
}


</style>