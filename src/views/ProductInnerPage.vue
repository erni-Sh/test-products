<template>
  <h2>Details</h2>
  <ProductCard v-if="productStore.product" />
  <ProductCardLoader v-if="!productStore.product" />
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router';
import {useProduct} from '@/store/useProduct';
import ProductCard from '@/components/ProductCard.vue';
import ProductCardLoader from '@/components/ProductCardLoader.vue';

const route = useRoute();

const productStore = useProduct();
const id = typeof route.params.id === 'string' ? route.params.id : '';
productStore.getProduct({ id });
</script>

<style scoped>

</style>