import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count_like: 0,
    posts: [],
    post: {},
    profiles: [],
    users: null
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.users = userData
      localStorage.setItem('users', JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `Bearer ${
        userData.token
      }`
    },
    CLEAR_USERS_DATA() {
      localStorage.removeItem('users')
      location.reload()
    },

    INCREMENT_COUNT(state) {
      state.count_like += 1
    },
    SET_POSTS(state, posts) {
      state.posts = posts
    },
    UPDATE_POSTS(state, post) {
      state.post = post
    },
    CREATE_POSTS(state, posts) {
      state.posts.push(posts)
    },
    SET_POST(state, post) {
      state.post = post
    },
    SET_PROFILES(state, profiles) {
      state.profiles = profiles
    }
  },
  actions: {
    register({ commit }, credentials) {
      return axios
        .post('http://localhost:51515/register', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
    },
    login({ commit }, credentials) {
      return axios
        .post('http://localhost:51515/login', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
    },
    logout({ commit }) {
      commit('CLEAR_USERS_DATA')
    },

    createPosts({ commit }, posts) {
      return axios.post('http://localhost:51515/posts', posts).then(() => {
        commit('CREATE_POSTS', posts)
      })
    },
    loadPosts({ commit }) {
      axios
        .get('http://localhost:51515/posts')
        .then(post => {
          const posts = post.data
          commit('SET_POSTS', posts)
        })
        .catch(err => {
          console.log(err)
        })
    },
    loadPostsById({ commit }, id) {
      axios
        .get('http://localhost:51515/posts/' + id)
        .then(post => {
          commit('SET_POST', post.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    loadProfiles({ commit }) {
      axios
        .get('http://localhost:51515/profiles')
        .then(profile => {
          const profiles = profile.data
          commit('SET_PROFILES', profiles)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  getters: {
    posts: state => {
      return state.posts.map(post => {
        post = {
          ...post
        }
        return post
      })
    },
    post: state => {
      return state.post
    },
    profiles: state => {
      return state.profiles.map(profile => {
        profile = {
          ...profile
        }
        return profile
      })
    },
    loggedIn(state) {
      return !!state.users
    }
  }
})
