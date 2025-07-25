import { ICartItem } from "../hooks/useCart";
import { CartAction } from "./actions/cartActions";

export const ADD_PRODUTO = "ADD_PRODUTO";
export const REMOVE_PRODUTO = "REMOVE_PRODUTO";
export const UPDATE_QUANTIDADE = "UPDATE_QUANTIDADE";
export const LIMPAR_CARRINHO = "LIMPAR_CARRINHO";


export const cartReducer = (state: ICartItem[], action: CartAction) => {
  switch (action.type) {
    case ADD_PRODUTO: {
      const novoProduto = action.payload;
      const produto = state.findIndex((item) => item.id === novoProduto.id);
      if (produto === -1) {
        return [...state, {...novoProduto, quantity: 1}];
      } else {
        return state.map((item, index) =>
          index === produto
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
    }
    case REMOVE_PRODUTO: {
      const produtoId = action.payload;
      return state.filter((item) => item.id !== produtoId);
    }
    case UPDATE_QUANTIDADE: {
      const { id, quantity } = action.payload;
      return state.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    }
    case LIMPAR_CARRINHO: {
      return [];
    }
    default:
      return state;
  }
};