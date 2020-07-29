<template>
    <div class="wrap">
        <h3>Comedy Movies</h3>
        <ul>
            <li v-for="movie in comedyMovies" :key="movie.id">{{ movie.title }}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "ComedyMovieList",
  computed: {
    comedyMovies() {
      return this.$store.state.movies.filter(movie => movie.gen === "Comedy");
    }
  }
};
</script>

<style scoped>
    .wrap{
        width: 400px;
        background: coral;
        padding: 30px;
        margin: auto;
        margin-top: 100px;
        border-radius: 4px;
        font-family: 'calibri';
        font-size: 25px;
        color: white;
        box-shadow: 7px 13px 37px #000;
    }
</style>