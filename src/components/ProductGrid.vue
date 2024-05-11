<template>
  <DataView v-if='products' :value="products" :rows="products.length" :layout="layout">
    <template #list="slotProps">
      <div class="grid grid-nogutter">
        <div v-for="product in slotProps.items" :key="product.id" class="col-12">
          <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3" :class="{ 'border-top-1 surface-border': index !== 0 }">
            <div class="md:w-10rem relative productTrumb__list__wrapper">
              <img class="block xl:block mx-auto border-round productTrumb__list" :src="product.images[0]" :alt="product.name" />
              <Tag :value="getInventoryStatus(product)" :severity="getSeverity(product)" class="absolute" style="left: 4px; top: 4px"></Tag>
            </div>
            <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
              <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2 text-left">
                <div>
                  <span class="font-medium text-secondary text-sm">{{ product.category }}</span>
                  <div class="text-lg font-medium text-900 mt-2">{{ product.title }}</div>
                </div>
                <div class="surface-100 p-1" style="border-radius: 30px">
                  <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                    <span class="text-900 font-medium text-sm">{{ product.rating }}</span>
                    <i class="pi pi-star-fill text-yellow-500"></i>
                  </div>
                </div>
              </div>
              <div class="flex flex-column md:align-items-end gap-5">
                <span class="text-xl font-semibold text-900">${{ product.price }}</span>

                <router-link :to="'/products/' + product.id" class="flex flex-row-reverse md:flex-row gap-2">
                  <Button icon="pi pi-heart" outlined></Button>
                  <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="product.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial white-space-nowrap"></Button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #grid="slotProps">
      <div class="grid grid-nogutter">
        <div v-for="product in slotProps.items" :key="product.id" class="col-12 sm:col-6 md:col-4 xl:col-6 p-2">
          <div class="p-4 border-1 surface-border surface-card border-round flex flex-column">
            <div class="surface-50 flex justify-content-center border-round p-3">
              <div class="relative mx-auto productTrumb__grid__wrapper">
                <img class="border-round w-full productTrumb__grid" :src="product.images[0]" :alt="product.name" />
                <Tag :value="getInventoryStatus(product)" :severity="getSeverity(product)" class="absolute" style="left: 4px; top: 4px"></Tag>
              </div>
            </div>
            <div class="pt-4">
              <div class="flex flex-row justify-content-between align-items-start gap-2 text-left">
                <div>
                  <span class="font-medium text-secondary text-sm">{{ product.category }}</span>
                  <div class="text-lg font-medium text-900 mt-1">{{ product.title }}</div>
                </div>
                <div class="surface-100 p-1" style="border-radius: 30px">
                  <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                    <span class="text-900 font-medium text-sm">{{ product.rating }}</span>
                    <i class="pi pi-star-fill text-yellow-500"></i>
                  </div>
                </div>
              </div>
              <div class="flex flex-column gap-4 mt-4">
                <span class="text-2xl font-semibold text-900">${{ product.price }}</span>
                <router-link :to="'/products/' + product.id" class="flex gap-2">
                  <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="(getInventoryStatus(product)) === 'OUTOFSTOCK'" class="flex-auto white-space-nowrap"></Button>
                  <Button icon="pi pi-heart" outlined></Button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </DataView>
</template>

<script lang="ts">
import DataView from 'primevue/dataview';
import {defineComponent, PropType} from 'vue';
import {IProduct, LayoutType} from '../types/ProductList';

export default defineComponent({
  name: "ProductGrid",
  props: {
    products: {
      type: [] as PropType<IProduct[]>,
      required: true,
    },
    layout: {
      type: String as PropType<LayoutType>,
      required: true,
    }
  },
  components: {
    DataView,
  },
  methods: {
    getInventoryStatus: (product) => product.stock < 50 ? 'OUTOFSTOCK' : product.stock < 100 ? 'LOWSTOCK' : 'INSTOCK',
    getSeverity: (product) => product.stock < 50 ? 'danger' : product.stock < 100 ? 'warning' : 'success'
  },
  async mounted(){
    // console.log(this.products);
  },
})

</script>

<style scoped lang="scss">
.productTrumb {
  &__grid {
    height: fit-content;
    max-width: 300px;
    max-height: 300px;

    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 300px
    }
  }

  &__list {
    height: fit-content;
    max-width: 140px;
    max-height: 140px;

    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 140px;
    }
  }


}

</style>