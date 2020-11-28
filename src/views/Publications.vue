<template>
  <div class="publication">
    <main-title
      :icon="'mdi-book-open-variant'"
      :title="$t('pages.publications.title')"
      :subtitle="$t('pages.publications.subtitle')"
    />
    <div class="barraAzul base lighten-2"></div>
    <div class="content">
      <div class="publicacoes">
        <publications></publications>
      </div>
    </div>
  </div>
</template>

<script>
import publications from "../components/Publications/Publications.vue";
import mainTitle from "../components/MainTitle.vue";

export default {
  components: {
    publications,
    mainTitle
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");

.publication {
  font-family: "Raleway", sans-serif;
}

.bloco_titulo {
  font-size: 35px;
  background-color: aqua;
  height: 100px;
  text-align: center;
  line-height: 100px;
  background-image: url("https://picsum.photos/1500/100");
}

.bloco_texto {
  padding-top: 30px;
  padding-bottom: 20px;
}

.publicacoes {
  padding-top: 15px;
}

.content {
  padding-left: 2%;
  padding-right: 2%;
}
</style>
