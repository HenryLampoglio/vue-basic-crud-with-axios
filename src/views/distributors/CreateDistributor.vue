<template>
  <section>
    <h1>Crie o distribuidor</h1>
    <br />
    <br />
    <Form isDistributorForm />
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
