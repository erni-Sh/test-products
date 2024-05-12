<template>
  <Breadcrumb :home="home" :model="items" />
  <div class="flex">
    <ProductCard v-if="productStore.product?.id" />
    <ProductCardLoader v-if="!productStore.product?.id" />
  </div>
</template>

<script setup lang="ts">

import {ref} from 'vue';
import {useRoute} from 'vue-router';
import ProductCard from '@/components/ProductCard.vue';
import {useProduct} from '@/store/useProduct';
import ProductCardLoader from '@/components/ProductCardLoader.vue';

const home = ref({
  icon: 'pi pi-home'
});

const route = useRoute();

const productStore = useProduct();
productStore.getProduct({id: route.params.id as string || ''})

const items = ref([
  { label: 'Products' },
  { label: 'Product ' + route.params.id },
]);

</script>

<style scoped>

</style>