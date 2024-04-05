// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-aos', '@nuxt/content'],
  css: ['~/assets/css/main.css'],
  plugins: [
    '~/plugins/clipboard.js'
  ],

})
