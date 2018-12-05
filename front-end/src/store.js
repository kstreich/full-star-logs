import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import Router from './router'
import router from './router';

let auth = Axios.create({
  baseURL: "http://localhost:3000/auth",
  withCredentials: true
})

let api = Axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true
})


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    logs: [],
    activeLog: {}
  },
  mutations: {
    SETUSER(state, user) {
      state.user = user
    },
    getAllLogs(state, logs) {
      state.logs = logs
    },
    setActiveLog(state, log) {
      state.activeLog = log
    }
  },
  actions: {
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('SETUSER', res.data)
        })
      dispatch('getAllLogs')
        .catch(err => console.log("Cannot Login"))

    },
    register({ commit, dispatch }, creds) {
      auth.post('register', creds)
        .then(res => {
          commit('SETUSER', res.data)
        })
      dispatch('getAllLogs')
        .catch(err => console.log("Cannot Register"))
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('SETUSER', res.data)
        })
      dispatch('getAllLogs')
        .catch(err => {
          router.push({ name: 'auth' })
        })
    },
    getAllLogs({ commit }) {
      api.get('logs')
        .then(res => {
          console.log(res.data, "test")
          commit('getAllLogs', res.data)
        })

    },
    setActiveLog({ commit, dispatch }, log) {
      commit('setActiveLog', log)
    }
  }
})
