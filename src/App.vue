<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import {store} from './store'
export default {
  data() {
    return {
      store: store,
    }
  },
  components: {
    AppHeader
  },
  methods: {
    searchTitle() {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2e97dd65b2da08753e19493d18e36c44&query=${this.store.stringSearched}`)
      .then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>

<template>
  <AppHeader @performSearch="searchTitle"/>
</template>

<style>
</style>
