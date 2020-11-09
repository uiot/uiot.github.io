<template>
    <div>
        <v-card :color="getColor(index, person.lab.active)" dark>
            <div class="d-flex flex-no-wrap justify-space-between black--text">
                <div class="content-body">
                    <v-card-title class="headline"> {{person.name}} </v-card-title>
                    <v-card-text>
                        {{person.area}} <br> 
                        {{person.email}}
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text @click="getArticles(person.key)" class="black--text mx-3"> <v-icon> mdi-arrow-down </v-icon> </v-btn>
                        <v-spacer/>
                        <v-icon v-if="person.linkedin" class="mx-3 black--text"> mdi-linkedin </v-icon>
                        <v-icon v-if="person.github" class="mx-3 black--text"> mdi-github </v-icon>
                    </v-card-actions>
                </div>
                <v-avatar class="ma-3" size="125" tile>
                    <v-img :src="require(`@/assets/photos/${person.picture}.svg`)"></v-img>
                </v-avatar>
            </div>
        </v-card>
        <v-dialog v-model="dialog" width="900">
            <list-publications :data="current_publications"/>
        </v-dialog>
    </div>
</template>

<script>
import listPublications from "../commom/ListPublications";
import { filterPublications } from "../../functions/publications.js"

export default {
    props: [ 'person', 'index' ],
    components: { 
        listPublications
    },
    data(){
        return {
            colors: [
                "#91c7a0",
                "#ffa8a8",
                "#9199c7",
                "#e3b1b1",
                "#b1e3e2"
            ],
            dialog: false,
            current_publications: [],
            current: [],
            left: []
        }
    },
    methods: {
        getArticles(key){
            this.dialog = true
            this.current_publications = this.publications(key)
        },
        publications(member){
            return new filterPublications().byOneMember(member)
        },
        getColor(index, active){
            if(active){
                return this.colors[index%5]
            }else{
                return this.colors[index%5] + "30"
            }
        }
    }
}
</script>

<style scoped>
.content-body{
    text-align: left;
}
.teste{
    size: 100px;
}
</style>