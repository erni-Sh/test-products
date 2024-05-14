<template>
  <Carousel :value="images" :numVisible="3" :numScroll="images?.length || 3" :responsiveOptions="responsiveOptions">
    <template #item="slotProps">
      <div class="surface-border border-round m-2 p-3 flex align-items-center" style="height: 300px">
        <img :src="slotProps.data" :alt="slotProps.data.name" class="w-full border-round" style="height: 300px; object-fit: contain"/>
      </div>
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import {ref, defineProps, PropType} from 'vue';
import {IImagesType} from '@/types/types';

const props = defineProps({
  images: { type: Array as PropType<IImagesType>, required: true },
})

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);
</script>
