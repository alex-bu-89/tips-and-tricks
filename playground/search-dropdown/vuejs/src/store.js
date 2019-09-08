import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allPosts: [],
    selectedPost: null
  },
  mutations: {
    setPosts (state, posts) {
      state.allPosts = posts
    },
    setSelectedPost (state, post) {
      state.selectedPost = post
    }
  },
  actions: {
    fetchPosts ({ commit }) {
      fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response => response.json())
        .then(posts => {
          commit('setPosts', posts)
        })
        .catch((err) => {
          throw err
        })
    }
  }
})
