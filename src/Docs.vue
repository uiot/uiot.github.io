<template>
    <div class="docs">
        <div class="toolbar">
            <div class="style-top base lighten-1" />
            <v-toolbar flat class="grey lighten-3">
            <v-toolbar-title class="pl-10">
                <div @click="goTo()">
                <v-img class="imgLogo" src="@/assets/logo.png" width="35" />
                <span class="titleText  nameLogo base--text">
                    <h2><b> uiot </b></h2>
                </span>
                <span class="titleText nameLogo base--text">
                    <h2 class="docsStyle">DOCS</h2>
                </span>
                </div>
                <div></div>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            </v-toolbar>
        </div>

        <div class="menu-content">
            <div class="fixed">
                <Menu/>
            </div>
            <div class="flex-item">
                <router-view/>
            </div>
        </div>
    </div>
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

<style scoped>
.docs{
    height: 100%;
}

.menu-content{
    display: flex;
    height: 100%;
}
.fixed{
    height: 100%;
    width: 240px;
}
.flex-item{
    padding-left: 20px;
    flex-grow: 1;
}

.imgLogo{
    float: left;
    transform: rotate(30deg);
}

.nameLogo {
  float: left;
}

.titleText {
  padding-left: 10px;
}

.toolbar {
  font-family: "Titillium Web", sans-serif;
}

.style-top {
  height: 10px;
}
</style>