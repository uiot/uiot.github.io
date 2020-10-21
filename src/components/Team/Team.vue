<template>
    <div class="team">
        <h1 class="titulo">Nosso Time</h1>

        <h2 class="sub-titulo">Direção</h2>
        <v-container class="grey lighten-5">
            <v-row>
            <v-col class="template-col">
                <v-card
                class="pa-2"
                outlined
                tile
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
        <!-- <h2 class="sub-titulo">Hardware</h2>
        <v-container class="grey lighten-5">
            <v-row>
            <v-col class="template-col">
                <v-card
                class="pa-2"
                outlined
                tile
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
            <v-row>
            <v-col class="template-col">
                <v-card
                class="pa-2"
                outlined
                tile
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
        </v-container> -->

        <v-btn @click="filterMembers('software')">Software</v-btn>
        <v-btn @click="filterMembers('hardware')">hardware</v-btn>
        <v-btn @click="filterMembers('security')">Security</v-btn>
        <h2>
        {{current_option | capitalize}}

        </h2>
        <v-container>
            <v-row :key="key">
                <v-col cols="4" v-for="item in selected_member" :key="item.name">
                    <v-card
                        class="pa-2"
                        outlined
                        tile
                    >
                        <img src="../../assets/perfil.jpg">
                        <h2>{{item.name}}</h2>
                        <h3>{{item.area}}</h3><br>
                        <v-btn v-for="icon in icons" :key="icon" class="mx-4 black--text" icon>
                            <v-icon size="22px">
                                {{ icon }}
                            </v-icon>
                        </v-btn>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <!-- <h2 class="sub-titulo">Software</h2>
        <v-container class="grey lighten-5">
            <v-row>
            <v-col class="template-col">
                <v-card
                class="pa-2"
                outlined
                tile
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
            <v-row>
            <v-col class="template-col">
                <v-card
                class="pa-2"
                outlined
                tile
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
        </v-container> -->
    </div>    
</template>

<script>
import Members from "../../texts/Members.js";

export default {
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
    margin: 3em 0 2em 0;
}

.template-col {
    align-items: center;
    text-align: center;
}

img {
    width: 60%;
}
</style>