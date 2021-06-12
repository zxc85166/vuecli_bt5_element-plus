import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import page2 from "@/views/page2.vue";
import page3 from "@/views/page3.vue";
import page4 from "@/views/page4.vue";
import page5 from "@/views/page5.vue";
import users from "@/views/users.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/page2",
    name: "page2",
    component: page2,
  },
  {
    path: "/page3",
    name: "page3",
    component: page3,
  },
  {
    path: "/page4",
    name: "page4",
    component: page4,
  },
  {
    path: "/page5",
    name: "page5",
    component: page5,
  },
  {
    path: "/users",
    name: "users",
    component: users,
    // redirect: "/users/index",
    children: [
      {
        path: "/",
        name: "index",
        component: () => import("@/views/users/index"),
      },
      {
        path: "/users/step2",
        name: "step2",
        component: () => import("@/views/users/step2"),
      },
      {
        path: "/users/step3",
        name: "step3",
        component: () => import("@/views/users/step3"),
      },
      {
        path: "/users/step4",
        name: "step4",
        component: () => import("@/views/users/step4"),
      },
      {
        path: "/users/step5",
        name: "step5",
        component: () => import("@/views/users/step5"),
      },
      {
        path: "/users/step6",
        name: "step6",
        component: () => import("@/views/users/step6"),
      },
      {
        path: "/users/step7",
        name: "step7",
        component: () => import("@/views/users/step7"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// export default createRouter({ history, routes });

export default router;
