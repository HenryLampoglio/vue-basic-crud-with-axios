<template>
    <section>
        <h1>Editar produto</h1>
        <br><br>
        <UpdateForm
        is-product-form
        path="products"
        place-holder-text="Insira o id do produto aqui"/>
    </section>
</template>

<script setup>
import UpdateForm from '../../components/forms/UpdateForm.vue';
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