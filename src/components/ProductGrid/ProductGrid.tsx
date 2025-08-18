import React, { useCallback, useMemo } from "react";
import styled, { keyframes } from "styled-components";
import { useCart } from "../../hooks/useCart";
import { useSearch } from "../../hooks/useSearch";
import ProductCard from "../ProductCard/ProductCard";
import { IProduto, useGetProductsQuery, useLazyGetProductByIdQuery } from "../../store/api/apiSlice";



function ProductGrid() {

  const { term } = useSearch();
  const { addItem } = useCart();
  const { data: products = [], isLoading, error } = useGetProductsQuery();
  const [
    triggerGetProduct, 
    { data: product }
  ] = useLazyGetProductByIdQuery();

  const handleProductClick = async (productId: string) => {
    console.log(`Produto clicado: ${productId}`);

    await triggerGetProduct(productId)
    console.log('getById:', product);
  };

  const handleBuyClick = useCallback((productId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    console.log(`Comprar produto: ${productId}`);
    const produtoComprado = products.find(product => product.id === productId);

    if (!produtoComprado) {
      console.error(`Produto com ID ${productId} não encontrado.`);
      return;
    }

    addItem(produtoComprado);
  }, [products, addItem]);

  const produtosFiltrados: IProduto[] = useMemo(() => {
    if (!products) {
      return [];
    }
    const textoBusca = term.toLowerCase().trim();
    if (textoBusca === "") {
      return products; // Retorna todos os produtos se a busca estiver vazia
    }
    return products.filter(prod =>
      prod.name.toLowerCase().includes(textoBusca) ||
      prod.description.toLowerCase().includes(textoBusca)
    );
  }, [term, products]);

  return (
    <ProductGridSection>
      <ProductGridContainer>
        <ProductGridTitle>nossos queridinhos estão aqui</ProductGridTitle>

        <ProductCardsContainer>
          {isLoading && <p>Carregando produtos...</p>}
          {error && <p>Erro ao carregar produtos: {JSON.stringify(error)}</p>}

          {!isLoading && !error && (
            produtosFiltrados.map((produto) => (
              <ProductCard
                key={produto.id}
                product={produto}
                onProductClick={handleProductClick}
                onBuyClick={handleBuyClick}
              />
            ))
          )}
        </ProductCardsContainer>
      </ProductGridContainer>
    </ProductGridSection>
  )
}

const ProductGridSection = styled.section`
  padding: 60px 20px;
  background-color: #ffffff;
`;

const ProductGridContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductGridTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 40px;
  font-family: 'Arial', sans-serif;
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ProductCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  justify-items: center;

  
  & > * {
    opacity: 0;
    animation: ${fadeInUp} 0.5s ease-out forwards;
  }

  ${Array.from({ length: 8 }).map((_, i) => `
    & > *:nth-child(${i + 1}) {
      animation-delay: ${0.1 * (i + 1)}s;
    }
  `)}
`;

export default ProductGrid;