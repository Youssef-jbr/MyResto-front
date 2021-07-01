/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Authentification from "../Authentification"
import Payement from "../Payement";
import Accueil from "../Accueil";
import Carte from "../Carte"
import Commande from "../Commande"
import store from "@/store/index.js";
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
            props: true,

        },
        {
            path: "/commande",
            name: "Commande",
            component: Commande,
            meta: {
                requiresAuth: true
            },
        },
        {
            path: "/administration",
            name: "Administration",
            component: Administration,
        },
    ]
});
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        console.log(store.getters["auth/authenticated"])
        if (store.getters["auth/authenticated"]) {
            next();
        } else {
            next('/auth');
        }
    } else {
        next();
    }
});
export default router;