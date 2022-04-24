import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr:false,
    target:"static",
    generate: {
        dir: 'app'
      }
})
