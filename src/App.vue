<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <MovieList title="Comedy Movies" gen="Comedy" />
    <MovieList title="Family Movies" gen="Family" />
  </div>
</template>

<script>
import MovieList from './components/MovieList.vue' 

export default {
  name: 'App',
  components: {
    MovieList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
