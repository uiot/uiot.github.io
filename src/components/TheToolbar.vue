<template>
  <div class="toolbar">
    <mobile v-if="isMobile"></mobile>
    <web v-if="!isMobile"></web>
  </div>
</template>

<script>
import web from "./toolbar/WebToolbar.vue";
import mobile from "./toolbar/MobileToolbar.vue";

export default {
  components: {
    web,
    mobile,
  },
  data() {
    return {
      isMobile: false,
      show: false,
    };
  },
  created() {},
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 630;
    },
    goTo() {
      this.$router.push("/");
    },
  },
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
