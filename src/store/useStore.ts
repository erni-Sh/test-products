import {defineStore} from 'pinia';
import {
  IProduct,
  IProductsResponse,
  getProductsProps,
  requestProductsParams, getProductProps,
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
    async getProducts({q, rowsPerPage, paged}: getProductsProps) {
      this.isErrorLoading = false;

      await fetch(API_MAIN + `products${q?.length ? '/search' : ''}?` + new URLSearchParams({
        limit: rowsPerPage.toString(),
        skip: (rowsPerPage * paged).toString(),
        q: q || '',
      } as requestProductsParams))
        .then(res => res.json())
        .then((p :IProductsResponse) => {
          this.products = p.products,
            this.total = p.total
        })
        .catch(e => this.isErrorLoading = true);
    },

  },
  getters: {

  },
});
