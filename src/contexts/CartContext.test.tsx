import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { CartProvider, useCartContext } from './CartContext'; 
import { useCart, UseCartReturn } from '../hooks/useCart';

jest.mock('../hooks/useCart');

const TestComponent = () => {
  const { items, addItem } = useCartContext();
  return (
    <div>
      <h1 data-testid="cart-length">Items: {items.length}</h1>
      <button onClick={() => addItem({ id: '1', name: 'Produto Teste', price: 10, image: "" })}>
        Adicionar Produto
      </button>
    </div>
  );
};

describe('CartProvider', () => {
  beforeEach(() => {
    const mockUseCartValue: UseCartReturn = {
      items: [{ id: '123', name: 'Produto Mock', price: 50, quantity: 2, image: "" }],
      addItem: jest.fn(),
      removeItem: jest.fn(),
      updateQuantity: jest.fn(),
      clearCart: jest.fn(),
      getTotalItems: jest.fn(),
      getTotalPrice: jest.fn(),
    };

    (useCart as jest.Mock).mockReturnValue(mockUseCartValue);
  });

  test('deve prover os valores do carrinho para os componentes filhos', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    expect(screen.getByTestId('cart-length')).toHaveTextContent('Items: 1');
  });

  test('deve lançar um erro se useCartContext for usado fora de um CartProvider', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => render(<TestComponent />)).toThrow(
      'useCartContext must be used within a CartProvider'
    );
    
    consoleErrorSpy.mockRestore();
  });
});