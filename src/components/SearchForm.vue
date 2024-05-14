<template>
  <form class="flex align-items-center gap-2" @submit.prevent="onSubmit">
    <InputText placeholder="Search" type="text" class="w-8rem sm:w-auto" v-model="inputValue" />
    <button hidden type="submit" />
  </form>
</template>

<script setup lang="ts">
import {computed, ref, watch} from 'vue';
import {useRoute, useRouter} from 'vue-router';

// set init value from query params
const route = useRoute();
const searchQuery = computed(() => route.query.q);
const inputValue = ref();
watch(searchQuery, newSearchQuery => inputValue.value = newSearchQuery);

const router = useRouter();
const onSubmit = () => router.push(inputValue.value ? `/?q=${inputValue.value}` : '/');
</script>

<style scoped>
</style>