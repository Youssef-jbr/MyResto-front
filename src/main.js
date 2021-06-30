import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from "./store/index.js";
import axios from "axios"
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.use(VueRouter)
require("@/store/subscriber");
axios.defaults.baseURL = "http://apimyresto/api";
store.dispatch("auth/attempt", localStorage.getItem("token"));

new Vue({
  router,
   store,
   axios,
  render: h => h(App),
}).$mount('#app')
