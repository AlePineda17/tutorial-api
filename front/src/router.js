import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/books/',
      name: 'booklist',
      component: () => import('./views/BookList.vue')
    },
    {
      path: '/books/:bookId/edit',
      name: 'edit',
      component: () => import('./views/EditBook.vue')
    }
  ]
})
