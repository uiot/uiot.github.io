import Vue from "vue/dist/vue";
import VueRouter from "vue-router";

import Site_Layout from "../SiteMain.vue";
import Home from "../views/HomeView.vue";
import Publications from "../views/PublicationsView.vue";
import Projects from "../views/ProjectsView.vue";
import News from "../views/NewsView.vue";
import Team from "../views/TeamView.vue";

import Docs_Layout from "../SiteDocs.vue";
import Default from "../docs/DefaultDocs.vue";

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
          component: Home,
        },
        {
          path: "/publications",
          name: "publications",
          component: Publications,
        },
        {
          path: "/projects",
          name: "projects",
          component: Projects,
        },
        {
          path: "/news",
          name: "news",
          component: News,
        },
        {
          path: "/team",
          name: "team",
          component: Team,
        },
      ],
    },
    {
      path: "/docs",
      component: Docs_Layout,
      children: [
        {
          path: "/*",
          name: "default",
          component: Default,
        },
      ],
    },
  ],
});
