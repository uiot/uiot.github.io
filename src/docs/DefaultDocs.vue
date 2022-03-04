<template>
  <div>
    <div v-html="compiledMarkdown"></div>
    <div>
      {{ computedRoute }}
    </div>
  </div>
</template>

<script>
import marked from "marked";
import _ from "lodash";

export default {
  data() {
    return {
      input: "",
    };
  },
  computed: {
    compiledMarkdown: function () {
      let path = "./" + this.currentRoute();
      let content = require(`${path.toString()}`);
      // alert(content)
      // let content = this.input
      // console.log(content.default)
      return marked(content.default, { sanitize: true });
    },
    computedRoute() {
      return this.currentRoute();
    },
  },
  methods: {
    currentRoute() {
      let route = this.$route.path.split("/");
      route[route.length - 1] = route[route.length - 1] + ".md";
      let __ret = route.slice(1, route.length).join("/");
      if (__ret == "docs.md") {
        __ret = "docs/welcome.md";
      }
      return __ret;
    },
    update: _.debounce(function (e) {
      this.input = e.target.value;
    }, 300),
  },
};
</script>

<style scoped></style>
