<template>
    <v-row>
        <v-col cols="3">
            <Menu/>
        </v-col>
        <v-col cols="9">
            <router-view/>
        </v-col>
    </v-row>
</template>

<script>
import Menu from "./docs/components/Menu.vue"


export default {
    components: {
        Menu
    },
    data: () => ({ 
        drawer: null 
    }),
}
</script>