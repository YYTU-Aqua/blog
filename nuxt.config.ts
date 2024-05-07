// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: './live2d.min.js'
        },
        {
          src: './live2dcubismcore.min.js'
        }
      ]
    }
  }, 
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },
  ssr: false,
  devtools: { enabled: true }
})

module.exports = {
  css: [
    '@/assets/main.css',
    '@/assets/css/styles.css'
  ],
}