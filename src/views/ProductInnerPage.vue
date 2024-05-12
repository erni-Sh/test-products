<template>
  <Breadcrumb :home="home" :model="items" />

  <div class="col-12 p-2">
    <div class="p-4 border-1 surface-border surface-card border-round flex flex-column">
      <div class="pt-4">
        <div class="flex flex-row justify-content-between align-items-start gap-2 text-left">
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
        <div class="surface-50 flex justify-content-center border-round p-3 relative">
          <ImageCarousel :images="product?.images"/>
          <Tag :value="getInventoryStatus(product)" :severity="getSeverity(product)" class="absolute" style="right: 4px; top: 4px"></Tag>
<!--            <div class="relative mx-auto productTrumb__grid__wrapper">-->
<!--              <img class="border-round w-full productTrumb__grid" :src="product?.images?.[0]" :alt="product.name" />-->
<!--            </div>-->
        </div>
        <p class="m-0"> {{ product.description }}</p>
        <div class="flex flex-column gap-4 mt-4">
          <span class="text-2xl font-semibold text-900">${{ product.price }}</span>
          <router-link :to="'/products/' + product.id" class="flex gap-2">
            <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="(getInventoryStatus(product)) === 'OUTOFSTOCK'" class="flex-auto white-space-nowrap"></Button>
            <Button icon="pi pi-heart" outlined></Button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {onMounted, watch, ref} from 'vue';
import {IProduct} from '../types/productTypes';
import {useRoute} from 'vue-router';
import ImageCarousel from '../components/ImageCarousel.vue';

const product = ref({} as IProduct);

const getInventoryStatus = (product: IProduct) => product.stock < 50 ? 'OUTOFSTOCK' : product.stock < 100 ? 'LOWSTOCK' : 'INSTOCK';
const getSeverity = (product: IProduct) => product.stock < 50 ? 'danger' : product.stock < 100 ? 'warning' : 'success';

// TODO refactore
const home = ref({
  icon: 'pi pi-home'
});

const route = useRoute()
const items = ref([
  { label: 'Products' },
  { label: 'Product ' + route.params.id },
  // { label: 'Accessories' },
  // { label: 'Keyboard' },
  // { label: 'Wireless' }
]);

onMounted(() => {
  fetch('https://dummyjson.com/products/' + route.params.id)
    .then(res => res.json())
    .then(p => product.value = p);
})

watch(product, (newValue, oldValue) => {
  console.log(newValue);
});

// export default {
//   name: "ProductInner"
// }
</script>

<style scoped>

</style>