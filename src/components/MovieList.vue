<template>
    <div class="wrap">
        <h3>{{title}}</h3>
        <ul>
            <li v-for="movie in Movies" :key="movie.id">{{ movie.title }}</li>
        </ul>
    </div>
</template>

<script>
export default {
   name: 'MovieList',
  props: {
    title: String,
    gen: String
  },
  computed: {
    Movies() {
    //   if (this.gen == 'Comedy') {
    //     return this.$store.getters.comedyMovies
    //   } else  {
    //     return this.$store.getters.familyMovies
    //   }
    return this.$store.getters.moviesByGenre(this.gen);
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