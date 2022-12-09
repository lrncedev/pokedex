<template >
  <div class="grid">
    <div class="grid-item grid-1">
      <!-- <div class="filter-content">
        <h3>Filter by:</h3>
        <hr />
        <div class="filter-type">
          <ul>
            <li>
              <input type="checkbox" name="test" id="test" />
              <label for="test">Electric</label>
            </li>
            <li>
              <input type="checkbox" name="test" id="test" />
              <label for="test">Electric</label>
            </li>
          </ul>
          <ul>
            <li>
              <input type="checkbox" name="test" id="test" />
              <label for="test">Electric</label>
            </li>
            <li>
              <input type="checkbox" name="test" id="test" />
              <label for="test">Electric</label>
            </li>
          </ul>
        </div>
      </div> -->
      <div class="search-content">
        <form @submit.prevent="search">
          <input type="text" name="" id="" v-model="searchText" required />
          <button type="submit" class="btn">Search</button>
        </form>
      </div>
    </div>
    <div class="grid-item grid-2">
      <LoaderComponent v-if="isLoading" />
      <div class="grid-header">
        <h2>Pokemon</h2>
        <h3>
          Result: <span>{{ pageSize }}</span> of
          <span>{{ pokemonList.length }}</span>
        </h3>
      </div>
      <div class="grid-results">
        <div
          class="pokemon"
          v-for="pokemon in pagination"
          :key="pokemon.id"
          @click="passPokemon(pokemon)"
        >
          <div class="pokemon-img">
            <div class="poke-img">
              <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
            </div>
            <div class="pokemon-info">
              <h2 class="pokemon-name">{{ pokemon.name }}</h2>
              <ul class="pokemon-types">
                <li
                  v-for="(types, index) in pokemon.types"
                  :key="pokemon.types[index]"
                >
                  {{ types.type.name }}
                </li>
              </ul>
            </div>
          </div>
          <div class="pokemon-stats">
            <div class="physical-stats">
              <div class="height">
                <h3>Height</h3>
                <h4>{{ pokemon.height }}0 cm</h4>
              </div>
              <div class="weight">
                <h3>Weight</h3>
                <h4>{{ pokemon.weight / 10 }} kg</h4>
              </div>
            </div>
            <div class="game-stats">
              <div class="hp">
                <h3>HP</h3>
                <h4>{{ pokemon.stats[0].base_stat }}</h4>
              </div>
              <div class="attack">
                <h3>Attack</h3>
                <h4>{{ pokemon.stats[1].base_stat }}</h4>
              </div>
              <div class="defense">
                <h3>Defense</h3>
                <h4>{{ pokemon.stats[2].base_stat }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="paginate">
        <button @click="prev" :disabled="current == 1">Prev</button>
        Page {{ current }} of {{ getPageLength }}
        <button @click="next" :disabled="current == getPageLength">Next</button>
      </div>
    </div>
    <div class="modal" v-if="modalShown">
      <div class="modal-header">
        <h2>{{ pokemonInfo.id }}</h2>
        <button @click.self="modalAction">✖</button>
      </div>
      <div class="modal-info">
        <div class="sprites">
          <img :src="pokemonInfo.sprites.front_default" alt="" class="sprite" />
          <img :src="pokemonInfo.sprites.back_default" alt="" class="sprite" />
        </div>
        <div>2</div>
      </div>
    </div>
  </div>
</template>
<script>
import LoaderComponent from "./LoaderComponent.vue";
import axios from "axios";
export default {
  name: "PokeDex",
  components: {
    LoaderComponent,
  },
  data() {
    return {
      pokemonList: [],
      current: 1,
      pageSize: 8,
      searchText: "",
      pokemonInfo: "",
      modalShown: false,
      isLoading: true,
    };
  },
  methods: {
    prev() {
      this.current--;
    },
    next() {
      this.current++;
    },
    async getByUrl(url) {
      await axios.get(url).then((res) => this.pokemonList.push(res.data));
    },
    async fetchPokemon() {
      // const url = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";
      const url = "https://pokeapi.co/api/v2/pokemon";

      await axios.get(url).then((res) => {
        const arrayStart = res.data.results;

        arrayStart.forEach((arr) => {
          const pokemonUrl = arr.url;
          this.getByUrl(pokemonUrl);
        });
      });
      // this.isLoading = false;
    },
    async search() {
      this.isLoading = true;
      this.pokemonList = [];
      let lowerCaseText = this.searchText.toLowerCase();
      const url = `https://pokeapi.co/api/v2/pokemon/${lowerCaseText}`;

      await axios.get(url).then((res) => {
        console.log(res.data);
        this.pokemonList = [];
        this.pokemonList.push(res.data);
      });
      this.isLoading = false;
      this.searchText = "";
    },
    modalAction() {
      this.modalShown = !this.modalShown;
    },
    passPokemon(pokemon) {
      this.modalAction();
      console.log(pokemon);
      this.pokemonInfo = pokemon;
      console.log("pokemon info", this.pokemonInfo);
    },
  },
  computed: {
    indexStart() {
      return (this.current - 1) * this.pageSize;
    },
    indexEnd() {
      return this.indexStart + this.pageSize;
    },
    pagination() {
      return this.pokemonList.slice(this.indexStart, this.indexEnd);
    },
    getPageLength() {
      return Math.ceil(this.pokemonList.length / this.pageSize);
    },
  },
  async mounted() {
    await this.fetchPokemon();
    this.isLoading = false;
  },
};
</script>
<style lang="scss">
.grid {
  color: $gray-text;
  display: grid;
  min-height: 100%;
  grid-template-columns: 1fr;
  align-items: start;

  .grid-item {
    padding: $md;
  }

  .grid-1 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 80%;
    margin: 0 auto;

    div {
      padding: $md;
      background-color: $accent-bg;
    }

    .filter-content {
      h3 {
        text-align: center;
      }
      .filter-type {
        display: flex;
        justify-content: space-between;
      }
    }
    .search-content {
      padding: 0;
      width: 100%;

      form {
        display: flex;

        input[type="text"] {
          flex-grow: 1;
          border: none;
        }
        .btn {
          color: $white-text;
          border: none;
          padding: 0.3em 0.5em;
          background-color: transparent;
          border-radius: 0;
        }
      }
    }
  }

  .grid-2 {
    position: relative;
    display: flex;
    flex-direction: column;
    // gap: 1em;

    .grid-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      display: none;
    }
    .grid-results {
      min-height: 100vh;
      padding: 1em 1em;
      display: grid;
      row-gap: 0.5em;
      column-gap: 1em;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: min-content;

      .pokemon {
        grid-template-columns: 1fr;
        border-radius: 8px;
        background-color: $accent-bg;

        .pokemon-img {
          text-align: center;
          display: grid;

          grid-auto-rows: 150px auto;

          .poke-img {
            text-align: center;
            position: relative;

            img {
              top: -30%;
              text-align: center;
              position: absolute;
              top: -20%;
              left: 50%;
              height: 120%;
              overflow: hidden;
              transform: translateX(-50%);
            }
          }
          .pokemon-info {
            .pokemon-name {
              color: $white-text;
              font-size: clamp(1.3rem, 2vw, 1.9rem);
            }
            .pokemon-types {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.4em;
              margin: 0.5em;

              li {
                padding: 0.3rem;
                background-color: #333;
                border-radius: 4px;
              }
            }
          }
        }
        .pokemon-stats {
          div {
            text-align: center;

            h3 {
              color: $white-text;
            }
            h4 {
              color: $accent-text;
              font-weight: 400;
            }
          }
          .physical-stats {
            display: flex;
            align-items: center;
            justify-content: space-around;
          }
          .game-stats {
            padding: $md;
            display: flex;
            align-items: center;
            justify-content: space-around;
          }
        }
      }
    }
    .paginate {
      text-align: center;
      display: flex;
      margin-top: auto;
      align-items: center;
      justify-content: center;
      gap: 0.5em;

      button {
        border: none;
        padding: 0.4em 0.5em;
        border-radius: 4px;
        font-weight: 900;
      }
    }
  }
  .modal {
    height: 80%;
    width: 80%;
    background-color: $main-bg;
    border-radius: 5px;
    color: $white-text;
    z-index: 100;
    position: absolute;
    top: 10%;
    left: 50%;
    right: 50%;
    display: grid;
    grid-auto-rows: 10% 90%;
    transform: translateX(-50%);

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        padding: 0.5em;
        background-color: transparent;
        border: none;
        color: $white-text;
        font-size: 120%;
      }
    }

    .modal-info {
      height: 100%;
      background-color: #eee;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: auto;

      .sprites {
        display: flex;
        flex-direction: column;
        padding: 1em;

        img {
          width: 100%;
        }

        // flex-direction: column;

        // .sprite {
        //   width: 30%;
        //   width: 50%;
        // }
        // :nth-child(even) {
        //   margin-left: auto;

        // }
      }
    }
  }
}

@media screen and (max-width: 30em) {
  .grid {
    .grid-2 {
      position: relative;
      .grid-results {
        width: 90%;
        margin: 0 auto;
        row-gap: 1.3em;
        grid-template-columns: 1fr;
      }
    }
  }
}

@media screen and (min-width: 820px) {
  .grid {
    .grid-2 {
      .grid-results {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .grid {
    display: grid;
    grid-template-columns: 20% 80%;

    .grid-item {
      padding: 0;
    }
    .grid-1 {
      align-self: start;
      position: sticky;
      top: 0;
      .filter-content {
        padding: 0;

        .filter-type {
          flex-direction: column;
        }
      }
    }
    .grid-2 {
      .grid-results {
        grid-template-columns: repeat(4, 1fr);
        gap: 0.5em 1em;
      }
    }
  }
}
</style>