import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import i18n from '@/plugins/i18n';
import VueMobileDetection from "vue-mobile-detection"
import VueAnime from "vue-animejs"

Vue.use(VueAnime)
Vue.use(VueMobileDetection)

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  vuetify,
  render: h => h(App),
}).$mount("#app");
