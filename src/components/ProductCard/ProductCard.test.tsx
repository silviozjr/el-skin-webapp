import { fireEvent, render, screen } from '@testing-library/react';
import ProductCard from "./ProductCard";
import { IProduto } from '../../store/api/apiSlice';

const product: IProduto = {
  id: '1',
  name: 'Produto Teste',
  description: 'Descrição do produto teste',
  price: 99.99,
  image: 'https://via.placeholder.com/150',
  tags: [ 'Proteção', 'Rosto' ],
};

const handleProductClick = jest.fn();
const handleBuyClick = jest.fn();

test('componente ProductCard deve ser renderizado', () => {

  // Act
  render(<ProductCard
    key={product.id}
    product={product}
    onProductClick={handleProductClick}
    onBuyClick={handleBuyClick}
  />);

  // Assert
  expect(screen.getByText('Produto Teste')).toBeInTheDocument();
});

test('deve acionar o método onProductClick quando o produto for clicado', () => {
  render(<ProductCard
    key={product.id}
    product={product}
    onProductClick={handleProductClick}
    onBuyClick={handleBuyClick}
  />);

  const card = screen.getByTestId('product-card');
  fireEvent.click(card);

  expect(handleProductClick).toBeCalledWith('1');
  expect(handleProductClick).toHaveBeenCalledTimes(1);
});

test('deve acionar o método onBuyClick quando o botão comprar for clicado', () => {
  render(<ProductCard
    key={product.id}
    product={product}
    onProductClick={handleProductClick}
    onBuyClick={handleBuyClick}
  />);

  const card = screen.getByTestId('buy-button');
  fireEvent.click(card);

  expect(handleBuyClick).toBeCalledWith('1', expect.any(Object));
  expect(handleBuyClick).toHaveBeenCalledTimes(1);
});