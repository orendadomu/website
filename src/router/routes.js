// import { createRouter, createWebHistory } from "vue-router";
// import { useAuth } from '@/store/auth'

//pages
const Home = () => import("@/pages/Home.vue");
const BlogList = () => import("@/pages/BlogList.vue");
const BlogPost = () => import("@/pages/BlogPost.vue");
const NotFound = () => import("@/pages/NotFound.vue");

export const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/blog/", name: "blog", component: BlogList },
  { path: "/blog/:slug/", name: "blog-post", component: BlogPost },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];

// const router = createRouter({
//   history: createWebHistory('/'),
//   linkExactActiveClass: 'border-indigo-700',
//   routes,
// });

// export default router;
