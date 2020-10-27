<template>
    <div class="projetos">
        <v-container fluid>
            <main-title
                :title="`Middleware UIoT`"
                :subtitle="`short description`"
            />
            <v-row>
                <v-col v-for="item in middleware" :key="item" cols="12" sm="12" md="4" xl="4">
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
                                {{ $t(`pages.projects.middleware.${item.text}`) }}
                            </span>
                        </v-card-text>
                        <v-card-actions class="footer-card ">
                            <v-spacer/>
                            <v-tooltip bottom v-for="i in item.technologies" :key="i" >
                                <template v-slot:activator="{on, attrs}">
                                    <v-icon v-bind="attrs" v-on="on" :class="`${item.text_color} pr-3`"> 
                                        {{i.language}}
                                    </v-icon>
                                </template>
                                <span>
                                    {{i.name}}
                                </span>
                            </v-tooltip>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-container fluid>
            <main-title
                :title="`Amoris`"
                :subtitle="`short description`"
            />
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
                                {{ $t(`pages.projects.amoris.${item.text}`) }}
                            </span>
                        </v-card-text>
                        <v-card-actions class="footer-card ">
                            <v-spacer/>
                            <v-tooltip bottom v-for="i in item.technologies" :key="i" >
                                <template v-slot:activator="{on, attrs}">
                                    <v-icon v-bind="attrs" v-on="on" :class="`${item.text_color} pr-3`"> 
                                        {{i.language}}
                                    </v-icon>
                                </template>
                                <span>
                                    {{i.name}}
                                </span>
                            </v-tooltip>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Projects from "../../texts/Projects.js"
import MainTitle from "../commom/Title"

export default {
    components: {
        MainTitle  
    },
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