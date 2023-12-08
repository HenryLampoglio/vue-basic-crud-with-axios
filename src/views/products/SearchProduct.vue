<template>
    <main>
        <h1>Produto</h1>
        <br>
        <!-- você conseguiu encontrou uma solução bem mais inteligente -->
        <SearchComponent
        path="products"
        is-product
        />
        <br>
    </main>
</template>

<script setup>
import SearchComponent from '../../components/SearchComponent.vue';
</script>

<style scoped>
    main{
    min-height: calc(100vh - 80px);
    width: 100%;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
</style>