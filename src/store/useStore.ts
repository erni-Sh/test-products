import {defineStore} from 'pinia';
import {
  IProduct,
  IProductsResponse,
  getProductsProps,
  requestProductsParams,
  requestSearchParams, searchProductsProps
} from '@/types/productTypes';
import {getStoredState} from '@/helpers/getStoredState';

export const API_MAIN = 'https://dummyjson.com/';

export interface storeState {
  isErrorLoading: boolean,
  products: IProduct[],
  total: number,
  rowsPerPage: number,
  paged: number,
}

const initialState: storeState = getStoredState() || {
  isErrorLoading: false,
  products: [],
  total: 0,
  rowsPerPage: 5,
  paged: 0,
};

export const useStore = defineStore("store", {
  state: () => initialState,
  actions: {
    async fetchProducts(url: string) {
      this.isErrorLoading = false;

      await fetch(url)
        .then(res => res.json())
        .then((p :IProductsResponse) => {
          this.products = p.products,
          this.total = p.total
        })
        .catch(e => this.isErrorLoading = true);
    },
    async getProducts({rowsPerPage, paged}: getProductsProps) {
      await this.fetchProducts(API_MAIN + `products?` + new URLSearchParams({
        limit: rowsPerPage.toString(),
        skip: (rowsPerPage * paged).toString()
      } as requestProductsParams))
    },
    async searchProduct({q}: searchProductsProps) {
      await this.fetchProducts(API_MAIN + `products/search?` + new URLSearchParams({q} as requestSearchParams))
    }
  },
  getters: {

  },
});
