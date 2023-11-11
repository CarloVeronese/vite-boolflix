<script>
import { store } from '../store';
export default{
    data() {
        return {
            store: store
        }
    },
    props: {
        show: Object
    },
    computed: {
        languageFlag(){
            if (this.store.langArray.filter((lang) => lang === this.show.original_language).length > 0) return this.show.original_language;
            else return 'unknown'
        },
        posterPath() {
            if(this.show.poster_path != null) return `https://image.tmdb.org/t/p/w154${this.show.poster_path}`
            else return ''
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
            <li>vote: {{ show.vote_average }}</li>
        </ul>
        <img :src="posterPath" alt="">
    </div>
</template>
<style lang="scss" scoped>

</style>