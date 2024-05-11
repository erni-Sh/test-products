<template>
  <MainHeader class="menubar mb-5"/>
  <router-view />
</template>

<script lang="ts">
import MainHeader from './components/MainHeader.vue';

export default {
  components: {
    MainHeader
  }
}

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
</style>
