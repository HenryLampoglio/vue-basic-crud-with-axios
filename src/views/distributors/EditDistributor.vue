<template>
  <section>
    <h1>Editar Distribuidor</h1>
    <br />
    <br />
    <Form
      is-distributor-form
      place-holder-text="insira o id do distribuidor"
      is-update-form
    />
  </section>
</template>

<script setup>
import Form from "../../components/Form.vue";
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin-top: 40px;
}
</style>
