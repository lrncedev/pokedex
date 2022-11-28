<template>
  <div class="hero">
    <div class="hero-text">
      <div class="welcome">
        <h2>Welcome to</h2>
        <h1>VueDex</h1>
      </div>
      <div class="description">
        <p>API consuming web app from <u>PokeApi.co</u></p>
        <br />
        <p>
          This web app allows you to checkout Pokémon and it's information
          through API calls.
        </p>
      </div>
      <div class="cta-hidden">
        <button @click="gotoPokeDex">Let's Go</button>
      </div>
    </div>
    <img src="@/assets/pokeart.png" alt="" />

    <button class="cta">Let's Go</button>
  </div>
</template>
<script>
export default {
  name: "HeroView",
  methods: {
    gotoPokeDex() {
      this.$router.push("/pokedex");
    },
  },
};
</script>
<style lang="scss">
.hero {
  width: 80%;
  margin: 0 auto;
  display: flex;
  height: calc(100vh);
  flex-direction: column;
  justify-content: center;

  img {
    width: 100%;
    border-radius: 8px;
    background-color: $accent-bg;
  }
  .hero-text {
    margin-bottom: 0.8rem;
    .welcome {
      h2 {
        font-weight: 400;
        font-size: clamp(1.5rem, 2.5vw, 2rem);
      }
      h1 {
        font-weight: 900;
        color: $accent-text;
        font-size: clamp(3.5rem, 5.5vw, 4.2rem);
      }
    }
    .description {
      display: none;
    }
  }
  .cta-hidden {
    display: none;
  }

  button.cta {
    margin-top: 0.8em;
    font-weight: 700;
    background-color: $accent-text;
    padding: 0.5em 1em;
    border: none;
    border-radius: 5px;
    font-size: clamp(1.3rem, 5.5vw, 1.5rem);
  }
}

@media screen and (min-width: 40em) {
  .hero {
    height: calc(100vh - (80px + 32px));
    display: grid;
    grid-template-columns: 1fr 1fr;

    .hero-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-right: 1em;
      .description {
        display: block;
        margin-top: 1rem;
        font-size: clamp(1.3rem, 5.5vw, 1.5rem);
        color: $white-text;
      }
      .cta-hidden {
        display: block;
        button {
          margin-top: 0.8em;
          font-weight: 700;
          font-size: clamp(1.3rem, 5.5vw, 1.5rem);
          background-color: $accent-text;
          padding: 0.5em 1em;
          border: none;
          border-radius: 5px;
        }
      }
    }
    button.cta {
      display: none;
    }
    img {
      height: 70%;
      align-self: center;
      margin-top: auto 0;
    }
  }
}
</style>