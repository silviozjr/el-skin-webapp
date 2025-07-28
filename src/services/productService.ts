import { API_CONFIG } from '../config/APIConfig';
import api from './api';

export interface IProduto {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}

export const productService = {
  async getProducts(): Promise<IProduto[]> {
    const response = await api.get<IProduto[]>(API_CONFIG.ENDPOINTS.PRODUCTS);
    return response.data;
  },

  async getProductById(id: string): Promise<IProduto> {
    const response = await api.get<IProduto>(`${API_CONFIG.ENDPOINTS.PRODUCTS}/${id}`);
    return response.data;
  },
};