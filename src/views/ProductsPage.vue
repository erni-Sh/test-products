<template>
  <Breadcrumb :home="home" :model="BreadCrumbsItems"/>
  <h2 v-if="$route.query.q">Search result for «{{ $route.query.q }}»</h2>
  <div v-if="!store.isErrorLoading">
    <Suspense :key="`${store.rowsPerPage}${store.paged}${$route.query.q}`">
      <ProductTable :rows-per-page="store.rowsPerPage" :paged="store.paged" :q="$route.query.q" />
      <template #fallback>
        <ProductTableLoader :rows-per-page="store.rowsPerPage"/>
      </template>
    </Suspense>
    <Paginator
      v-if="store.products.length"
      v-model:rows="store.rowsPerPage"
      :rowsPerPageOptions="[5, 10, 25, 50, 100]"
      :totalRecords="store.total"
      template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
      :currentPageReportTemplate="`${(store.rowsPerPage * store.paged) + 1} to ${store.rowsPerPage * (store.paged + 1)} of {totalRecords}`"
      @page="store.paged = $event.page"
    />
  </div>
  <Message severity="error" v-else>Products loading error!</Message>
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
  { label: 'Products' },
]);

const store = useStore();

</script>

<style scoped>

</style>