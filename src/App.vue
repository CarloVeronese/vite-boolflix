<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import {store} from './store'
import AppMain from './components/AppMain.vue';
export default {
  data() {
    return {
      store: store,
    }
  },
  components: {
    AppHeader,
    AppMain
},
  methods: {
    searchTitle() {
      // SEARCH MOVIES
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.store.API_KEY}&query=${this.store.stringSearched}`)
      .then(res => {
        this.store.moviesArray = res.data.results;
        console.log('MOVIES: ',store.moviesArray)
      })
      // SEARCH TV-SHOWS
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${this.store.API_KEY}&&query=${this.store.stringSearched}`)
      .then(res => {
        this.store.tvShowsArray = res.data.results;
        console.log('TV-SHOWS: ',store.tvShowsArray)
      })
    },
    fillGenres() {
      axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.store.API_KEY}`)
      .then(res =>{
        this.store.genresArray = res.data.genres
      })
      axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${this.store.API_KEY}`)
      .then(res =>{
        this.store.genresArray = this.store.genresArray.concat(res.data.genres)
      })
    }
  },
  created() {
    this.fillGenres()
  },
  computed: {
    movies() {
      return this.store.moviesArray
    },
    shows() {
      return this.store.tvShowsArray
    }
  }
}
</script>

<template>
  <AppHeader @performSearch="searchTitle"/>
  <AppMain />
</template>

<style lang="scss">
  @use './style/general.scss';
</style>
