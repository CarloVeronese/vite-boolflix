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
            <div class="nav-bar">
                <h2 class="nav-bar-logo">BOOLFLIX</h2>
                <div class="search-bar">
                    <input type="text" v-model="store.stringSearched" placeholder="search">
                    <button @click="callSearch">Search</button>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    padding: 30px 0;
    background-color: black;
    .nav-bar {
        display: flex;
        justify-content: space-between;
        .nav-bar-logo {
            color: red;
        }
        .search-bar {
            display: flex;
            * {
                border-radius: 5px;
                padding: 0 5px;
            }
        }
    }
}
    
</style>