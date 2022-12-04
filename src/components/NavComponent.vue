<template>
  <div class="nav-comp">
    <h1 class="app-title" @click="gotoMain">PokeDex</h1>
    <h2>About</h2>
  </div>
</template>
<script>
export default {
  name: "NavComponent",
  methods: {
    gotoMain() {
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss">
.nav-comp {
  padding: $md;
  align-items: center;
  display: flex;
  justify-content: space-between;
  color: $gray-text;

  .app-title {
    color: $accent-text;
    cursor: pointer;
    font-size: clamp(2.3rem, 4.5vw, 2.8rem);
  }
}
</style>