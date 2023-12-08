<template>
    <section>
        <h1>Crie o produto</h1>
        <br><br>
        <CreateForm 
        path="products"
        isProductForm/>
    </section>
</template>

<script setup>
import CreateForm from '../../components/forms/CreateForm.vue';


</script>

<style scoped>
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    h1{
        margin-top: 40px;
    }
</style>