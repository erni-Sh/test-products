<template>
  <DataTable
    :value="store.products"
    removableSort
    tableStyle="min-width: 50rem"
    stripedRows
    v-model:selection="selectedProduct"
    selectionMode="single"
  >
    <Column field="title" header="Name" sortable />
    <Column field="brand" header="Brand" sortable />
    <Column field="category" header="Category" sortable />
    <Column field="price" header="Price" sortable>
      <template #body="slotProps">${{ slotProps.data.price }}</template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable';
import {useStore} from '@/store/useStore';
import {defineProps, ref, watch} from 'vue';
import {IProduct} from '../types/productTypes';
import {useRouter} from 'vue-router';

const props = defineProps({
  rowsPerPage: { type: Number },
  paged: { type: Number },
  q: {type: String },
})
const { rowsPerPage, paged, q } = {...props};

const selectedProduct = ref();
const router = useRouter();
watch(selectedProduct, (newValue: IProduct) => {
  router.push(`/products/${newValue.id}`)
})

const store = useStore();

q?.length ? await store.searchProduct({q}) :
(rowsPerPage && paged) ? await store.getProducts({ rowsPerPage, paged }) :
undefined

</script>

<style scoped lang="scss">

</style>