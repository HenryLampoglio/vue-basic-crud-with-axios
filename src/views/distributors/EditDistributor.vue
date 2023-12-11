<template>
    <section>
        <h1>Editar Distribuidor</h1>
        <br>
        <br>
        <UpdateForm
        path="distributors"
        is-distributor-form
        place-holder-text="insira o id do distribuidor"/>
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