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
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2e97dd65b2da08753e19493d18e36c44&query=${this.store.stringSearched}`)
      .then(res => {
        store.moviesArray = res.data.results;
      })
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
