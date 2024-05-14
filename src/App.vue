<template>
  <MainHeader class="menubar mb-5"/>
  <div class="container">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue';
import {useProducts} from '@/store/useProducts';
import {LocalStorageName} from '@/helpers/getStoredState';
import {IProductsState} from '@/types/types';

const productsState = useProducts();
productsState.$subscribe((mutation, state) => {
  const stateToSave: IProductsState = {...state, products: null, isErrorLoading: false, paged: 0 };
  localStorage.setItem(LocalStorageName, JSON.stringify(stateToSave));
})
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  min-width: 320px;
}

.menubar {
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #e2e8f0;
}

.container {
  max-width: 960px;
  padding-left: 24px;
  padding-right: 24px;
  margin: auto;
}
</style>
