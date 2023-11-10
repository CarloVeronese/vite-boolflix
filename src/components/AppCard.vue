<script>
import { createDOMCompilerError } from '@vue/compiler-dom';

export default{
    props: {
        movie: Object,
    },
    computed: {
        languageFlag(){
            if (this.movie.original_language === 'it' ) return 'italy.png';
            else if (this.movie.original_language === 'en' ) return 'uk.png';
            else if (this.movie.original_language === 'de' ) return 'germany.png';
            else if (this.movie.original_language === 'es' ) return 'spain.png';
            else if (this.movie.original_language === 'fr' ) return 'france.webp';
            else false
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
                <img :src="languageFlag" alt="" class="language-img" v-show="languageFlag">
                <span v-show="!languageFlag">{{ movie.original_language }}</span>
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