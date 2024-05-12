export interface IProduct {
  title: string,
  brand: string,
  category: string,
  description: string,
  discountPercentage: number,
  id: number,
  images: ImagesType,
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

export type LayoutType = 'grid' | 'list';
export type ImagesType = string[];

export interface getProductsProps {
  rowsPerPage: number,
  paged: number,
}

export type requestProductsParams = {
  limit: string,
  skip: string
}


export interface searchProductsProps {
  q: string,
}

export type requestSearchParams = {
  q: string,
}