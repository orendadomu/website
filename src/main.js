import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { createVfm } from 'vue-final-modal'
import App from './App.vue'
import { routes } from './router/routes'
import { messages } from "./i18n/messages.js"
import { DEFAULT_LOCALE } from "./i18n/locales.js"
import "@/assets/scss/index.scss";

export const createApp = ViteSSG(
    App,                                   // ← компонент, только здесь
    {
        routes,
        base: import.meta.env.BASE_URL,
        scrollBehavior: (to, from, savedPosition) => savedPosition || { top: 0 },
    },
    ({ app, router, initialState, isClient }) => {   // ← app (маленькая) приходит сюда
        const pinia = createPinia()
        app.use(pinia)
        if (import.meta.env.SSR) initialState.pinia = pinia.state.value
        else pinia.state.value = initialState.pinia || {}

        const i18n = createI18n({
            legacy: false,
            locale: DEFAULT_LOCALE,
            fallbackLocale: DEFAULT_LOCALE,
            messages,
        })
        app.use(i18n)

        router.beforeEach((to) => {
            i18n.global.locale.value = to.meta.locale || DEFAULT_LOCALE
        })

        app.use(createVfm())
    },
)