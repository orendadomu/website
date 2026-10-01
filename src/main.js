import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { createVfm } from 'vue-final-modal'
import App from './App.vue'
// import { routes } from './router/routes' // экспортируйте именно МАССИВ routes, не createRouter()
// import messages from './i18n'
import { messages } from "./i18n/messages.js"
import "@/assets/scss/index.scss";

const Home = () => import("./pages/Home.vue");

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        // meta: {
        //   requiresAuth: true
        // }
    },
]

export const createApp = ViteSSG(
    App,
    { routes, base: import.meta.env.BASE_URL },
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



////////
// import "@/assets/scss/index.scss";
// import router from "@/router/index.js";

// import { createVfm } from 'vue-final-modal'

// import { createI18n } from "vue-i18n";
// import { messages } from "@/i18n/messages.js"

// const i18n = createI18n({
//     locale: "ua",
//     fallbackLocale: "en",
//     messages
// });
// const vfm = createVfm()

// const pinia = createPinia();
// const app = createApp(App);

// app.use(pinia);
// app.use(router);
// app.use(vfm)
// app.use(i18n)
// app.mount("#root");