/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Authentification from "../Authentification"
import Payement from "../Payement";
import Accueil from "../Accueil";
import Carte from "../Carte"
import Commande from "../Commande"
import Administration from "../Administration"

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
        {
            path: "/payement",
            name: "Payement",
            component: Payement,

        },
        {
            path: "/commande",
            name: "Commande",
            component: Commande,
        },
        {
            path: "/administration",
            name: "Administration",
            component: Administration,
        }
    ]
});

export default router;