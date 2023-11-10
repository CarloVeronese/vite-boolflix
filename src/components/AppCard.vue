<script>
export default{
    props: {
        movie: Object,
    }
}
</script>
<template>
    <div class="card">
        <ul>
            <li>Title: {{ movie.title }}</li>
            <li>Original title: {{ movie.original_title }}</li>
            <li>Language: {{ movie.original_language }}</li>
            <li>vote: {{ movie.vote_average }}</li>
        </ul>
    </div>
</template>
<style lang="scss" scoped></style>