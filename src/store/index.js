import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    SET_PRODUCTS (state, data) {
      state.products = data
    },
    SET_CART (state, data) {
      state.cart.push(data)
    },
    DELETE_CART (state, article) {
      state.cart = state.cart.filter(item => item.article !== article)
    }
  },
  actions: {
    GET_PRODUCTS ({ commit }) {
      return axios.get('http://localhost:3000/products')
        .then(res => {
          commit('SET_PRODUCTS', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
