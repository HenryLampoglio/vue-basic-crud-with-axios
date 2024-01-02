<template>
    <main>
        <h1>Distribuidor</h1>
        <br>
        <SearchComponent
        path="distributors"
        is-distributor/>
        <br>
    </main>
</template>

<script setup>
import SearchComponent from '../../components/SearchComponent.vue';
</script>

<style scoped>
    main{
    min-height: 100vh;
    max-width: 100%;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
</style>