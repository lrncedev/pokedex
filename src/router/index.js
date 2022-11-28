import { createWebHistory, createRouter } from "vue-router";

/* Views directory */
import HeroView from "@/views/HeroView.vue";
import PokeDex from "@/views/PokeDex.vue";
const routes = [
  {
    path: "/",
    component: HeroView,
  },
  {
    path: "/pokedex",
    component: PokeDex,
  },
  // {
  //   path: "/projects",
  //   component: Project,
  // },
  // {
  //   path: "/achievements",
  //   component: Achievements,
  // },
  // {
  //   path: "/contact",
  //   component: Contact,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
