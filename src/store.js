import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    post: {},
    profiles: []
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    },
    SET_POST(state, post) {
      state.post = post
    },
    SET_PROFILES(state, profiles) {
      state.profiles = profiles
    }
  },
  actions: {
    loadPosts({ commit }) {
      axios
        .get('http://localhost:3000/posts')
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
        .get('http://localhost:3000/posts/' + id)
        .then(post => {
          commit('SET_POST', post.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    loadProfiles({ commit }) {
      axios
        .get('http://localhost:3000/profiles')
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
    }
  }
})
