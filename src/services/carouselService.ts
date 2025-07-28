import api from './api';
import { API_CONFIG } from '../config/APIConfig';

interface ICarouselItem {
  title: string;
  subtitle: string;
  description?: string;
  coupon?: string;
  discount?: string;
  backgroundImage: string;
}

export const carouselService = {
  async getCarouselItems(): Promise<ICarouselItem[]> {
    const response = await api.get<ICarouselItem[]>(API_CONFIG.ENDPOINTS.CAROUSEL);
    return response.data;
  },
};