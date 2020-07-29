<template>
    <div class="wrap">
        <h3>Family Movies</h3>
        <ul>
            <li v-for="movie in familyMovies" :key="movie.id">{{ movie.title }}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "FamilyMovieList",
  computed: {
    familyMovies() {
      return this.$store.state.movies.filter(movie => movie.gen === "Family");
    }
  }
};
</script>

<style scoped>
    .wrap{
        width: 400px;
        background: lightseagreen;
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