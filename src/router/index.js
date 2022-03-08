import Vue from "vue/dist/vue";
import VueRouter from "vue-router";

import Site_Layout from "../Site.vue";
import Home from "../views/Home.vue";
import Publications from "../views/Publications.vue";
import Projects from "../views/Projects.vue";
import News from "../views/News.vue";
import Team from "../views/Team.vue";

import Docs_Layout from "../Docs.vue";
import Default from "../docs/Default.vue";

Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "site",
      component: Site_Layout,
      children: [
        {
          path: "/",
          name: "home",
          component: Home
        },
        {
          path: "/publications",
          name: "publications",
          component: Publications
        },
        {
          path: "/projects",
          name: "projects",
          component: Projects
        },
        {
          path: "/news",
          name: "news",
          component: News
        },
        {
          path: "/team",
          name: "team",
          component: Team
        }
      ]
    },
    {
      path: "/docs",
      component: Docs_Layout,
      children: [
        {
          path: "/*",
          name: "default",
          component: Default
        }
      ]
    }
  ]
});
