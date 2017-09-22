import 'bootstrap/css/bootstrap.min.css'
import "font-awesome/css/font-awesome.css";
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/js/bootstrap.min.js'
import $ from 'jquery'

Vue.config.productionTip = false

window.VUE = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
