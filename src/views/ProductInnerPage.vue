<template>
  <h2>Details</h2>
  <ProductCard v-if="productStore.product?.id" />
  <ProductCardLoader v-if="!productStore.product?.id" />
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router';
import {useProduct} from '@/store/useProduct';
import ProductCard from '@/components/ProductCard.vue';
import ProductCardLoader from '@/components/ProductCardLoader.vue';

const route = useRoute();

const productStore = useProduct();
productStore.getProduct({id: route.params.id as string || ''})

</script>

<style scoped>

</style>