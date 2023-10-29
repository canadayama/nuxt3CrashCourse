// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [
        {name: 'description', content: 'Everything about Nuxt 3'}
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    apiCurrencyKey: process.env.CURRENCY_API_KEY,
    public: {
        apiBase: 'https://fakestoreapi.com',
        apiCurrency: 'https://api.currencyapi.com'
    }
  },
})
