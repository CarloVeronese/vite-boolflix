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
.card {
    flex-basis: 200px;
    border: 1px solid black;
    border-radius: 20px;
    display: flex;
    .card-info {
        padding: 20px 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 16px;
        .language {
            display: flex;
            align-items: center;
            gap: 10px;
            .language-img {
                width: 15px;
            }
        }
    }
}

</style>