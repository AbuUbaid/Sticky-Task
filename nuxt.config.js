import axios from "axios";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Silicon Networks",
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
  modules: [
    '@nuxtjs/gtm',
    [
      "nuxt-cookie-control",
      {
        //default css (true)
        //if css is set to false, you will still be able to access
        //your color variables (example. background-color: var(--cookie-control-barBackground))
        css: true,

        //enable or disable css variables polyfill
        cssPolyfill: true,

        //in case you have subdomains (shop.yourdomain.com)
        domain: "yourdomain.com",

        //if you want to tree-shake locales set locales you want to use
        locales: ["en", "de"],

        //modal opener (cookie control)
        controlButton: true,

        //block iframes to prevent them from adding additional cookies
        blockIframe: true,

        //or if you want to set initialState to false (default value for initialState is true)
        blockIframe: {
          initialState: false,
        },

        //position of cookie bar:
        //'top-left', 'top-right', 'top-full',
        //'bottom-left', 'bottom-right', 'bottom-full'
        barPosition: "bottom-full",

        dashInDescription: true,

        //default colors
        //if you want to disable colors set colors property to false
        colors: {
          barTextColor: "#fff",
          modalOverlay: "#000",
          barBackground: "#000",
          barButtonColor: "#000",
          modalTextColor: "#000",
          modalBackground: "#fff",
          modalOverlayOpacity: 0.8,
          modalButtonColor: "#fff",
          modalUnsavedColor: "#fff",
          barButtonHoverColor: "#fff",
          barButtonBackground: "#fff",
          modalButtonHoverColor: "#fff",
          modalButtonBackground: "#000",
          controlButtonIconColor: "#000",
          controlButtonBackground: "#fff",
          barButtonHoverBackground: "#333",
          checkboxActiveBackground: "#000",
          checkboxInactiveBackground: "#000",
          modalButtonHoverBackground: "#333",
          checkboxDisabledBackground: "#ddd",
          controlButtonIconHoverColor: "#fff",
          controlButtonHoverBackground: "#000",
          checkboxActiveCircleBackground: "#fff",
          checkboxInactiveCircleBackground: "#fff",
          checkboxDisabledCircleBackground: "#fff",
        },

        //default texts
        text: {
          barTitle: "Cookies",
          barDescription:
            "We use our own cookies and third-party cookies so that we can show you this website and better understand how you use it, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies.",
          acceptAll: "Accept all",
          declineAll: "Delete all",
          manageCookies: "Manage cookies",
          unsaved: "You have unsaved settings",
          close: "Close",
          save: "Save",
          necessary: "Necessary cookies",
          optional: "Optional cookies",
          functional: "Functional cookies",
          blockedIframe: "To see this, please enable functional cookies",
          here: "here",
        },
      },
    ],
  ],
  gtm: {
    id: 'GTM-WJSV6KD'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  serverMiddleware: ["~/middleware/redirects.js"],
};
