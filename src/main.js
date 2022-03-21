import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import vuetify from "@/plugins/vuetify";
import i18n from '@/plugins/i18n'
import VueMobileDetection from "vue-mobile-detection";

Vue.use(VueMobileDetection);
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  vuetify,
  render: h => h(App),
}).$mount('#app')
