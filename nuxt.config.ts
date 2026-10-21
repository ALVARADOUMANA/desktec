export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  modules: ['@nuxt/content'],
  css: ['~/assets/css/blog.css'],
  content: {
    experimental: {
      sqliteConnector: 'native'
    }
  },
  nitro: {
    // Sitio 100% estático: no hay función en Netlify
    preset: 'netlify-static',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/blog']
    }
  },
  app: {
    head: {
      titleTemplate: '%s - Blog de Arquitectura de la Información',
      htmlAttrs: { lang: 'es' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})
