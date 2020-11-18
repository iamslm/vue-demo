import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/page/home.vue'
import headTop from '../components/page/header/headTop.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home,
      children: [
        {
          path: '',
          redirect: '/header'
        },
        {
          path: '/header',
          component: headTop
        },
      ]

    }
  ]
})
