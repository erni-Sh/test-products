<template>
  <Toast />
  <div class="col-12 p-2">
    <div class="p-4 border-1 surface-border surface-card border-round flex flex-column">
      <div>
        <div class="flex flex-row justify-content-between align-items-start gap-2 text-left mb-4">
          <div>
            <span class="font-medium text-secondary text-sm"><Skeleton width="61px" height="19px" /></span>
            <div class="text-lg font-medium text-900 mt-1"><Skeleton width="195px" height="22px" /></div>
          </div>
          <div class="surface-100 p-1" style="border-radius: 30px">
            <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
              <span class="text-900 font-medium text-sm">
                <Skeleton width="48px" height="17px" />
              </span>
            </div>
          </div>
        </div>
        <div class="surface-50 flex justify-content-center border-round p-3 relative mb-4">
          <Skeleton width="100%" height="265px" />
        </div>
        <p class="m-0"><Skeleton width="90%" height="2rem" /></p>
        <div class="flex flex-column gap-4 mt-4">
          <span class="text-2xl font-semibold text-900"><Skeleton width="30%" height="2rem" /></span>
          <div class="flex gap-2">
            <Skeleton width="100%" height="38px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, watch} from 'vue';
import {useToast} from 'primevue/usetoast';
import {useProduct} from '@/store/useProduct';
import {useRouter} from 'vue-router';

const toast = useToast();
const router = useRouter();
const productStore = useProduct();

const isErrorLoading = computed(() => productStore.isErrorLoading);
watch(isErrorLoading, isError => {
  if(!isError) return;
  toast.add({ severity: 'error', summary: 'Product not available', detail: 'You will be redirected to the main directory', life: 3000 });
  setTimeout(() => router.push('/'), 3000);
});
</script>

<style scoped>

</style>