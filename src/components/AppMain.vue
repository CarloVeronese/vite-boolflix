<script>
import { store } from '../store';
import AppCard from './AppCard.vue';
export default {
    data() {
        return {
            store: store,
        };
    },
    components: { 
        AppCard
    }
}
</script>

<template>
    <main>
<!-- MOVIES -->
        <div class="container" v-show="store.moviesArray.length > 0">
            <h2 @click="showArray">MOVIES</h2>
            <div class="row card-container">
                <AppCard :element="movie" :type="'movie'" v-for="movie in store.moviesArray" v-show="movie.genre_ids.includes(store.filterGenres) || store.filterGenres === '0'" />
            </div>
        </div>
<!-- TV-SHOWS -->
        <div class="container" v-show="store.tvShowsArray.length > 0">
            <h2>TV SHOWS</h2>
            <div class="row card-container">
                <AppCard :element="show" :type="'show'" v-for="show in store.tvShowsArray" v-show="show.genre_ids.includes(store.filterGenres) || store.filterGenres === '0'"/>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
main {
    height: 100%;
    background-color: #363636;
    color: white;
    h2 {
        font-size: 18px;
    }
    .card-container {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
}

</style>