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
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2e97dd65b2da08753e19493d18e36c44&query=${this.store.stringSearched}`)
      .then(res => {
        this.store.moviesArray = res.data.results;
        console.log(store.moviesArray)
      })
      // SEARCH TV-SHOWS
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=2e97dd65b2da08753e19493d18e36c44&&query=${this.store.stringSearched}`)
      .then(res => {
        this.store.tvShowsArray = res.data.results;
        console.log(store.tvShowsArray)
      })
    }
  },
}
</script>

<template>
  <AppHeader @performSearch="searchTitle"/>
  <AppMain />
</template>

<style lang="scss">
  @use './style/general.scss';
</style>
