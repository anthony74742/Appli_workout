import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ConfigView from "../views/ConfigView.vue"
import ProfilView from "../views/ProfilView.vue"
import SeanceView from "../views/SeanceView.vue"
import LoginView from "../views/LoginView.vue"
import Sign_inView from "../views/Sign_inView.vue"
import { store } from "../stores/counter";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/start",
      name: "start",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ConfigView
    },
    {
      path: "/profil",
      name: "profil",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ProfilView,
    },
    {
      path: "/seance",
      name: "seance",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SeanceView,
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginView,
    },
    {
      path: "/sign-in",
      name: "sign-in",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Sign_inView,
    },
  ],
});

export default router;

router.beforeEach(async (to, from) => {
  if (!store.IsLog && to.name !== 'login') {
    return { name: 'login' }
  }
})