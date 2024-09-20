import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/MainView.vue'),
      children: [
        {
          path: '/posts',
          name: 'posts',
          component: () => import('../modules/posts/view/PostsView.vue')
        }
      ]
    },

  ]
})

export default router
