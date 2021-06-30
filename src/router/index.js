/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Accueil from "../Accueil"

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [{
        path: "/accueil",
        name: "Accueil",
        component: Accueil,
    },
    ]    
});

export default router;
