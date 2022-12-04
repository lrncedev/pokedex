module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/_shared.scss";`,
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/pokedex/" : "/",
};
