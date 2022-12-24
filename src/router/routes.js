
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: 'login',
        component: () => import('src/pages/LoginPage.vue')
      },
      {
        path: 'two',
        component: () => import('pages/TwoPage.vue')
      },
      {
        path: 'three',
        component: () => import('pages/ThreePage.vue')
      },
      {
        path: 'users',
        component: () => import('pages/UsersPage.vue')
      },
      {
        path: 'inventory',
        component: () => import('pages/InventoryPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
