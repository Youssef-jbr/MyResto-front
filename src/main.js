import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import store from './store'
import router from './router'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from "axios"
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
require("@/store/subscriber");
axios.defaults.baseURL = "http://apimyresto/api/";
store.dispatch("auth/attempt", localStorage.getItem("token"));
Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
    router,
    axios,
    store,
    render: h => h(App),
}).$mount('#app')