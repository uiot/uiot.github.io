<template>
  <div class="toolbar">
    <div class="style-top base lighten-1" />
    <v-toolbar flat class="grey lighten-3">
      <v-toolbar-title class="pl-10">
        <div>
          <v-img class="nameLogo" src="@/assets/logo.png" width="35" />
          <span class="titleText  nameLogo base--text">
            <h2><b> uiot </b></h2>
          </span>
        </div>
        <div></div>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items >
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
              {{ currentLang }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in languages" :key="index">
              <v-list-item-title>
                <v-btn text @click="changeLocale(item.language)" class="botao">
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
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import i18n from "@/plugins/i18n";

export default {
  data() {
    return {
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
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
      this.currentLang = i18n.locale;
    }
  }
};
</script>

<style scoped>
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
