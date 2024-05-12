import {defineStore} from 'pinia';
import {IProductGetterProps, IProductState} from '@/types/types';
import {API_MAIN, apiPaths} from '@/store/apiPaths';

const initialState: IProductState = {
  product: null,
  isErrorLoading: false,
}

export const useProduct = defineStore('product', {
  state: (): IProductState => initialState,
  actions: {
    async getProduct({ id }: IProductGetterProps) {
      this.product = null;
      this.isErrorLoading = false;

      const url = API_MAIN + apiPaths.products + id;

      fetch(url)
        .then(res => res.status === 200
          ? res.json()
          : (this.isErrorLoading = true))
        .then(p => this.product = p)
        .catch(e => this.isErrorLoading = true);
    }
  }
})