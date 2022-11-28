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
              <label for="test">Electrict</label>
            </li>
            <li>
              <input type="checkbox" name="test" id="test" />
              <label for="test">Electrict</label>
            </li>
          </ul>
          <ul>
            <li>
              <input type="checkbox" name="test" id="test" />
              <label for="test">Electrict</label>
            </li>
            <li>
              <input type="checkbox" name="test" id="test" />
              <label for="test">Electrict</label>
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
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PokeDex",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss">
.grid {
  color: $gray-text;
  display: grid;
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

    .grid-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .grid-results {
      padding: 1em 0;
      display: grid;
      row-gap: 0.5em;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: 200px;

      div {
        width: 80%;
        background-color: $accent-bg;
        margin: 0 auto;
      }
    }
  }
}

@media screen and (max-width: 40em) {
  .grid {
    .grid-2 {
      .grid-results {
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
    grid-auto-rows: calc(100vh - (80px + 32px));

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
        // grid-auto-rows: 200px;
        grid-template-columns: repeat(4, 1fr);
        gap: 0.5em 1em;
      }
    }
  }
}
// @media screen and (min-width: 600px) and (max-width: 800px) {
//   .grid {
//     .grid-2 {
//       .grid-results {
//         // grid-auto-rows: 200px;
//         // grid-template-columns: repeat(3, 1fr);
//         gap: 0.5em 1em;
//       }
//     }
//   }
// }

// @media screen and (min-width: 50em) {
//   .grid {
//     display: grid;
//     grid-template-columns: 20% 80%;
//     grid-auto-rows: calc(100vh - (80px + 32px));

//     .grid-item {
//       padding: $md;
//     }

//     .grid-1 {
//       display: flex;
//       padding: $md;
//       flex-direction: column;
//       gap: 1em;
//       width: 100%;

//       div {
//         padding: $md;
//         background-color: $accent-bg;
//       }

//       .filter-content {
//         h3 {
//           text-align: center;
//           color: $gray-text;
//           font-weight: 400;
//         }
//         hr {
//           border: 1px solid $gray-text;
//           margin: 0.4em 0;
//         }
//         .filter-type {
//           display: flex;
//           justify-content: space-between;
//         }
//       }

//       .search-content {
//         // display: flex;

//         input[type="text"] {
//           flex-grow: 1;
//         }
//       }
//     }
//     .grid-2 {
//       .grid-results {
//         grid-auto-rows: 200px;
//         grid-template-columns: repeat(3, 1fr);
//         gap: 0.5em 1em;
//       }
//     }
//   }
// }
</style>