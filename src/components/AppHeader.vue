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
    <header>
        <div class="container">
            <div class="search-bar">
                <input type="text" v-model="store.stringSearched">
                <button @click="callSearch">Search</button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    padding: 30px 0;
    .search-bar {
        display: flex;
    }
}
    
</style>