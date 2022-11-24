import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RussianView from "../views/RussianView/RussianView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/rus",
      name: "home-rus",
      component: RussianView,
    },
  ],
});

export default router;
