<script>
import { store } from '../store';
import axios from 'axios';
export default{
    data() {
        return {
            store: store,
            castArray: []
        }
    },
    props: {
        element: Object,
        type: String
    },
    methods: {
        credits() {
            axios.get(`https://api.themoviedb.org/3/movie/${this.element.id}/credits?api_key=${this.store.API_KEY}`)
            .then(res => {
                this.castArray = res.data.cast.splice(0,5);
            })
        },
        getGenreFromId(genreId) {
            for(let i = 0; i < this.store.genresArray.length; i++) {
                if(this.store.genresArray[i].id === genreId) return this.store.genresArray[i].name
            }
        }
    },
    created() {
        this.credits()
    },
    computed: {
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
    <div class="card" @click="credits">
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
                <li>
                    <ul class="genres cast-list">
                        <li>Genre: </li>
                        <li v-for="(genreId, genreIndex) in element.genre_ids">{{ getGenreFromId(genreId) }}<span v-show="genreIndex < (element.genre_ids.length - 1)">, </span></li>
                    </ul>
                </li>
                <li class="cast">
                    <ul class="cast-list">
                        <li class="info-title">Cast:</li>
                        <li v-for="(actor, index) in castArray">{{ actor.name }}<span v-show="index < (castArray.length - 1)">, </span></li>
                    </ul>
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