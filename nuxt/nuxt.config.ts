import * as path from "path";
import svgLoader from "vite-svg-loader";
import genSitemap from "./scripts/gen-sitemap";
import getContentRoutes from "./scripts/get-content";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    output: {
      publicDir: path.join(__dirname, "../firebase/public"),
    },
    hooks: { compiled: genSitemap },
    prerender: {
      failOnError: false,
      routes: getContentRoutes().concat(["/notes.json"]),
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
      script: [
        {
          src: "https://unpkg.com/twemoji@14.0.2/dist/twemoji.min.js",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  css: [
    "@/assets/css/common.css",
    "@/assets/css/tailwind.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  vite: {
    plugins: [
      svgLoader({
        defaultImport: "url",
      }),
    ],
  },
});
