import { createWebHistory, createRouter } from "vue-router";

/* Views directory */
import HeroView from "@/views/HeroView.vue";
import PokeDex from "@/views/PokeDex.vue";
const routes = [
  {
    path: "/",
    redirect: { name: "HeroView" }, //Redirects to the name key and its value
  },
  {
    path: "/",
    name: "HeroView",
    component: HeroView,
  },
  {
    path: "/pokedex",
    redirect: { name: "PokeDex" },
    // component: PokeDex,
  },
  {
    path: "/pokedex",
    name: "PokeDex",
    component: PokeDex,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
