import { createRouter, createWebHistory } from "vue-router";
import def from "../layouts/def.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: def,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Home.vue"),
        meta: { title: "home" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
