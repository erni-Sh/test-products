<template>
  <Toast />
  <div class="col-12 p-2">
    <div class="p-4 border-1 surface-border surface-card border-round flex flex-column">
      <div>
        <div class="flex flex-row justify-content-between align-items-start gap-2 text-left mb-4">
          <div>
            <span class="font-medium text-secondary text-sm">
              <template v-if="product?.category">{{ product.category }}</template>
              <Skeleton v-else width="61px" height="19px" />
            </span>
            <div class="text-lg font-medium text-900 mt-1">
              <template v-if="product?.title">{{ product.title }}</template>
              <Skeleton v-else width="195px" height="22px" />
            </div>
          </div>
          <div class="surface-100 p-1" style="border-radius: 30px">
            <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
              <span class="text-900 font-medium text-sm">
                <template v-if="product?.rating">
                  {{ product.rating }}
                  <i class="pi pi-star-fill text-yellow-500"></i>
                </template>
                <Skeleton v-else width="48px" height="17px" />
              </span>
            </div>
          </div>
        </div>
        <div class="surface-50 flex justify-content-center border-round p-3 relative mb-4">
          <template v-if="product?.images">
            <ImageCarousel :images="product.images" />
            <Tag :value="getInventoryStatus(product)" :severity="getSeverity(product)" class="absolute" style="right: 4px; top: 4px"></Tag>
          </template>
          <Skeleton v-else width="100%" height="364px" />
        </div>
        <p class="m-0">
          <template v-if="product?.description">{{ product.description }}</template>
          <Skeleton v-else width="90%" height="2rem" />
        </p>
        <div class="flex flex-column gap-4 mt-4">
          <span class="text-2xl font-semibold text-900">
            <template v-if="product?.price">${{ product.price }}</template>
            <Skeleton v-else width="30%" height="2rem" />
          </span>
          <div class="flex gap-2">
            <template v-if="product">
              <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="(getInventoryStatus(product)) === 'OUTOFSTOCK'" class="flex-auto white-space-nowrap"></Button>
              <Button icon="pi pi-heart" outlined></Button>
            </template>
            <Skeleton v-else width="100%" height="38px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, watch} from 'vue';
import {useRouter} from 'vue-router';
import {useToast} from 'primevue/usetoast';
import ImageCarousel from '@/components/ImageCarousel.vue';
import {useProduct} from '@/store/useProduct';
import {IProduct} from '@/types/types';

const toast = useToast();
const router = useRouter();
const productStore = useProduct();
const product = computed(() => productStore.product);

const getInventoryStatus = (product: IProduct) => product.stock < 50 ? 'OUTOFSTOCK' : product.stock < 100 ? 'LOWSTOCK' : 'INSTOCK';
const getSeverity = (product: IProduct) => product.stock < 50 ? 'danger' : product.stock < 100 ? 'warning' : 'success';

const isErrorLoading = computed(() => productStore.isErrorLoading);
watch(isErrorLoading, isError => {
  if(!isError) return;
  toast.add({ severity: 'error', summary: 'Product not available', detail: 'You will be redirected to the main directory', life: 3000 });
  setTimeout(() => router.push('/'), 3000);
});
</script>

<style scoped>

</style>