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
    },
    methods: {
        scrollMovie(dir) {
            // SCROLL RIGHT
            if(dir == 'right'){
                if(this.store.firstMovieIndex >= (this.store.moviesArray.length - this.store.cardsNum)) this.store.firstMovieIndex = 0;
                else this.store.firstMovieIndex += this.store.cardsNum
            } 
            // SCROLL LEFT
            else{
                if(this.store.firstMovieIndex <= (this.store.cardsNum - 1)) this.store.firstMovieIndex = this.store.moviesArray.length - this.store.cardsNum;
                else this.store.firstMovieIndex -= this.store.cardsNum
            }
        },
        scrollShow(dir) {
            // SCROLL RIGHT
            if(dir == 'right'){
                if(this.store.firstShowIndex >= (this.store.tvShowsArray.length - this.store.cardsNum)) this.store.firstShowIndex = 0;
                else this.store.firstShowIndex += this.store.cardsNum
            } 
            // SCROLL LEFT
            else{
                if(this.store.firstShowIndex <= (this.store.cardsNum - 1)) this.store.firstShowIndex = this.store.tvShowsArray.length - this.store.cardsNum;
                else this.store.firstShowIndex -= this.store.cardsNum
            }
        },
        showMovieCard(index) {
            return (index >= this.store.firstMovieIndex && index < this.store.firstMovieIndex + this.store.cardsNum)
        },
        showShowCard(index) {
            return (index >= this.store.firstShowIndex && index < this.store.firstShowIndex + this.store.cardsNum)
        }

    }
}
</script>

<template>
    <main>
<!-- MOVIES -->
        <div class="container" v-show="store.moviesArray.length > 0">
            <h2>MOVIES</h2>
            <div class="row card-container">
                <font-awesome-icon icon="fa-solid fa-chevron-left" class="scroll scroll-left" @click="scrollMovie('left')"/>
                <AppCard :element="movie" :type="'movie'" v-for="(movie, movieIndex) in store.moviesArray" v-show="showMovieCard(movieIndex)"/>
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="scroll scroll-right" @click="scrollMovie('right')"/>
            </div>
        </div>
<!-- TV-SHOWS -->
        <div class="container" v-show="store.tvShowsArray.length > 0">
            <h2>TV SHOWS</h2>
            <div class="row card-container">
                <font-awesome-icon icon="fa-solid fa-chevron-left" class="scroll scroll-left" @click="scrollShow('left')"/>
                <AppCard :element="show" :type="'show'" v-for="(show, showIndex) in store.tvShowsArray" v-show="showShowCard(showIndex)"/>
                <font-awesome-icon icon="fa-solid fa-chevron-right" class="scroll scroll-right" @click="scrollShow('right')"/>
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
        position: relative;
        gap: 20px;
        justify-content: space-between;
        .scroll {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: grey;
            padding: 5px;
            border-radius: 50%;
            z-index: 50;
            aspect-ratio: 1 / 1;
            cursor: pointer;
        }
        .scroll-left {
            left: -30px;
        }
        .scroll-right {
            right: -30px;
        }
    }
}

</style>