/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
<<<<<<< HEAD
import Index from "@/views/Index"
=======
import Login from "../Login"
>>>>>>> 32723f03f73f950b80157bf5328fb3fb9a0471a1

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [{
<<<<<<< HEAD
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
=======
        path: "/login",
        name: "Login",
        component: Login,
    },
    ]    
});

export default router;
>>>>>>> 32723f03f73f950b80157bf5328fb3fb9a0471a1
