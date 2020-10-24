<template>
    <div class="team">
        <v-container fluid>
            <main-title
                :title="`Coordenadores do projeto`"
            />
            <v-row>
                <v-col v-for="item in coordination" :key="item.key" xs="6" sm="4" md="3" xl="2">
                    <v-card
                        style="border-radius: 10px; margin: 0 auto;"
                    >
                        <v-img
                            height="200"
                            src="../../assets/perfil.jpg"
                        />
                        <v-card-title> {{item.name}} </v-card-title>
                        <v-card-subtitle> {{item.area}} </v-card-subtitle>
                        <v-card-actions>
                            <v-btn text @click="getArticles(item.key)" class="grey--text"> <v-icon> mdi-arrow-down </v-icon> </v-btn>
                            <v-spacer/>
                            <v-icon> mdi-linkedin </v-icon>
                            <v-icon> mdi-github </v-icon>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            <main-title
                :title="current_option | capitalize"
            />
            <v-menu open-on-hover bottom offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn text color="grey" dark v-bind="attrs" v-on="on">
                        <v-icon> mdi-arrow-bottom-right </v-icon>
                    </v-btn>
                </template>
                <v-list color="#133e79">
                    <v-list-item v-for="(item, index) in options" :key="index" @click="filterMembers(item.name)">
                        <v-list-item-title class="white--text">{{ item.name }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-container>
        <v-row>
            <v-col v-for="item in current_team" :key="item.key" xs="6" sm="4" md="3" xl="2">
                <v-card style="border-radius: 10px; margin: 0 auto;">
                    <v-img
                        height="200"
                        src="../../assets/perfil.jpg"
                    />
                    <v-card-title> {{item.name}} </v-card-title>
                    <v-card-subtitle> {{item.area}} </v-card-subtitle>
                    <v-card-actions>
                        <v-btn text @click="getArticles(item.key)" class="grey--text"> <v-icon> mdi-arrow-down </v-icon> </v-btn>
                        <v-spacer/>
                        <v-icon> mdi-linkedin </v-icon>
                        <v-icon> mdi-github </v-icon>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <v-dialog v-model="dialog" width="900">
            <v-card>
                <v-data-table
                    :headers="headers"
                    :items="current_publications.length ? current_publications : []"
                    class="grey lighten-5"
                    :single-expand="singleExpand"
                    :expanded.sync="expanded"
                    item-key="title"
                    show-expand
                >
                    <template v-slot:body="{ items }">
                        <tbody>
                            <tr v-for="(item, i) in items" :key="`${i}-${item.id}`">
                                <td> <v-chip class="base white--text"> <b> {{ item.year }} </b> </v-chip> </td>
                                <td v-if="!item.language"></td>
                                <td v-else-if="item.language === 'en'"> <img width="20" :src="require(`@/assets/united-states.png`)"> </td>
                                <td v-else-if="item.language === 'pt-br'"> <img width="20" :src="require(`@/assets/brazil.png`)"> </td>
                                <td v-else></td>
                                <td>{{ item.title }}</td>
                                <td><span>{{ item.short }}</span> <span v-if="!item.short" >({{ item.type }})</span> </td>
                                <td>{{ item.authors | teste }}</td>
                                <td>
                                <a v-if="item.download" :href="`/assets/pdf/${item.download}`" target="_blank"> <img width="20" :src="require(`@/assets/pdf.png`)"> </a>
                                <a v-if="item.publication_link" :href="`${item.publication_link}`" target="_blank"> <img width="20" :src="require(`@/assets/globe.png`)"> </a>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                    <template v-slot:expanded-item="{  item }">
                        <span v-for="author in item.authors" :key="author"> {{ author }} </span>
                    </template>
                </v-data-table>
            </v-card>
        </v-dialog>
    </div>    
</template>

<script>
import Members from "../../texts/Members.js";
import MainTitle from "../Projects/commom/Title";
import { filterPublications } from "../../functions/publications.js"
import { filterMembers } from "../../functions/members.js"

export default {
    components: {
        MainTitle  
    },
    data: () => ({
        dialog: false,
        members: Members,
        selected_member: [],
        current_option: "choose an option",
        icons: [ 'mdi-badge-account-outline', 'mdi-linkedin', 'mdi-github',],
        options: [ { name: "software" }, { name: "hardware" }, { name: "security" }],
        current_team: [],
        current_publications: [],
        headers: [
            { text: 'Year', align: 'start', sortable: false, value: 'year',},
            { text: '', value: '' },
            { text: 'Title', value: 'title' },
            { text: 'Published in', value: 'short' },
            { text: 'Authors', value: 'authors' },
            { text: '', value: 'data-table-expand' },
        ],
    }),
filters: {
    teste(value){
    let arr_ret = []
    value.map(function(item){ arr_ret.push(new filterMembers().byKey(item)) })

    return arr_ret.join(", ")
    }
},
    computed: {
        coordination(){
            return new filterMembers().byArea('coordination')
        },
        software(){
            return new filterMembers().byArea('software')
        },
        hardware(){
            return new filterMembers().byArea('hardware')
        },
        security(){
            return new filterMembers().byArea('security')
        }
    },
    methods: {
        getArticles(key){
            this.dialog = true
            this.current_publications = this.publications(key)
        },
        filterMembers(area){        
            this.current_option = area    
            if(area == 'software'){
                this.current_team = this.software
            }else if(area == 'hardware'){
                this.current_team = this.hardware
            }else if(area == 'security'){
                this.current_team = this.security
            }
        },
        publications(member){
            return new filterPublications().byOneMember(member)
        }
    }
}
</script>

<style scoped>
.team{
    padding: 2% 2% 10% 2%;
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