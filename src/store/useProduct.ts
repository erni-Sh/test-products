import {defineStore} from 'pinia';
import {getProductProps, IProduct} from '@/types/productTypes';

export const useProduct = defineStore('product', {
  state: () => ({
    product: {} as IProduct | object,
    isErrorLoading: false,
  }),
  actions: {
    async getProduct({id}: getProductProps) {
      this.product = {};
      this.isErrorLoading = false;
      fetch('https://dummyjson.com/products/' + id)
        .then(res => res.status === 200
          ? res.json()
          : (this.isErrorLoading = true))
        .then(p => this.product = p)
        .catch(e => this.isErrorLoading = true);
    }
  }
})