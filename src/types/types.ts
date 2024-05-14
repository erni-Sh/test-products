export interface IProduct {
  title: string,
  brand: string,
  category: string,
  description: string,
  discountPercentage: number,
  id: number,
  images: IImagesType,
  price: number,
  rating: number,
  stock: number,
  thumbnail: string,
}

export interface IProductsResponse {
  limit: number,
  products: IProduct[],
  skip: number,
  total: number,
}

export type IImagesType = string[];

export interface IProductsGetterProps {
  rowsPerPage: number,
  paged: number,
  q: string | undefined,
}

export type IRequestProductsParams = {
  limit: string,
  skip: string,
  q: string,
}

export interface IProductGetterProps {
  id: string,
}

export interface IProductsState {
  isFetching: boolean,
  isErrorLoading: boolean,
  products: IProduct[] | null,
  total: number,
  rowsPerPage: number,
  paged: number,
}

export interface IProductState {
  product: IProduct | null,
  isErrorLoading: boolean,
}