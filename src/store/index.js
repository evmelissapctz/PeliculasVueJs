import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    peliculas: [],
    pelicula: {}
  },
  mutations: {
    setPeliculas (state, data) {
      state.peliculas = data
    },
    setPelicula (state, data) {
      state.pelicula = data
    }
  },
  actions: {
    getPeliculas ({ commit }, busqueda) {
      axios.get(`http://www.omdbapi.com/?apikey=4ef150c8&s=${busqueda}`).then((response) => {
        commit('setPeliculas', response.data.Search)
      }).catch((error) => {
        console.log(error)
      })
    },
    getPelicula ({ commit }, id) {
      axios.get(`http://www.omdbapi.com/?apikey=4ef150c8&i=${id}`).then((response) => {
        commit('setPelicula', response.data)
        console.log(this.state.pelicula)
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  modules: {
  }
})
