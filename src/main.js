import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import i18n from "@/plugins/i18n";
import VueMobileDetection from "vue-mobile-detection";

Vue.use(VueMobileDetection);

Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
