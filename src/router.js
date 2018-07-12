import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Funds from './views/Funds.vue'
import Planning from './views/Planning.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/funds-flow',
      name: 'funds',
      component: Funds
    },
    {
      path: '/planning',
      name: 'planning',
      component: Planning
    }
  ]
})
