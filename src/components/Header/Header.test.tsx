import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from "./Header";

const mockSearchTerm = '';
const mockSetSearchTerm = jest.fn();

jest.mock('../../hooks/useSearch', () => ({
  useSearch: () => ({
    term: mockSearchTerm,
    setTerm: mockSetSearchTerm,
  })
}))

const mockGetTotalItems = jest.fn();

jest.mock('../../contexts/CartContext', () => ({
  useCartContext: () => ({
    getTotalItems: mockGetTotalItems,
    items: [],
  }),
}));

test('Header deve ser renderizado', () => {
  render(<Header />);
  expect(screen.getByText('AL SKIN')).toBeInTheDocument();
});

test('SetSearch deve ser chamado com o texto digitado', () => {
  render(<Header />);

  const campoPesquisa: HTMLInputElement = screen.getByTestId('search-input');
  fireEvent.change(campoPesquisa, {target: {value: 'busca'}});

  expect(campoPesquisa.value).toBe('busca');
  expect(mockSetSearchTerm).toBeCalledWith('busca');
  expect(mockSetSearchTerm).toHaveBeenCalledTimes(1);
})

test('clicar no ícone de busca loga informação no console', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => undefined);

  render(<Header />);

  const botaoPesquisa: HTMLButtonElement = screen.getByTestId('search-button');
  botaoPesquisa.click();

  expect(consoleSpy).toHaveBeenCalledWith('Você pesquisou por: ');

  consoleSpy.mockRestore();
})


test('clicar no ícone de carrinho abre modal', () => {
  render(<Header />);

  expect(screen.queryByText('Seu carrinho está vazio')).not.toBeInTheDocument();

  const botaoCarrinho = screen.getByTestId('cart-button');
  fireEvent.click(botaoCarrinho)

  expect(screen.getByText('Seu carrinho está vazio')).toBeInTheDocument();
})
