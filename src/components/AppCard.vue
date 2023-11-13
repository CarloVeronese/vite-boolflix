<script>
import { store } from '../store';
import axios from 'axios';
export default{
    data() {
        return {
            store: store,
        }
    },
    props: {
        element: Object,
        type: String
    },
    computed: {
        // credits() {
        //     axios.get(`https://api.themoviedb.org/3/movie/${this.movie.id}/credits`)
        //     .then(res => {
        //         console.log('credits',res)
        //     })
        // },
        languageFlag(){
            if (this.store.langArray.includes(this.element.original_language)) return this.element.original_language;
            else return 'unknown';
        },
        posterPath() {
            if(this.element.poster_path) return `https://image.tmdb.org/t/p/w342${this.element.poster_path}`
            else return 'unknown.png'
        },
        scoreStars() {
            return Math.ceil(parseInt((this.element.vote_average) / 2))
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
                <li><span class="info-title">Title:</span> 
                    <span v-if="type === 'movie'">{{ element.title }}</span>
                    <span v-else-if="type === 'show'">{{ element.name }}</span>
                </li>
                <li><span class="info-title">Original title: </span>                     
                    <span v-if="type === 'movie'">{{ element.original_title }}</span>
                    <span v-else-if="type === 'show'">{{ element.original_name }}</span></li>
                <li class="language">
                    <span class="info-title">Language:</span>
                    <img :src="`${languageFlag}.png`" alt="" class="language-img">
                    <span v-show="languageFlag === 'unknown'">{{ element.original_language }}</span>
                </li>
                <li class="stars">
                    <span class="info-title">Score: </span>
                    <font-awesome-icon v-for="star in scoreArray" :icon="`${star} fa-star`" class="star"/>
                </li>
                <li><span class="info-title">Overview: </span>{{ element.overview }}</li>
            </ul>
        </div>
        <img :src="posterPath" alt="" class="poster" :class=" posterPath === 'unknown.png' ? 'unknown' : ''">
    </div>
</template>

<style lang="scss" scoped>
    @use '../style/partials/cards.scss' as *;
</style>