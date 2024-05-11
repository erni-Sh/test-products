<template>
  <DataTable :value="new Array(rowsPerPage).fill({})" tableStyle="min-width: 50rem" stripedRows>
    <Column field="title" header="Name">
      <template #body>
        <Skeleton width="90%" height="19.5px" />
      </template>
    </Column>
    <Column field="brand" header="Brand">
      <template #body>
        <Skeleton width="90%" height="19.5px" />
      </template>
    </Column>
    <Column field="category" header="Category">
      <template #body>
        <Skeleton width="90%" height="19.5px" />
      </template>
    </Column>
    <Column header="Price">
      <template #body>
        <Skeleton width="90%" height="19.5px" />
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable';
import {defineProps} from 'vue/dist/vue';

const props = defineProps({
  rowsPerPage: { type: Number, required: true },
})

</script>

<style scoped>

</style>