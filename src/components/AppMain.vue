<script>
import { store } from '../store';
import AppCard from './AppCard.vue';
export default {
    data() {
        return {
            store: store,
        };
    },
    components: { AppCard }
}
</script>

<template>
<div class="container" v-show="store.moviesArray.length > 0">
    <div class="row">
        <div class="col-4" v-for="movie in store.moviesArray">
            <AppCard :movie="movie" />
        </div>
    </div>
</div>
</template>

<style lang="scss"></style>