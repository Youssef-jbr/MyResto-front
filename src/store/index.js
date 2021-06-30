/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import auth from "../store/auth"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {

    },
    modules: {
        auth,
    },
})

export default store