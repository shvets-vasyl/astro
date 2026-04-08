const isDevMode = process.env.DEV_MODE === "true"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // -------------------------------------------------
  // ⚙️ Core
  // -------------------------------------------------
  compatibilityDate: "2025-07-15",

  typescript: {
    shim: false,
  },

  devtools: {
    enabled: false,
  },

  // -------------------------------------------------
  // 📦 Modules
  // -------------------------------------------------
  modules: ["@nuxt/eslint"],


  // -------------------------------------------------
  // 🎨 Global CSS
  // -------------------------------------------------
  css: ["@/assets/styles/main.scss", "swiper/css"],

  // -------------------------------------------------
  // ⚡ Vite
  // -------------------------------------------------
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/utils/mixins.scss" as *;\n',
        },
      },
    },
  },

  // -------------------------------------------------
  // 🏛️ App Meta / Head
  // -------------------------------------------------
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      title: "Astrology Spirituality",

      htmlAttrs: {
        lang: "en",
      },


      meta: [
        // Base

        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },

        { name: "theme-color", content: "#0e0e0e" },
        { charset: "utf-8" },

        // SEO
        { name: "title", content: "Astrology Spirituality" },
        {
          name: "description",
          content: "Глибокий аналіз вашого життєвого шляху",
        },

        // Open Graph
        { property: "og:title", content: "Astrology Spirituality" },
        {
          property: "og:description",
          content: "Глибокий аналіз вашого життєвого шляху",
        },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Astrology Spirituality" },
        { property: "og:url", content: "" },
        { property: "og:image", content: "/og.jpg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:type", content: "image/jpeg" },

        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Astrology Spirituality" },
        {
          name: "twitter:description",
          content:
            "Глибокий аналіз вашого життєвого шляху",
        },
        { name: "twitter:image", content: "/og.jpg" },
      ],

      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
    },
  },

  devServer: {
    port: 6969,
  },
})
