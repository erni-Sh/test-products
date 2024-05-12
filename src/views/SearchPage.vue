<template>
  <Breadcrumb :home="home" :model="BreadCrumbsItems" />
  <h2>Search result for «{{ $route.params.q }}»</h2>
  <Suspense v-if="!store.isErrorLoading" :key="`${store.rowsPerPage}${store.paged}${$route.params.q}`">
    <ProductTable :q="$route.params.q" />
    <template #fallback>
      <ProductTableLoader :rows-per-page="store.rowsPerPage"/>
    </template>
  </Suspense>
  <Message severity="error" v-else>Products loading error!</Message>
  <Paginator
      v-model:rows="store.rowsPerPage"
      :rowsPerPageOptions="[5, 10, 25, 50, 100]"
      :totalRecords="store.total"
      template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
      :currentPageReportTemplate="`${(store.rowsPerPage * store.paged) + 1} to ${store.rowsPerPage * (store.paged + 1)} of {totalRecords}`"
      @page="store.paged = $event.page"
  />
</template>

<script setup lang="ts">
import {ref} from 'vue';
import ProductTable from '@/components/ProductTable.vue';
import ProductTableLoader from '@/components/ProductTableLoader.vue';
import {useStore} from '../store/useStore';

const home = ref({
  icon: 'pi pi-home'
});

const BreadCrumbsItems = ref([
  { label: 'Search' },
]);

const store = useStore();
</script>

<style scoped>

</style>