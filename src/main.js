import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { createVfm } from 'vue-final-modal'
import App from './App.vue'
import { routes } from './router/routes' // экспортируйте именно МАССИВ routes, не createRouter()
// import messages from './i18n'
import { messages } from "./i18n/messages.js"
import "@/assets/scss/index.scss";

const Home = () => import("./pages/Home.vue");

// const routes = [
//     {
//         path: "/",
//         name: "home",
//         component: Home,
//         // meta: {
//         //   requiresAuth: true
//         // }
//     },
// ]

export const createApp = ViteSSG(
    App,
    { routes, base: import.meta.env.BASE_URL, scrollBehavior: (to, from, savedPosition) => savedPosition || { top: 0 }, },
    ({ app, router, initialState, isClient }) => {
        const pinia = createPinia()
        app.use(pinia)
        if (import.meta.env.SSR) initialState.pinia = pinia.state.value
        else pinia.state.value = initialState.pinia || {}

        app.use(createI18n({ legacy: false, locale: 'uk', messages }))
        app.use(createVfm())
        // остальные плагины — сюда же
    },
)