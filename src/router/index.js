import Vue from 'vue'
import Router from 'vue-router'
import loginComponent from '@/page/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: loginComponent
    }
  ]
})
