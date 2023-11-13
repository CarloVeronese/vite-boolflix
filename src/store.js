import { reactive } from 'vue';

export const store = reactive(
    {
        stringSearched: '',
        moviesArray: [],
        tvShowsArray: [],
        langArray: ['it','en','de','es','fr'],
        API_KEY: '2e97dd65b2da08753e19493d18e36c44',
        genresArray: [],
        filterGenres: '0'
    }
)