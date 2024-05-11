<template>
  <Menubar :model="items">
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
      <div class="flex align-items-center gap-2">
        <InputText placeholder="Search" type="text" class="w-8rem sm:w-auto" v-model="inputValue"/>
      </div>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const inputValue = ref();
const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    to: '/',
  },
  // {
  //   label: 'Features',
  //   icon: 'pi pi-star'
  // },
  // {
  //   label: 'Projects',
  //   icon: 'pi pi-search',
  //   items: [
  //     {
  //       label: 'Core',
  //       icon: 'pi pi-bolt',
  //       shortcut: '⌘+S'
  //     },
  //     {
  //       label: 'Blocks',
  //       icon: 'pi pi-server',
  //       shortcut: '⌘+B'
  //     },
  //     {
  //       label: 'UI Kit',
  //       icon: 'pi pi-pencil',
  //       shortcut: '⌘+U'
  //     },
  //     {
  //       separator: true
  //     },
  //     {
  //       label: 'Templates',
  //       icon: 'pi pi-palette',
  //       items: [
  //         {
  //           label: 'Apollo',
  //           icon: 'pi pi-palette',
  //           badge: 2
  //         },
  //         {
  //           label: 'Ultima',
  //           icon: 'pi pi-palette',
  //           badge: 3
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   label: 'Contact',
  //   icon: 'pi pi-envelope',
  //   badge: 3
  // }
]);

watch(inputValue, async (newValue, oldValue) => {
  console.log(newValue);
})

</script>

<style scoped>

</style>