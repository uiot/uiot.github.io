<template>
  <div class="menu-content">
    <ul>
      <li v-for="(item, index) in menu" :key="index">
        <v-btn text class="main-button" :to="`/docs${item.link}`">
          {{ item.name }}
        </v-btn>
        <span v-if="item.subMenu">
          <ul>
            <li v-for="(i, idx) in item.subMenu" :key="idx">
              <v-btn text :to="`/docs${item.link}`">{{ i.name }}</v-btn>
            </li>
          </ul>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { name: "What is UIoT", link: "/about" },
        { name: "Sponsored", link: "/sponsored" },
        {
          icon: "mdi-icon",
          name: "Middleware",
          link: "/middleware",
          // subMenu: [
          //     { name: "DIMS", link: "/middleware/dims" },
          //     { name: "Kernel", link: "/middleware/kernel" },
          //     { name: "Security", link: "/middleware/security" },
          //     { name: "Rules", link: "/middleware/rules" },
          //     { name: "Intellingency", link: "/middleware/intelligency" },
          // ]
        },
        { name: "Gateway", link: "/gateway" },
        { name: "UIMS", link: "/uims" },
        { name: "Dashboard", link: "/dashboard" },
      ],
    };
  },
};
</script>

<style scoped>
.main-button {
}
</style>
