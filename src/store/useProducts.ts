import {defineStore} from 'pinia';
import {IProductsGetterProps, IProductsResponse, IProductsState, IRequestProductsParams,} from '@/types/types';
import {getStoredState} from '@/helpers/getStoredState';
import {API_MAIN, apiPaths} from '@/store/apiPaths';

const initialState: IProductsState = getStoredState() || {
  isErrorLoading: false,
  products: [],
  total: 0,
  rowsPerPage: 5,
  paged: 0,
};

export const useProducts = defineStore('products', {
  state: (): IProductsState => initialState,
  actions: {
    async getProducts({ q, rowsPerPage, paged }: IProductsGetterProps) {
      this.isErrorLoading = false;

      const params: IRequestProductsParams = {
        limit: rowsPerPage.toString(),
        skip: (rowsPerPage * paged).toString(),
        q: q || '',
      }

      const url = API_MAIN + `${q?.length ? apiPaths.search : apiPaths.products}?` + new URLSearchParams(params);

      await fetch(url)
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
