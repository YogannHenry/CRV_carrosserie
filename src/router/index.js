import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
<<<<<<< HEAD
import AboutView from "../views/AboutView.vue";
=======
import ContactView from "../views/ContactView.vue";
import Realisations from "../views/Realisations.vue";
>>>>>>> fix_main_branch

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
<<<<<<< HEAD
      path: "/about",
      name: "about",

      component: AboutView,
    },
=======
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/realisations",
      name:  "realisations",
      component: Realisations,
    }
>>>>>>> fix_main_branch
  ],
});

export default router;
