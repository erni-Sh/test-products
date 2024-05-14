<template>
  <Menubar :model="menuItems" class="container">
    <template #item="{ item, props }">
      <router-link :to="item.to" v-ripple class="flex align-items-center" v-bind="props.action">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
      </router-link>
    </template>
    <template #end>
      <SearchForm />
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import SearchForm from '@/components/SearchForm.vue';

const menuItems = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    to: '/',
  },
]);
</script>

<style scoped>
</style>