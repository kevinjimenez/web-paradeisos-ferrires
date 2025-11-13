import type { RouteRecordRaw } from 'vue-router';
import FerriesLayout from '../layouts/FerriesLayout.vue';

export const ferriesRoutes: RouteRecordRaw = {
  // path: '/ferry',
  path: '/',
  name: 'ferry',
  component: FerriesLayout,
  children: [
    {
      // path: 'search',
      path: '',
      name: 'ferry-search',
      component: () => import('@/modules/ferries/views/FerrySearchView.vue'),
      meta: {
        title: 'Buscar del Ferry',
        requiresAuth: false,
      },
    },
  ],
};
