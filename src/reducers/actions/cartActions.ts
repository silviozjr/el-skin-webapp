import { ICartItem } from "../../hooks/useCart";
import { ADD_PRODUTO, LIMPAR_CARRINHO, REMOVE_PRODUTO, UPDATE_QUANTIDADE } from "../cartReducer";

// Tipos
interface AddProdutoAction {
  type: typeof ADD_PRODUTO;
  payload: ICartItem;
}

interface RemoveProdutoAction {
  type: typeof REMOVE_PRODUTO;
  payload: string;
}

interface UpdateQuantidadeAction {
  type: typeof UPDATE_QUANTIDADE;
  payload: {
    id: string;
    quantity: number;
  };
}

interface LimparCarrinhoAction {
  type: typeof LIMPAR_CARRINHO;
}

// Tipo para ser usado no reducer, contendo a união dos tipos necessários para os eventos
export type CartAction = AddProdutoAction | RemoveProdutoAction | UpdateQuantidadeAction | LimparCarrinhoAction;


// Actions
export const addProduto = (novoProduto: ICartItem): AddProdutoAction => ({
  type: ADD_PRODUTO,
  payload: novoProduto,
});

export const removeProduto = (produtoId: string): RemoveProdutoAction => ({
  type: REMOVE_PRODUTO,
  payload: produtoId,
});

export const updateQuantidade = (id: string, quantity: number): UpdateQuantidadeAction => ({
  type: UPDATE_QUANTIDADE,
  payload: { id, quantity },
});

export const limparCarrinho = (): LimparCarrinhoAction => ({
  type: LIMPAR_CARRINHO,
})