import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home"),
  },
  {
    path: "/page2",
    name: "page2",
    component: () => import("@/views/page2"),
  },
  {
    path: "/page3",
    name: "page3",
    component: () => import("@/views/page3"),
  },
  {
    path: "/page4",
    name: "page4",
    component: () => import("@/views/page4"),
  },
  {
    path: "/page5",
    name: "page5",
    component: () => import("@/views/page5"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("@/views/users"),
    redirect: "/users/index",
    children: [
      {
        path: "/users/index",
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
