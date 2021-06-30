/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Login from "../Login"
import Payement from "../Payement";


Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/payement",
      name: "Payement",
      component: Payement,
    },
  ],
});

export default router;