<template>
  <DataTable :value="items" showGridlines :sortField="field1" :sortOrder="1" removableSort size="small">
    <Column field="id" header="Código" style="text-align: center"></Column>
    <Column :field="field1" :header="header1" sortable style="text-align: center"></Column>
    <Column :field="field2" :header="header2" style="text-align: center"></Column>
  </DataTable>
</template>

<script setup>
import DataTable from "primevue/datatable";
import Column from "primevue/column";

defineProps({
  header1: String,
  header2: String,
  field1: String,
  field2: String,
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style>
.p-datatable {
  margin-top: 50px;
  width: 95%;
}

.p-column-header-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
