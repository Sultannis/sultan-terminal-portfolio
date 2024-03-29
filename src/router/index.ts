import MainLayout from "@/layouts/MainLayout.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main-layout",
      component: MainLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
      ],
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", redirect: { name: "home" } },
  ],
});

export default router;
