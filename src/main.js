import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: [
      { id: 1, title: 'Crazy Rich Asians', gen: 'Comedy' },
      { id: 2, title: 'Old School', gen: 'Comedy' },
      { id: 3, title: 'The Heat', gen: 'Comedy' },
      { id: 4, title: 'Coco', gen: 'Family' },
      { id: 5, title: 'Star Wars', gen: 'Family' },
      { id: 6, title: 'Home Alone', gen: 'Family' },
    ]
  },
  getters: {
    // comedyMovies() {
    //   return store.state.movies.filter(movie => movie.gen == 'Comedy')
    // },
    // familyMovies() {
    //   return store.state.movies.filter(movie => movie.gen == 'Family')
    // },
    moviesByGenre: state => gen => {
      return state.movies.filter(movie => movie.gen === gen)
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
