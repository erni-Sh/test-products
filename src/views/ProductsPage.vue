<template>
  <h2 v-if="$route.query.q">Search result for «{{ $route.query.q }}»</h2>
  <h2 v-else>Products list</h2>
  <div v-if="!productsState.isErrorLoading">
    <ProductTable
      :rows-per-page="productsState.rowsPerPage"
      :paged="productsState.paged"
      :q="$route.query.q"
      :key="`${productsState.rowsPerPage}${productsState.paged}${$route.query.q}`"
    />
    <Paginator
      v-if="productsState.products || productsState.isFetching"
      v-model:rows="productsState.rowsPerPage"
      :rowsPerPageOptions="[5, 10, 25, 50, 100]"
      :totalRecords="productsState.total"
      :template="{
        '640px': 'PrevPageLink CurrentPageReport NextPageLink',
        default: 'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown'
      }"
      :currentPageReportTemplate="`${firstItemNumber} to ${lastItemNumber} of {totalRecords}`"
      @page="productsState.paged = $event.page"
      :key="$route.query.q"
      class="mb-7"
    />
  </div>
  <Message severity="error" v-else>Products loading error!</Message>
</template>

<script setup lang="ts">
import {computed, onUnmounted, ref, watch} from 'vue';
import {useRoute} from 'vue-router';
import {useProducts} from '@/store/useProducts';
import ProductTable from '@/components/ProductTable.vue';

const productsState = useProducts();
const firstItemNumber = ref(1);
const lastItemNumber = ref(productsState.rowsPerPage);

// calculate first/last item numbers on current page
watch(productsState, newState => {
  firstItemNumber.value = newState.rowsPerPage * newState.paged + 1;

  const lastCount = newState.rowsPerPage * (newState.paged + 1);
  lastItemNumber.value = lastCount > newState.total ? newState.total : lastCount;
}, { deep: true })


// reset paged on search
const route = useRoute();
const searchQuery = computed(() => route.query.q);
watch(searchQuery, _ => productsState.paged = 0);

onUnmounted(() => productsState.paged = 0);
</script>

<style scoped>
</style>