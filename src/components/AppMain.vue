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
    <div class="row card-container">
        <AppCard :movie="movie" v-for="movie in store.moviesArray" />
    </div>
</div>
</template>

<style lang="scss">
.card-container {
    gap: 20px;
    justify-content: space-between;
}
</style>