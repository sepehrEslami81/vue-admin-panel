import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      meta: {
        title: "احراز هویت",
      },
      component: () => import("@/views/Login/index"),
    },
    {
      path: "/",
      meta: {
        title: "داشبورد",
      },
      component: () => import("@/views/Dashboard/index"),
    },
    {
      path: "/profile",
      meta: {
        title: "پروفایل کاربری",
      },
      component: () => import("@/views/Profile/index"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `website name ${to.meta.title ? " | " + to.meta.title : ""}`;
  // if (to.path === "/login" || localStorage.auth) next();
  // else next("/login");
});

export default router;
