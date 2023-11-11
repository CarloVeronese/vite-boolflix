<script>
import { store } from '../store';
export default{
    data() {
        return {
            store: store,
        }
    },
    props: {
        movie: Object
    },
    computed: {
        languageFlag(){
            if (this.store.langArray.includes(this.movie.original_language)) return this.movie.original_language;
            else return 'unknown';
        },
        posterPath() {
            if(this.movie.poster_path) return `https://image.tmdb.org/t/p/w342${this.movie.poster_path}`
            else return 'unknown.png'
        },
        scoreStars() {
            return Math.ceil(parseInt((this.movie.vote_average) / 2))
        },
        scoreArray() {
            const starsArray = []
            for(let i = 0; i < 5; i++) {
                if((i + 1) < this.scoreStars) {
                    starsArray.push('fa-solid')
                }
                else {
                    starsArray.push('fa-regular')
                }
            }
            return starsArray;
        }
    },
}
</script>
<template>
    <div class="card">
        <div class="card-content">
            <ul class="card-info">
                <li><span class="info-title">Title:</span> {{ movie.title }}</li>
                <li><span class="info-title">Original title: </span> {{ movie.original_title }}</li>
                <li class="language">
                    <span class="info-title">Language:</span>  
                    <img :src="`${languageFlag}.png`" alt="" class="language-img">
                    <span v-show="languageFlag === 'unknown'">{{ movie.original_language }}</span>
                </li>
                <li class="stars">
                    <span class="info-title">Score: </span>
                    <font-awesome-icon v-for="star in scoreArray" :icon="`${star} fa-star`" class="star"/>
                </li>
                <li><span class="info-title">Overview: </span>{{ movie.overview }}</li>
            </ul>
        </div>
        <img :src="posterPath" alt="" class="poster" :class=" posterPath === 'unknown.png' ? 'unknown' : ''">
    </div>
</template>

<style lang="scss" scoped>
    @use '../style/partials/cards.scss' as *;
</style>