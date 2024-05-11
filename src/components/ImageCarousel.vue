<template>
  <Carousel :value="images" :numVisible="3" :numScroll="images?.length || 3" :responsiveOptions="responsiveOptions">
    <template #item="slotProps">
      <div class="surface-border border-round m-2 p-3 flex align-items-center" style="height: 200px">
        <div class="mb-3">
          <div class="relative mx-auto">
            <img :src="slotProps.data" :alt="slotProps.data.name" class="w-full border-round" />
          </div>
        </div>
      </div>
    </template>
  </Carousel>
<!--  <Galleria :value="images" :responsiveOptions="galleriaResponsiveOptions" :numVisible="5" containerStyle="max-width: 640px">-->
<!--    <template #item="slotProps">-->
<!--      <img :src="slotProps.item" :alt="slotProps.item" style="width: 100%" />-->
<!--    </template>-->
<!--    <template #thumbnail="slotProps">-->
<!--      <img :src="slotProps.item" :alt="slotProps.item" />-->
<!--    </template>-->
<!--  </Galleria>-->
</template>

<script setup lang="ts">
import {ref, defineProps, PropType} from "vue";
import {ImagesType} from '../types/productTypes';

const props = defineProps({
  images: { type: Array as PropType<ImagesType>, required: true },
})

const products = ref();
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

const galleriaResponsiveOptions = ref([
  {
    breakpoint: '1300px',
    numVisible: 4
  },
  {
    breakpoint: '575px',
    numVisible: 1
  }
]);

</script>
