<script>
import { store } from '../store';
export default{
    data() {
        return {
            store: store,
            stars: [['far', 'star'], ['fas', 'star']]
        }
    },
    props: {
        show: Object
    },
    computed: {
        languageFlag(){
            if (this.store.langArray.includes(this.show.original_language)) return this.show.original_language;
            else return 'unknown'
        },
        posterPath() {
            if(this.show.poster_path != null) return `https://image.tmdb.org/t/p/w154${this.show.poster_path}`
            else return ''
        },
        scoreStars() {
            return Math.ceil(parseInt((this.show.vote_average) / 2))
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
    }
}
</script>
<template>
    <div class="card">
        <h2 class="card-title">TV-SHOW</h2>
        <ul class="card-info">
            <li>Title: {{ show.name }}</li>
            <li>Original title: {{ show.original_name }}</li>
            <li class="language">
                <span>Language:</span>  
                <img :src="`${languageFlag}.png`" alt="" class="language-img">
                <span v-show="languageFlag === 'unknown'">{{ show.original_language }}</span>
            </li>
            <li class="stars">
                <font-awesome-icon v-for="star in scoreArray" :icon="`${star} fa-star`" />
            </li>
        </ul>
        <img :src="posterPath" alt="">
    </div>
</template>
<style lang="scss" scoped>

</style>