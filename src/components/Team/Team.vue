<template>
    <div class="team">
        <v-container fluid>
            <main-title :title="`Coordenadores do projeto`"/>
            <v-row>
                <v-col v-for="(item, i) in coordination" :key="item.key" xs="12" sm="12" md="6" xl="4">
                    <profile :person="item" :index="i" />
                </v-col>
            </v-row>
            <div class="options">
                <v-row>
                    <v-col cols="3">  </v-col>
                    <v-col cols="6"> 
                        <v-btn rounded outlined :class="`blue ${chardware}`" @click="filterMembers('hardware')"> Hardware </v-btn>
                        <v-btn rounded outlined :class="`green ${csoftware}`" @click="filterMembers('software')"> Software </v-btn> 
                        <v-btn rounded outlined :class="`red ${csecurity}`" @click="filterMembers('security')"> Security </v-btn>
                    </v-col>
                    <v-col cols="3">  </v-col>
                </v-row>
            </div>
        </v-container>
        <v-row>
            <v-col v-for="(item, i) in current_team" :key="item.key" xs="12" sm="12" md="6" xl="4">
                <profile :person="item" :index="i" />
            </v-col>
        </v-row>
    </div>    
</template>

<script>
import profile from "./Card"
import MainTitle from "../commom/Title";
import { filterMembers } from "../../functions/members.js"

export default {
    components: {
        MainTitle,
        profile
    },
    data: () => ({
        chardware: "lighten-5",
        csoftware: "lighten-5",
        csecurity: "lighten-5",
        current_team: [],
        current_option: "",
        
    }),
filters: {
    teste(value){
        let arr_ret = []
        value.map(function(item){ arr_ret.push(new filterMembers().byKey(item)) })
        return arr_ret.join(", ")
    }
},
    computed: {
        coordination(){ return new filterMembers().byArea('coordination') },
        software(){ return new filterMembers().byArea('software') },
        hardware(){ return new filterMembers().byArea('hardware') },
        security(){ return new filterMembers().byArea('security') }
    },
    methods: {
        filterMembers(area){
            this.current_option = area        
            this.setSelectedColors(area)
            if(area == 'software'){
                this.current_team = this.software
            }else if(area == 'hardware'){
                this.current_team = this.hardware
            }else if(area == 'security'){
                this.current_team = this.security
            }
        },
        setSelectedColors(area){
            if(area == 'software'){
                this.csoftware = "lighten-3"
                this.chardware = "lighten-5"
                this.csecurity = "lighten-5"
            }else if(area == 'hardware'){
                this.csoftware = "lighten-5"
                this.chardware = "lighten-3"
                this.csecurity = "lighten-5"
            }else if(area == 'security'){
                this.csoftware = "lighten-5"
                this.chardware = "lighten-5"
                this.csecurity = "lighten-3"
            }
        }
    }
}
</script>

<style scoped>
.team{
    padding: 2% 2% 10% 2%;
}

.options{
    padding-left: 100px;
    padding-right: 100px;
    text-align: center;
}




.titulo {
    text-align: center;
    margin: 1em 0 1em 0;
}

.sub-titulo {
    text-align: center;
    margin: 1.5em 0 1em 0;
}

.template-col {
    align-items: center;
    text-align: center;
}

.btn-group {
    text-align: center;
    margin-top: 4em;
}

.btn-opt {
    margin: 0 6em 0 6em;
}

.btn {
    background-color: rgb(111, 113, 188) !important;
    color: azure;
}

.direction { 
    text-align: center;
}

.main_title{
    font-family: 'Titillium Web Bold', sans-serif;
    font-size: 30px;
}

img {
    width: 60%;
}


</style>