import { createRouter, createWebHistory } from "vue-router";
// import { useAuth } from '@/store/auth'

//pages
const Home = () => import("@/pages/Home.vue");
// const Login = () => import("@/pages/Login.vue")
// const SignUp = () => import("@/pages/SignUp.vue")
// const ResetPassword = () => import("@/pages/ResetPassword.vue")
// const EmailConfirmed = () => import("@/pages/EmailConfirmed.vue")
// const Expired = () => import("@/pages/Expired.vue")
// const Users = () => import("@/pages/Users.vue");
// const User = () => import("@/pages/User.vue");
// const NFTs = () => import("@/pages/NFTs.vue")
// const Chats = () => import("@/pages/Chats.vue") 
// const Chat = () => import("@/pages/Chat.vue")
// const Profile = () => import("@/pages/Profile.vue")
// const ErrorPage = () => import("@/pages/Error.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    // meta: {
    //   requiresAuth: true
    // }
  },
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "ErrorPage",
  //   component: ErrorPage,
  // }
];

const router = createRouter({
  history: createWebHistory('/'),
  linkExactActiveClass: 'border-indigo-700',
  routes,
});

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('token');
//   // console.log('router token', token)

//   if ((token && to.meta.requiresAuth) || (!token && !to.meta.requiresAuth) || to.name === 'ErrorPage') {
//     next();
//   } else if (token && !to.meta.requiresAuth) {
//     next('/')
//   } else {
//     const authStore = useAuth()
//     if (authStore.me) authStore.logOut()
//     next('/login');
//   }
// });

export default router;
