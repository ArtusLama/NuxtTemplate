// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    modules: [
        "@nuxt/eslint",
        "@nuxt/fonts",
        "@nuxt/icon",
        "@nuxt/image",
    ],

    eslint: {
        config: {
            stylistic: true,
        },
    },

    future: {
        compatibilityVersion: 4,
    },
    compatibilityDate: "2025-05-15",
})
