// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    config: {},
    viewer: true,
    exposeConfig: false,
  }
})
