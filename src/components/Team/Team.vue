<template>
    <div class="team">
        <main-title
            :title="`Team UIoT`"
            :subtitle="`Nossa equipe`"
            class="titulo"
        />
        <h2 class="sub-titulo">Direção</h2>
        <v-container class="grey lighten-5 direction">
            <v-row>
                <v-col class="template-col">
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    style="width: 70%; border: 3px solid rgb(111, 113, 188); border-radius: 10px; margin: 0 auto;"
                    >
                    <img src="../../assets/perfil.jpg">
                    <h2>Rafael</h2>
                    <h3>Role</h3><br>
                    <v-btn v-for="icon in icons" :key="icon" class="mx-4 black--text" icon>
                        <v-icon size="22px">
                            {{ icon }}
                        </v-icon>
                    </v-btn>
                    </v-card>
                </v-col>

                <v-col class="template-col">
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    style="width: 70%; border: 3px solid rgb(111, 113, 188); border-radius: 10px; margin: 0 auto;"
                    >
                    <img src="../../assets/perfil.jpg">
                    <h2>Francisco</h2>
                    <h3>Role</h3><br>
                    <v-btn v-for="icon in icons" :key="icon" class="mx-4 black--text" icon>
                        <v-icon size="22px">
                            {{ icon }}
                        </v-icon>
                    </v-btn>
                    </v-card>
                </v-col>

                <v-col class="template-col">
                    <v-card
                    class="pa-2"
                    outlined
                    tile
                    style="width: 70%; border: 3px solid rgb(111, 113, 188); border-radius: 10px; margin: 0 auto;"
                    >
                    <img src="../../assets/perfil.jpg">
                    <h2>Lucas</h2>
                    <h3>Role</h3><br>
                    <v-btn v-for="icon in icons" :key="icon" class="mx-4 black--text" icon>
                        <v-icon size="22px">
                            {{ icon }}
                        </v-icon>
                    </v-btn>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <v-container class="btn-group">
            <v-btn @click="filterMembers('software')" class="btn">Software</v-btn>
            <v-btn @click="filterMembers('hardware')" class="btn btn-opt">hardware</v-btn>
            <v-btn @click="filterMembers('security')" class="btn">Security</v-btn>
        </v-container>
        <h2 class="sub-titulo">
        {{current_option | capitalize}}
        </h2>
        <v-container>
            <v-row :key="key">
                <v-col cols="4" v-for="item in selected_member" :key="item.name" class="template-col">
                    <v-card
                        class="pa-2"
                        outlined
                        tile
                        style="width: 70%; border: 3px solid rgb(111, 113, 188); border-radius: 10px; margin: 0 auto;"
                    >
                        <img src="../../assets/perfil.jpg">
                        <h2>{{item.name}}</h2>
                        <h3>{{item.area}}</h3><br>
                        <v-btn v-for="icon in icons" :key="icon" class="mx-4 black--text" icon>
                            <v-icon size="22px">
                                {{ icon }}
                            </v-icon>
                        </v-btn>
                        {{ publications(item.key) }}
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>    
</template>

<script>
import Members from "../../texts/Members.js";
import MainTitle from "../Projects/commom/Title";
import { filterPublications } from "../../functions/publications.js"

export default {
    components: {
        MainTitle  
    },
    data: () => ({
        members: Members,
        selected_member: [],
        current_option: "",
        icons: [
            'mdi-badge-account-outline',
            'mdi-linkedin',
            'mdi-github',
        ],
    }),
    methods: {
        filterMembers(area){        
            this.current_option = area    
            this.selected_member = this.members.filter(function(item){
                if(item.role == area){
                    return item
                }
            })
        },
        publications(member){
            return new filterPublications().byOneMember(member)
        }
    }
}
</script>

<style scoped>
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