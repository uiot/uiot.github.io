// src/plugins/vuetify.js
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

// Translation provided by Vuetify (javascript)
// import zhHans from 'vuetify/es5/locale/zh-Hans'

// Translation provided by Vuetify (typescript)
import en from '../locale/en.ts'

// Your own translation file
// import sv from './i18n/vuetify/sv'

Vue.component('my-component', {
  methods: {
    changeLocale () {
      this.$vuetify.lang.current = 'en'
    },
  },
})

export default new Vuetify({
  lang: {
    locales: { en },
    current: 'en',
  },
})