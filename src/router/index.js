/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Index from "@/views/Index"

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [{
        path: "/",
        name: "Index",
        component: Index,
        meta: {
            requiresAuth: true
        },
    }, {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            loggedin: true
        }
    }, ]
});