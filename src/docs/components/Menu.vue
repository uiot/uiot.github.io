<template>
    <div>
        <div class="">
            <div @click="goTo()">
                <v-img class="nameLogo" src="@/assets/logo.png" width="35" />
                <span class="titleText base--text">
                    <h2><b> uiot </b></h2>
                </span>
            </div>
        </div><br>
        <v-divider/>
        <div>
            <ul>
                <li v-for="(item, index) in menu" :key="index">
                    <a> {{ item.name }} </a>
                    <span v-if="item.subMenu"> 
                        <ul>
                            <li v-for="(i, idx) in item.subMenu" :key="idx">
                                <a>{{i.name}}</a>
                            </li>
                        </ul>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            menu: [
                { name: "What is UIoT" },
                { name: "Sponsored" },
                { 
                    icon: "mdi-icon",
                    name: "Middleware",
                    subMenu: [
                        { name: "DIMS" },
                        { name: "Kernel" },
                        { name: "Security" },
                        { name: "Rules" },
                        { name: "Intellingency" },
                    ]
                },
                { name: "Gateway" },
                { name: "UIMS" },
                { name: "Dashboard" },
            ]
        }
    }
    
}
</script>

<style scoped>
.nameLogo {
  float: left;
}

</style>