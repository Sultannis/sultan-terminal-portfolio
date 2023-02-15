import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GlitchedView from "../views/GlitchedView/GlitchedView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/glitch",
      name: "glitch",
      component: GlitchedView,
    },
  ],
});

export default router;
