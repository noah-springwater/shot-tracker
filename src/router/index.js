import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import PlayerProfile from '../components/PlayerProfile'
import LogIn from '../components/LogIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: LogIn
    },
    {
      path: '/home',
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
