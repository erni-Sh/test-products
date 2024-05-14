<template>
  <h4 v-if="!productsState.isFetching && !productsState.products">No results</h4>
  <DataTable
    v-else
    :value="productsState.products || new Array(rowsPerPage).fill({})"
    stripedRows
    @row-click="handlerRowClick($event.data.id)"
    tableStyle="min-width: 50rem"
  >
    <Column
      v-for="col of columns"
      :key="col.field"
      :header="col.header"
      :style="`width: ${col.width}`"
    >
      <template #body="slotProps">
        <div v-if="slotProps.data[col.field]" style="cursor: pointer">
          {{ col.prefix }}{{ slotProps.data[col.field] }}
        </div>
        <Skeleton v-else width="90%" height="19.5px" />
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';
import {useRouter} from 'vue-router';
import DataTable from 'primevue/datatable';
import {useProducts} from '@/store/useProducts';

const props = defineProps({
  rowsPerPage: { type: Number, required: true },
  paged: { type: Number, required: true },
  q: {type: String, required: false },
})
const { rowsPerPage, paged, q } = {...props};

const columns = [
  { field: 'title', header: 'Name', width: '40%', prefix: '' },
  { field: 'brand', header: 'Brand', width: '27%', prefix: '' },
  { field: 'category', header: 'Category', width: '18%', prefix: '' },
  { field: 'price', header: 'Price', width: '15%', prefix: '$' },
];

const router = useRouter();
const handlerRowClick = (id: number) => router.push(`/products/${id}`);

const productsState = useProducts();
productsState.getProducts({ rowsPerPage, paged, q });
</script>

<style scoped>
</style>