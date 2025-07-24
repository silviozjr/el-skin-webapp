import React, { createContext, ReactNode, useContext } from 'react';
import { useCart, UseCartReturn } from '../hooks/useCart';

type CartContextType = UseCartReturn;


interface CartProviderProps {
  children: ReactNode;
}
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const cart = useCart();
  
  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
};


export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};