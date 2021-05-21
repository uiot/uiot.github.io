<template>
  <div class="toolbar grey">
    <v-expand-transition>
      <div class="base lighten-1 menu-mobile" v-if="drawer">
        <div class="button-position">
          <v-btn
            text
            to="/projects"
            @click="drawer = false"
            :class="{
              base: checkRouteColor('projects', currentRoute),
              'lighten-2': true
            }"
          >
            {{ $t("toolbar.projects") }}
          </v-btn>
        </div>
        <div class="button-position">
          <v-btn
            text
            to="/publications"
            @click="drawer = false"
            :class="{
              base: checkRouteColor('publications', currentRoute),
              'lighten-2': true
            }"
          >
            {{ $t("toolbar.publications") }}
          </v-btn>
        </div>
        <div class="button-position">
          <v-btn
            text
            to="/team"
            @click="drawer = false"
            :class="{
              base: checkRouteColor('team', currentRoute),
              'lighten-2': true
            }"
          >
            {{ $t("toolbar.team") }}
          </v-btn>
        </div>
        <div class="button-position">
          <v-btn
            text
            to="/docs"
            @click="drawer = false"
            :class="{
              base: checkRouteColor('docs', currentRoute),
              'lighten-2': true
            }"
          >
            {{ $t("toolbar.docs") }}
          </v-btn>
        </div>
        <div class="button-position">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on">
                {{ currentLang }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in languages" :key="index">
                <v-list-item-title>
                  <v-btn
                    text
                    @click="changeLocale(item.language)"
                    class="botao"
                  >
                    <v-img
                      width="30"
                      :src="require(`@/assets/${item.img}`)"
                    ></v-img>
                    <v-span class="lang-title"> - {{ item.title }} </v-span>
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-expand-transition>
    <div class="style-top base lighten-1" />
    <v-app-bar flat class="grey lighten-3">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <div @click="goTo()" class="logo-mobile">
        <v-img class="nameLogo" src="@/assets/logo.png" width="35" />
        <span class="titleText  nameLogo base--text">
          <h2><b> uiot </b></h2>
        </span>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import i18n from "@/plugins/i18n";

export default {
  data() {
    return {
      drawer: false,
      items: [{ title: "English" }, { title: "Portugues" }],
      languages: [
        {
          img: "united-states.png",
          flag: "us",
          language: "en",
          title: "English"
        },
        {
          img: "brazil.png",
          flag: "pt-br",
          language: "pt-br",
          title: "Portugues"
        }
      ],
      currentLang: "en"
    };
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
      this.currentLang = i18n.locale;
    },
    checkRouteColor(name, routeName) {
      if (name == routeName) {
        return true;
      } else {
        return false;
      }
    },
    goTo() {
      this.$router.push("/");
      this.drawer = false;
    }
  }
};
</script>

<style scoped>
.button-position {
  padding-top: 2px;
  text-align: center;
}

.logo-mobile {
  text-align: center;
}

.nameLogo {
  float: left;
}

.titleText {
  padding-left: 10px;
}

.rotateLogo:hover {
  transform: rotate(360deg);
  transition: 2s;
}

.toolbar {
  font-family: "Titillium Web", sans-serif;
}

.botao {
  font-family: "Raleway", sans-serif;
}

.hoverItem {
  background-color: blue;
}

.style-top {
  height: 10px;
}
</style>
