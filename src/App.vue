<template>
  <NavComponent />
  <!-- <HeroView /> -->
  <router-view />
</template>

<script>
import NavComponent from "./components/NavComponent.vue";
// import HeroView from "@/views/HeroView.vue";
export default {
  name: "App",
  components: {
    NavComponent,
    // HeroView,
  },
};
</script>

<style lang="scss">
@media screen and (max-width: 41em) {
  .nav-comp {
    display: none;
  }
}
</style>
