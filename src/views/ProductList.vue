<template>
  <div class="card">
    <Breadcrumb :home="home" :model="items" />
    <DataViewLayoutOptions v-model="layout" />
    <ProductGrid v-if='products.length' :products="products" :layout="layout" />
    <ProductGridSkeleton v-else :layout="layout" />
    <Paginator :rows="10" :totalRecords="120"></Paginator>
  </div>
</template>

<script setup lang="ts">
import ProductGrid from '@/components/ProductGrid.vue';
import ProductGridSkeleton from '@/components/ProductGridSkeleton.vue';
import {IProduct, IProductsResponse, LayoutType} from '@/types/ProductList';
import {onMounted, ref} from "vue";
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';

const isLoading = ref(true);
const products = ref([] as IProduct[]);
const layout = ref('grid' as LayoutType);

const home = ref({
  icon: 'pi pi-home'
});

const items = ref([
  { label: 'Products' },
  // { label: 'Computer' },
  // { label: 'Accessories' },
  // { label: 'Keyboard' },
  // { label: 'Wireless' }
]);

onMounted(() => {
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((p :IProductsResponse) => {
      console.log(p);
      isLoading.value = false;
      products.value = p.products;
    })
})

</script>

<style scoped>

</style>