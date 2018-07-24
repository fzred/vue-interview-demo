// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import '../static/css/material.font.css'

Vue.use(Vuetify)

Vue.filter('toKg', function (value) {
  return isNaN(value) ? value : value / 1000
})

/* eslint-disable no-new */
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
