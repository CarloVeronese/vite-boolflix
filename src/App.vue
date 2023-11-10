<script>
import axios from 'axios';
export default {
  created() {
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=2e97dd65b2da08753e19493d18e36c44&query=ritorno+al+futuro')
    .then(res => {
      console.log(res);
    })
  },
}
</script>

<template>
</template>

<style scoped>
</style>
