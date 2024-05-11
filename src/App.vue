<template>
  <MainHeader class="menubar mb-5"/>
  <router-view />
</template>

<script setup lang="ts">
import MainHeader from './components/MainHeader.vue';
import {storeState, useStore} from './store/useStore';
import {LocalStorageName} from './helpers/getStoredState';

const store = useStore();
store.$subscribe((mutation, state) => {
  localStorage.setItem(LocalStorageName, JSON.stringify({...state, products: [], isErrorLoading: false, paged: 0} as storeState))
})

</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}

#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  //-webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
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
