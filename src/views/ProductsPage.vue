<template>
  <h2 v-if="$route.query.q">Search result for «{{ $route.query.q }}»</h2>
  <h2 v-else>Products list</h2>
  <div v-if="!productsState.isErrorLoading">
    <Suspense :key="`${productsState.rowsPerPage}${productsState.paged}${$route.query.q}`">
      <ProductTable :rows-per-page="productsState.rowsPerPage" :paged="productsState.paged" :q="$route.query.q" />
      <template #fallback>
        <ProductTableLoader :rows-per-page="productsState.rowsPerPage"/>
      </template>
    </Suspense>
    <Paginator
      v-if="productsState.products.length"
      v-model:rows="productsState.rowsPerPage"
      :rowsPerPageOptions="[5, 10, 25, 50, 100]"
      :totalRecords="productsState.total"
      :template="{
        '640px': 'PrevPageLink CurrentPageReport NextPageLink',
        default: 'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown'
      }"
      :currentPageReportTemplate="`${firstItemNumber} to ${lastItemNumber} of {totalRecords}`"
      @page="productsState.paged = $event.page"
    />
  </div>
  <Message severity="error" v-else>Products loading error!</Message>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';
import {useProducts} from '@/store/useProducts';
import ProductTable from '@/components/ProductTable.vue';
import ProductTableLoader from '@/components/ProductTableLoader.vue';

const productsState = useProducts();
const firstItemNumber = ref(1);
const lastItemNumber = ref(1);

watch(productsState, newState => {
  firstItemNumber.value = newState.rowsPerPage * newState.paged + 1;

  const lastCount = newState.rowsPerPage * (newState.paged + 1);
  lastItemNumber.value = lastCount > newState.total ? newState.total : lastCount;
}, {deep: true})

</script>

<style scoped>

</style>