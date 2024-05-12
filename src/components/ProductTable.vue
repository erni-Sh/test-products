<template>
  <h4 v-if="!productsState.products.length">No results</h4>
  <DataTable
    v-if="productsState.products.length"
    :value="productsState.products"
    removableSort
    tableStyle="min-width: 50rem"
    stripedRows
    v-model:selection="selectedProduct"
    selectionMode="single"
  >
    <Column field="title" header="Name" sortable style="width: 40%" />
    <Column field="brand" header="Brand" sortable style="width: 27%" />
    <Column field="category" header="Category" sortable style="width: 18%" />
    <Column field="price" header="Price" sortable style="width: 15%">
      <template #body="slotProps">${{ slotProps.data.price }}</template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable';
import {useProducts} from '../store/useProducts';
import {defineProps, ref, watch} from 'vue';
import {IProduct} from '../types/types';
import {useRouter} from 'vue-router';

const props = defineProps({
  rowsPerPage: { type: Number, required: true },
  paged: { type: Number, required: true },
  q: {type: String, required: false },
})
const { rowsPerPage, paged, q } = {...props};

const selectedProduct = ref();
const router = useRouter();
watch(selectedProduct, (newValue: IProduct) => {
  router.push(`/products/${newValue.id}`)
})

const productsState = useProducts();
await productsState.getProducts({ rowsPerPage, paged, q });

</script>

<style scoped lang="scss">

</style>