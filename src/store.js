import { reactive } from 'vue';

export const store = reactive(
    {
        stringSearched: '',
        moviesArray: [],
        tvShowsArray: [],
        langArray: ['it','en','de','es','fr'],
        firstMovieIndex: 0,
        firstShowIndex: 0,
        cardsNum: 4
    }
)