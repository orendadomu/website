// import { createRouter, createWebHistory } from "vue-router";
// import { useAuth } from '@/store/auth'

import { LOCALES } from "@/i18n/locales.js";

//pages
const Home = () => import("@/pages/Home.vue");
const BlogList = () => import("@/pages/BlogList.vue");
const BlogPost = () => import("@/pages/BlogPost.vue");
const NotFound = () => import("@/pages/NotFound.vue");

const homeRoutes = Object.entries(LOCALES).map(([locale, { path }]) => ({
  path,
  name: `home-${locale}`,
  component: Home,
  meta: { locale },
}));

export const routes = [
  ...homeRoutes,
  { path: "/blog/", name: "blog", component: BlogList, meta: { locale: "uk" } },
  { path: "/blog/:slug/", name: "blog-post", component: BlogPost, meta: { locale: "uk" } },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];

// const router = createRouter({
//   history: createWebHistory('/'),
//   linkExactActiveClass: 'border-indigo-700',
//   routes,
// });

// export default router;
