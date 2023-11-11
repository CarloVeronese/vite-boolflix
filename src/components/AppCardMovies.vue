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
            if (this.store.langArray.filter((lang) => lang === this.movie.original_language).length > 0) return this.movie.original_language;
            else return 'unknown'
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
        </ul>
    </div>
</template>

<style lang="scss" scoped>

</style>