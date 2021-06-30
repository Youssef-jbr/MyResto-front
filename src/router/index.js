/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Accueil from "../Accueil"
import Carte from "../Carte";
import Authentification from "../Authentification"

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [{
            path: "/auth",
            name: "Auth",
            component: Authentification,
        }, {
            path: "/accueil",
            name: "Accueil",
            component: Accueil,
        },
        {
            path: "/carte",
            name: "Carte",
            component: Carte,
        },
    ]
});

export default router;