import Vue from 'vue'
import Router from 'vue-router'
import Funds from './views/Funds.vue'
import Planning from './views/Planning.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
