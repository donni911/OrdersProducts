// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],

  css: ["@fortawesome/fontawesome-svg-core/styles.css"],

  pageTransition: { name: "page", mode: "out-in" },

  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
  },
});
