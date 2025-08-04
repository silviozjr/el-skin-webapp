import React, { useCallback, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useCartContext } from "../../contexts/CartContext";
import { useSearch } from "../../hooks/useSearch";
import { productService } from "../../services/productService";
import ProductCard, { IProduto } from "../ProductCard/ProductCard";



function ProductGrid() {

  const { term } = useSearch();
  const { addItem } = useCartContext();
  const [produtos, setProdutos] = useState<IProduto[]>([])
  const [produtosFiltrados, setProdutosFiltrados] = useState<IProduto[]>([])

  const handleProductClick = (productId: string) => {
    console.log(`Produto clicado: ${productId}`);
  };

  const handleBuyClick = useCallback((productId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    console.log(`Comprar produto: ${productId}`);
    const produtoComprado = produtos.find(product => product.id === productId);

    if(!produtoComprado) {
      console.error(`Produto com ID ${productId} não encontrado.`);
      return;
    }

    addItem(produtoComprado);
  }, [produtos, addItem]);


  useEffect(() => {
    async function buscarProdutos() {
      const listaProdutos = await productService.getProducts();
      setProdutos(listaProdutos);
    }

    buscarProdutos();
  }, []);

  useEffect(() => {
    const textoBusca = term.toLowerCase();
    setProdutosFiltrados(
      textoBusca && textoBusca.trim() !== "" ?
      produtos.filter(prod => prod.name.toLowerCase().includes(textoBusca) || prod.description.toLowerCase().includes(textoBusca))
      : [...produtos]
    )
  }, [produtos, term]);

  return (
    <ProductGridSection>
      <ProductGridContainer>
        <ProductGridTitle>nossos queridinhos estão aqui</ProductGridTitle>

        <ProductCardsContainer>
          {produtosFiltrados.map((produto) => (
            <ProductCard 
              key={produto.id} 
              product={produto}
              onProductClick={handleProductClick}
              onBuyClick={handleBuyClick}
            />
          ))}
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

  
  &:nth-child(1) { animation: ${fadeInUp} 0.5s ease-out 0.1s forwards; }
  &:nth-child(2) { animation: ${fadeInUp} 0.5s ease-out 0.2s forwards; }
  &:nth-child(3) { animation: ${fadeInUp} 0.5s ease-out 0.3s forwards; }
  &:nth-child(4) { animation: ${fadeInUp} 0.5s ease-out 0.4s forwards; }
  &:nth-child(5) { animation: ${fadeInUp} 0.5s ease-out 0.5s forwards; }
  &:nth-child(6) { animation: ${fadeInUp} 0.5s ease-out 0.6s forwards; }
  &:nth-child(7) { animation: ${fadeInUp} 0.5s ease-out 0.7s forwards; }
  &:nth-child(8) { animation: ${fadeInUp} 0.5s ease-out 0.8s forwards; }
`;

export default ProductGrid;