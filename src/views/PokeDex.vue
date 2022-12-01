<template >
  <div class="grid">
    <div class="grid-item grid-1">
      <div class="filter-content">
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
      </div>
      <div class="search-content">
        <input type="text" name="" id="" />
        <button>Search</button>
      </div>
    </div>
    <div class="grid-item grid-2">
      <div class="grid-header">
        <h2>Pokemon</h2>
        <h3>Result: <span>8</span> of <span>100</span></h3>
      </div>
      <div class="grid-results">
        <div class="pokemon" v-for="pokemon in pokemonList" :key="pokemon.id">
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

        <!-- <div class="pokemon">
          <div class="pokemon-img">
            <div class="poke-img">
              <img src="@/assets/pokemon-1.png" alt="pokemon" />
            </div>
            <div class="pokemon-info">
              <h2 class="pokemon-name">Pokemon Name</h2>
              <ul class="pokemon-types">
                <li>Electric</li>
              </ul>
            </div>
          </div>
          <div class="pokemon-stats">
            <div class="physical-stats">
              <div class="height">
                <h3>Height</h3>
                <h4>4 feet</h4>
              </div>
              <div class="weight">
                <h3>Weight</h3>
                <h4>4 feet</h4>
              </div>
            </div>
            <div class="game-stats">
              <div class="hp">
                <h3>HP</h3>
                <h4>35</h4>
              </div>
              <div class="attack">
                <h3>Attack</h3>
                <h4>Attack</h4>
              </div>
              <div class="defense">
                <h3>Defense</h3>
                <h4>40</h4>
              </div>
            </div>
          </div>
        </div> -->
      </div>
      <div class="paginate">
        <!-- <button @click="prev" :disabled="current == 1">Prev</button>
          Page {{ current }} of {{ getPageLength }}
          <button @click="next" :disabled="current == getPageLength">Next</button> -->
        <button>Prev</button>
        Page 1 of 100
        <button>Next</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "PokeDex",
  data() {
    return {
      initialList: 8,
      pokemonList: [],
    };
  },
  methods: {
    getPokemon() {
      for (let i = 1; i <= this.initialList; i++) {
        this.getInitialList(i);
      }
    },
    // getInitialList(i) {
    //   const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    //   axios.get(url).then((res) => this.pokemonList.push(res.data));
    // },
    getByUrl(url) {
      axios.get(url).then((res) => this.pokemonList.push(res.data));
    },
    fetchPokemon() {
      const url = "https://pokeapi.co/api/v2/pokemon/";
      axios.get(url).then((res) => {
        // console.log(res.data);
        const arrayStart = res.data.results;

        arrayStart.forEach((arr) => {
          console.log(arr.url);
          const pokemonUrl = arr.url;
          this.getByUrl(pokemonUrl);
        });
      });
    },
  },
  mounted() {
    // this.getPokemon();
    // console.log(this.pokemonList);
    this.fetchPokemon();
  },
};
</script>
<style lang="scss">
.grid {
  color: $gray-text;
  display: grid;
  min-height: 100%;
  grid-template-columns: 1fr;

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
      display: flex;
      justify-content: flex-end;
      margin-top: auto;

      input[type="text"] {
        flex-grow: 1;
      }
    }
  }

  .grid-2 {
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
      padding: 1em 1em;
      display: grid;
      row-gap: 0.5em;
      column-gap: 1em;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: auto;

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
}

@media screen and (max-width: 30em) {
  .grid {
    .grid-2 {
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