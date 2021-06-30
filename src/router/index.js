/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Login from "../Login";
import Carte from "../Carte";

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [{
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/carte",
        name: "Carte",
        component: Carte,
    },
    ]    
});

export default router;
