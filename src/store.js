import { reactive } from 'vue';

export const store = reactive(
    {
        stringSearched: '',
        moviesArray: [],
        langArray: ['it','en','de','es','fr']
    }
)