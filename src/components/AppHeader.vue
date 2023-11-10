<script>
import { store } from '../store'
export default {
    data() {
        return {
            store: store,
        }
    },
    methods: {
        callSearch() {
            this.$emit('performSearch')
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="search-bar">
            <input type="text" v-model="store.stringSearched">
            <button @click="callSearch">Search</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .search-bar {
        display: flex;
    }
</style>