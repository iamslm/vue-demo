import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/page/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home,

    }
  ]
})
