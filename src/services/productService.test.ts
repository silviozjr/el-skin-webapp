import { productService, IProduto } from './productService';
import api from './api'; // Importamos o 'api' para poder mocká-lo
import { API_CONFIG } from '../config/APIConfig';

// Mock do módulo 'api'
jest.mock('./api');

// Cria um mock tipado para o api.get para nos dar autocomplete e segurança de tipos
const mockedApiGet = api.get as jest.Mock;

describe('productService', () => {
  // Limpa qualquer mock anterior antes de cada teste
  beforeEach(() => {
    mockedApiGet.mockClear();
  });

  // Teste para o método getProducts
  describe('getProducts', () => {
    test('deve retornar uma lista de produtos com sucesso', async () => {
      // 1. Arrange: Preparamos os dados que o mock deve retornar
      const mockProdutos: IProduto[] = [
        { id: '1', name: 'Produto 1', price: 10, description: '', image: '', tags: [] },
        { id: '2', name: 'Produto 2', price: 20, description: '', image: '', tags: [] },
      ];
      mockedApiGet.mockResolvedValue({ data: mockProdutos });

      // 2. Act: Executamos a função que queremos testar
      const produtos = await productService.getProducts();

      // 3. Assert: Verificamos se o resultado está correto
      expect(produtos).toEqual(mockProdutos);
      expect(mockedApiGet).toHaveBeenCalledTimes(1);
      expect(mockedApiGet).toHaveBeenCalledWith(API_CONFIG.ENDPOINTS.PRODUCTS);
    });

    test('deve lançar um erro quando a chamada da API falhar', async () => {
      // Arrange: Simulamos uma falha na API
      const mensagemErro = 'Erro de rede';
      mockedApiGet.mockRejectedValue(new Error(mensagemErro));

      // Act & Assert: Verificamos se a função do serviço propaga o erro
      await expect(productService.getProducts()).rejects.toThrow(mensagemErro);
    });
  });

  // Teste para o método getProductById
  describe('getProductById', () => {
    test('deve retornar um único produto pelo seu ID', async () => {
      // Arrange
      const mockProduto: IProduto = { id: '1', name: 'Produto 1', price: 10, description: '', image: '', tags: [] };
      const productId = '1';
      mockedApiGet.mockResolvedValue({ data: mockProduto });

      // Act
      const produto = await productService.getProductById(productId);

      // Assert
      expect(produto).toEqual(mockProduto);
      expect(mockedApiGet).toHaveBeenCalledTimes(1);
      expect(mockedApiGet).toHaveBeenCalledWith(`${API_CONFIG.ENDPOINTS.PRODUCTS}/${productId}`);
    });
  });
});