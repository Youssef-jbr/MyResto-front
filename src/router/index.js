/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Login from "../Login"

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [{
        path: "/login",
        name: "Login",
        component: Login,
    },
    ]    
});

export default router;