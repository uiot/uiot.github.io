<template>
    <div>
        <div v-html="compiledMarkdown"></div>
        <div>
            {{currentRoute}}
        </div>
    </div>
</template>

<script>
import marked from 'marked'
import _ from 'lodash'

export default {
    data(){
        return {
            input: "# aea mundo \
            como vai?\
            \
            teste"
        }
    },
    computed: {
        compiledMarkdown: function(){
            // let path = "./"+this.currentRoute()
            // let content = require("./docs/sobre.md") 
            // let content = this.input 
            // alert(content)
            return marked(this.input, { sanitize: true });
        },
        currentRoute(){
            let route = this.$route.path.split("/")
            route[route.length-1]=route[route.length-1]+".md"
            return route.slice(1,route.length).join("/")
        }
    },
    methods: {
        update: _.debounce(function(e) {
            this.input = e.target.value;
        }, 300)
    }
}
</script>

<style scoped>

</style>