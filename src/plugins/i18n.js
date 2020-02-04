import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Languages from '../texts/Languages.js'

Vue.use(VueI18n);

const messages = {
    'en': Languages.English,
    'pt-br': Languages.Portugues,
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n;
