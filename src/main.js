// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuefire from 'vuefire'
import firebase from './service/firebase'

Vue.use(Vuefire)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: {
    players: firebase.database.ref('players')
  },
  router,
  template: '<App/>',
  components: { App }
})
