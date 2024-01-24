import axios from "axios";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // title: "Silicon Networks",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://assets.calendly.com/assets/external/widget.css",
      },
    ],
    script: [
      {
        hid: "calendly",
        src: "https://assets.calendly.com/assets/external/widget.js",
        defer: true,
      },
      {
        hid: "calendly-code",
        src: "/js/main.js",
        defer: true,
      },
      {
        hid: "hs-script-loader",
        src: "//js-na1.hs-scripts.com/21981248.js",
        defer: true,
      },
      {
        hid: "zoho.com",
        src: "https://salesiq.zoho.com/widget",
        defer: true, 
      },
      
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/style/main.css", "~/assets/fonts/fontimport.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/vuetify"],

  generate: {
    routes: () => {
      return axios
        .get("https://sn.softception.digital/wp-json/wp/v2/posts")
        .then((res) => {
          return res.data.map((post) => {
            return {
              route: "insights/" + post.slug,
              payload: post,
            };
          });
        });
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modulesmodules: [
  modules: ["@nuxtjs/gtm", "cookie-universal-nuxt"],
  gtm: {
    id: "GTM-T84VFRN",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  serverMiddleware: ["~/middleware/redirects.js"],
};
