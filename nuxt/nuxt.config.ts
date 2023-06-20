import { defineNuxtConfig } from "nuxt";
import * as path from "path";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  target: "static",
  buildModules: ["@nuxtjs/tailwindcss"],
  generate: {
    dir: "app",
  },
  nitro: {
    output: {
      publicDir: path.join(__dirname, "../firebase/public"),
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
      },
      charset: "utf-8",
      viewport: "width=device-width,initial-scale=1",
      meta: [],
      link: [
        {
          id: "favicon",
          rel: "icon",
          type: "image/png",
          href: "/favicon64.png",
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap",
        },
      ],
    },
  },
  css: ["@/assets/css/common.css", "@/assets/css/tailwind.css"],
  modules: ["nuxt-svg-loader"],
});
