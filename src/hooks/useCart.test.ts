import { renderHook, act } from '@testing-library/react';
import { useCart, ICartItem } from './useCart';

// Item de exemplo que usaremos nos testes
const mockItem: Omit<ICartItem, 'quantity'> = {
  id: '1',
  name: 'Produto Teste',
  price: 100,
  image: 'test.jpg',
};

describe('useCart Hook', () => {

  test('deve inicializar com o carrinho vazio', () => {
    const { result } = renderHook(() => useCart());
    expect(result.current.items).toEqual([]);
    expect(result.current.getTotalItems()).toBe(0);
    expect(result.current.getTotalPrice()).toBe(0);
  });

  test('deve adicionar um novo item ao carrinho', () => {
    const { result } = renderHook(() => useCart());

    // act() garante que a atualização de estado seja processada antes das asserções
    act(() => {
      result.current.addItem(mockItem);
    });

    expect(result.current.items.length).toBe(1);
    expect(result.current.items[0]).toEqual({ ...mockItem, quantity: 1 });
    expect(result.current.getTotalItems()).toBe(1);
  });

  test('deve aumentar a quantidade se o mesmo item for adicionado novamente', () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addItem(mockItem);
    });
    act(() => {
      result.current.addItem(mockItem);
    });

    expect(result.current.items.length).toBe(1);
    expect(result.current.items[0].quantity).toBe(2);
    expect(result.current.getTotalItems()).toBe(2);
    expect(result.current.getTotalPrice()).toBe(200);
  });
  
  test('deve remover um item do carrinho', () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addItem(mockItem);
    });

    expect(result.current.items.length).toBe(1);

    act(() => {
      result.current.removeItem('1');
    });
    
    expect(result.current.items).toEqual([]);
    expect(result.current.getTotalItems()).toBe(0);
  });

  test('deve atualizar a quantidade de um item', () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addItem(mockItem);
    });

    act(() => {
      result.current.updateQuantity('1', 5);
    });

    expect(result.current.items[0].quantity).toBe(5);
    expect(result.current.getTotalItems()).toBe(5);
    expect(result.current.getTotalPrice()).toBe(500);
  });

  test('deve remover o item se a quantidade for atualizada para 0 ou menos', () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addItem(mockItem);
    });

    act(() => {
      result.current.updateQuantity('1', 0);
    });

    expect(result.current.items.length).toBe(0);
  });

  test('deve limpar o carrinho completamente', () => {
    const { result } = renderHook(() => useCart());
    const anotherMockItem = { id: '2', name: 'Outro Produto', price: 50, image: 'test2.jpg' };

    act(() => {
      result.current.addItem(mockItem);
      result.current.addItem(anotherMockItem);
    });

    expect(result.current.items.length).toBe(2);
    
    act(() => {
      result.current.clearCart();
    });

    expect(result.current.items).toEqual([]);
    expect(result.current.getTotalItems()).toBe(0);
  });

  test('deve calcular o total de itens e o preço corretamente', () => {
    const { result } = renderHook(() => useCart());
    const anotherMockItem = { id: '2', name: 'Outro Produto', price: 50, image: 'test2.jpg' };

    act(() => {
      result.current.addItem(mockItem); // Adiciona 1x (total 1, preço 100)
      result.current.addItem(mockItem); // Adiciona 1x (total 2, preço 200)
      result.current.addItem(anotherMockItem); // Adiciona 1x (total 3, preço 250)
    });

    expect(result.current.getTotalItems()).toBe(3);
    expect(result.current.getTotalPrice()).toBe(250);
  });

});