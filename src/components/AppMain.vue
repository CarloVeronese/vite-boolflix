<script>
import { store } from '../store';
import AppCardMovies from './AppCardMovies.vue';
import AppCardShows from './AppCardShows.vue';
export default {
    data() {
        return {
            store: store,
        };
    },
    components: { 
        AppCardMovies,
        AppCardShows
    }
}
</script>

<template>
<!-- MOVIES -->
<div class="container" v-show="store.moviesArray.length > 0">
    <div class="row card-container">
        <AppCardMovies :movie="movie" v-for="movie in store.moviesArray" />
    </div>
</div>
<!-- TV-SHOWS -->
<div class="container" v-show="store.tvShowsArray.length > 0">
    <div class="row card-container">
        <AppCardShows :show="show" v-for="show in store.tvShowsArray" />
    </div>
</div>
</template>

<style lang="scss">
.card-container {
    gap: 20px;
    justify-content: space-between;
}
</style>