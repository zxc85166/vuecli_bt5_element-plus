import { createRouter, createWebHistory } from 'vue-router';
import index from '@/views/index.vue';
const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('@/views/users.vue'),
    children: [
      {
        path: '/users/index',
        name: 'index',
        component: () => import('@/views/users/index.vue'),
      },
      {
        path: '/users/step2',
        name: 'step2',
        component: () => import('@/views/users/step2.vue'),
      },
      {
        path: '/users/step3',
        name: 'step3',
        component: () => import('@/views/users/step3.vue'),
      },
      {
        path: '/users/step4',
        name: 'step4',
        component: () => import('@/views/users/step4.vue'),
      },
      {
        path: '/users/step5',
        name: 'step5',
        component: () => import('@/views/users/step5.vue'),
      },
      {
        path: '/users/step6',
        name: 'step6',
        component: () => import('@/views/users/step6.vue'),
      },
      {
        path: '/users/step7',
        name: 'step7',
        component: () => import('@/views/users/step7.vue'),
      },
    ],
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import('@/views/page2.vue'),
  },
  {
    path: '/page3',
    name: 'page3',
    component: () => import('@/views/page3.vue'),
  },
  {
    path: '/page4',
    name: 'page4',
    component: () => import('@/views/page4.vue'),
  },
  {
    path: '/page5',
    name: 'page5',
    component: () => import('@/views/page5.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// export default createRouter({ history, routes });

export default router;
