<script>
import { store } from '../store';
export default{
    data() {
        return {
            store: store
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
            if(this.movie.poster_path) return `https://image.tmdb.org/t/p/w154${this.movie.poster_path}`
            else return ''
        },
        scoreStars() {
            return parseInt((this.movie.vote_average) / 2) + 1
        }
    }
}
</script>
<template>
    <div class="card">
        <h2 class="card-title">MOVIE</h2>
        <ul class="card-info">
            <li>Title: {{ movie.title }}</li>
            <li>Original title: {{ movie.original_title }}</li>
            <li class="language">
                <span>Language:</span>  
                <img :src="`${languageFlag}.png`" alt="" class="language-img">
                <span v-show="languageFlag === 'unknown'">{{ movie.original_language }}</span>
            </li>
            <li>vote: {{ movie.vote_average }}</li>
            <li>stars: {{ scoreStars }}</li>
        </ul>
        <img :src="posterPath" alt="">
    </div>
</template>

<style lang="scss" scoped>

</style>