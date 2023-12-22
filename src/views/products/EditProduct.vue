<template>
    <section>
        <h1>Editar produto</h1>
        <br>
        <br>
        <Form
        is-product-form
        place-holder-text="Insira o id do produto aqui"
        is-update-form/>
    </section>
</template>

<script setup>
import Form from '../../components/Form.vue';

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