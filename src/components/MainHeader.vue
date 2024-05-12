<template>
  <Menubar :model="menuItems" class="container">
    <template #item="{ item, props, hasSubmenu, root }">
      <router-link :to="item.to" v-ripple class="flex align-items-center" v-bind="props.action">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
        <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
        <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
        <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
      </router-link>
    </template>
    <template #end>
      <form class="flex align-items-center gap-2" @submit.prevent="onSubmit">
        <InputText placeholder="Search" type="text" class="w-8rem sm:w-auto" v-model="inputValue" />
        <button hidden type="submit" />
      </form>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import {computed, ref, watch} from 'vue';
import {useRoute, useRouter} from 'vue-router';

const menuItems = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    to: '/',
  },
]);

const route = useRoute();
const searchQuery = computed(() => route.query.q);
const inputValue = ref();
watch(searchQuery, newSearchQuery => inputValue.value = newSearchQuery);

const router = useRouter();
const onSubmit = () => router.push(inputValue.value ? `/?q=${inputValue.value}` : '/');
</script>

<style scoped>

</style>