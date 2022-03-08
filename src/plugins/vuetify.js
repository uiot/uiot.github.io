// src/plugins/vuetify.js
import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "./colors.js";

Vue.use(Vuetify);

// Your own translation file
// import sv from './i18n/vuetify/sv'

Vue.component("my-component", {
  methods: {
    changeLocale() {
      this.$vuetify.lang.current = "en";
    }
  }
});

export default new Vuetify({

  theme: {
    themes: colors
  }
});
