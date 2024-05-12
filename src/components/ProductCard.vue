<template>
  <div class="col-12 p-2">
    <div class="p-4 border-1 surface-border surface-card border-round flex flex-column">
      <div>
        <div class="flex flex-row justify-content-between align-items-start gap-2 text-left mb-4">
          <div>
            <span class="font-medium text-secondary text-sm">{{ product.category }}</span>
            <div class="text-lg font-medium text-900 mt-1">{{ product.title }}</div>
          </div>
          <div class="surface-100 p-1" style="border-radius: 30px">
            <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
              <span class="text-900 font-medium text-sm">{{ product.rating }}</span>
              <i class="pi pi-star-fill text-yellow-500"></i>
            </div>
          </div>
        </div>
        <div class="surface-50 flex justify-content-center border-round p-3 relative mb-4">
          <ImageCarousel :images="product?.images" />
          <Tag :value="getInventoryStatus(product)" :severity="getSeverity(product)" class="absolute" style="right: 4px; top: 4px"></Tag>
        </div>
        <p class="m-0"> {{ product.description }}</p>
        <div class="flex flex-column gap-4 mt-4">
          <span class="text-2xl font-semibold text-900">${{ product.price }}</span>
          <div class="flex gap-2">
            <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="(getInventoryStatus(product)) === 'OUTOFSTOCK'" class="flex-auto white-space-nowrap"></Button>
            <Button icon="pi pi-heart" outlined></Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageCarousel from '@/components/ImageCarousel.vue';
import {useProduct} from '@/store/useProduct';
import {computed} from 'vue';
import {IProduct} from '../types/types';

const productStore = useProduct();
const product = computed(() => productStore.product);

const getInventoryStatus = (product: IProduct) => product.stock < 50 ? 'OUTOFSTOCK' : product.stock < 100 ? 'LOWSTOCK' : 'INSTOCK';
const getSeverity = (product: IProduct) => product.stock < 50 ? 'danger' : product.stock < 100 ? 'warning' : 'success';
</script>

<style scoped>

</style>