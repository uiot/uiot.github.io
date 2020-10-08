<template>
    <div class="projetos">
        <v-container fluid>
        <v-row>
            <v-col v-for="item in projects" :key="item" cols="12" sm="12" md="4" xl="4" >
                <v-card flat color="grey lighten-3">
                    <v-card-tile> <v-icon class="pa-3" size="50"> {{item.icon}} </v-icon> <v-span class=" title-text"> {{item.name}} </v-span> </v-card-tile>
                    <v-card-subtitle>{{item.short_description}}</v-card-subtitle>
                    <v-card-text>
                        {{ $t('lorenIpsum') }}
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer/>
                            <v-btn elevation="0" color="base"> {{ item.link }} </v-btn>
                        <v-spacer/>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return {
            projects: [
                { 
                    name: "DIMS", 
                    icon: "mdi-database",
                    short_description: "The database for your UIoT middleware", 
                    description: "aaaaaaaaaaaaaa", 
                    img: "bla",
                    link: "abc"
                },
                {
                    name: "UIMS",
                    icon: "mdi-chart-line",
                    short_description: "The best way to check your data",
                    description: "aaaaaaaaaaaaa",
                    img: "bla",
                    link: "abc"
                },
                {
                    name: "Dashboard",
                    icon: "mdi-view-dashboard",
                    short_description: "The easiest way to interact with your devices",
                    description: "aaaaaaaaaaaaa",
                    img: "bla",
                    link: "abc"
                }
            ]
        }
    }
}
</script>

<style scoped>

.title-text{
    font-size: 30px;
}

</style>