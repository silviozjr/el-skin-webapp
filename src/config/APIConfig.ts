// Configurações da API
export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
  TIMEOUT: parseInt(process.env.API_TIMEOUT || '') || 10000,
  
  // Endpoints
  ENDPOINTS: {
    CAROUSEL: '/carousel',
    PRODUCTS: '/products',
  },
  
  // Headers padrão
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
  },
} as const;