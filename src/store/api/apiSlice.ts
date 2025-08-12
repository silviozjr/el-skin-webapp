import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_CONFIG } from '../../config/APIConfig';
 
export interface IProduto {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}
 
interface ICarouselItem {
  title: string;
  subtitle: string;
  description?: string;
  coupon?: string;
  discount?: string;
  backgroundImage: string;
}
 
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_CONFIG.BASE_URL,
    timeout: API_CONFIG.TIMEOUT,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduto[], void>({
      query: () => API_CONFIG.ENDPOINTS.PRODUCTS,
    }),
    getProductById: builder.query<IProduto, string>({
      query: (id) => `${API_CONFIG.ENDPOINTS.PRODUCTS}/${id}`,
    }),
    getCarouselItems: builder.query<ICarouselItem[], void>({
      query: () => API_CONFIG.ENDPOINTS.CAROUSEL,
    }),
  })
});
 
export const {
  useGetProductsQuery,
  useGetCarouselItemsQuery,
  useLazyGetProductByIdQuery,
} = apiSlice;