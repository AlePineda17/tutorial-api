import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/books/',
      name: 'BookList',
      component: () => import('./views/BookList.vue')
    },
    {
      path: '/books/:bookId/edit',
      name: 'EditBook',
      component: () => import('./views/EditBook.vue')
    },
    {
      path: '/books/:bookId/delete',
      name: 'DeleteBook',
      component: () => import('./views/DeleteBook.vue')
    },
    {
      path: '/books/new',
      name: 'NewBook',
      component: () => import('./views/NewBook.vue')
    }
  ]
})
