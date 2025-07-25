import { useCallback, useReducer } from 'react';
import { addProduto, limparCarrinho, removeProduto, updateQuantidade } from '../reducers/actions/cartActions';
import { cartReducer } from '../reducers/cartReducer';

export interface ICartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface UseCartReturn {
  items: ICartItem[];
  addItem: (item: Omit<ICartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}



export const useCart = (): UseCartReturn => {
  const [items, dispatch] = useReducer(cartReducer, [] as ICartItem[]);

  const addItem = useCallback((newItem: Omit<ICartItem, 'quantity'>) => {
    dispatch(addProduto(newItem as ICartItem));
  }, []);

  const removeItem = useCallback((id: string) => {
    dispatch(removeProduto(id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      dispatch(removeProduto(id));
    }
    
    dispatch(updateQuantidade(id, quantity));
  }, []);

  const clearCart = useCallback(() => {
    dispatch(limparCarrinho());
  }, []);

  const getTotalItems = useCallback(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  const getTotalPrice = useCallback(() => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [items]);

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };
};