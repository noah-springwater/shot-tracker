import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import PlayerProfile from '../components/PlayerProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/player/:id',
      name: 'player',
      component: PlayerProfile
    }
  ]
})
