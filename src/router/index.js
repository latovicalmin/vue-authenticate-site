import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import DocsPage from '@/pages/docs'
import LoginPage from '@/pages/login'
import RegisterPage from '@/pages/register'
import ProfilePage from '@/pages/profile'

import vueAuthInstance from '../services/auth.js'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage,
      meta: { title: 'Vue.Authenticate' }
    },
    {
      path: '/docs',
      name: 'docs',
      component: DocsPage,
      meta: { title: 'Documentation' }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: { auth: false, title: 'Login to existing account' }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
      meta: { auth: false, title: 'Register new account' }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage,
      meta: { auth: true, title: 'My profile' }
    }
  ]
})

router.beforeEach(function (to, from, next) {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }

  if (to.meta && to.meta.auth !== undefined) {
    if (to.meta.auth) {
      if (vueAuthInstance.isAuthenticated()) {
        next()
      } else {
        router.push({ name: 'login' })
      }
    } else {
      if (vueAuthInstance.isAuthenticated()) {
        router.push({ name: 'index' })
      } else {
        next()
      }
    }
  } else {
    next()
  }
})

export default router
