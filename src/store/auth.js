/* eslint-disable */
import axios from 'axios'
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        token: null,
        user: null
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_USER(state, data) {
            state.user = data
        }
    },
    getters: {
        authenticated(state) {
            if (state.token) {
                return true
            } else {
                return false
            }
        },
        user(state) {
            return state.user
        },
        role(state) {
            console.log(state.user)
            return state.user.role
        }
    },
    actions: {
        async login({ dispatch }, credentials) {
            let response = await axios.post('auth/login', credentials)
            if (response.data.code == 498) {
                return response
            } else {
                return dispatch('attempt', response.data[0].token)

            }

        },
        async register({ dispatch }, credentials) {
            let response = await axios.post('auth/register', credentials)
            if (response.data.code == 498) {
                return response
            } else {
                return dispatch('attempt', response.data[0].token)
            }

        },
        async attempt({ commit, state }, token) {
            if (token) {
                commit('SET_TOKEN', token)
            }
            if (!state.token) {
                return
            }
            try {
                let response = await axios.get('auth/me')
                commit('SET_USER', response.data)
            } catch (e) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        },
        logout({ commit }) {
            return axios.post('auth/logout').then(() => {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            })
        }
    }
}