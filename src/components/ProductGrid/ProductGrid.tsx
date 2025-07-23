import React, { useEffect, useState } from "react";
import './ProductGrid.css';
import ProductCard, { IProduto } from "../ProductCard/ProductCard";
import axios from "axios";
import { useSearchContext } from "../../contexts/SearchContext";



function ProductGrid() {

  const { search } = useSearchContext();
  const [produtos, setProdutos] = useState<IProduto[]>([])
  const [produtosFiltrados, setProdutosFiltrados] = useState<IProduto[]>([])

  const handleProductClick = (productId: string) => {
    console.log(`Produto clicado: ${productId}`);
  };

  const handleBuyClick = (productId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    console.log(`Comprar produto: ${productId}`);
  };


  useEffect(() => {
    async function buscarProdutos() {
      axios.get('http://localhost:3001/products')
        .then(response => setProdutos(response.data));
    }

    buscarProdutos();
  }, []);

  useEffect(() => {
    const textoBusca = search.toLowerCase();
    setProdutosFiltrados(
      textoBusca && textoBusca.trim() !== "" ?
      produtos.filter(prod => prod.name.toLowerCase().includes(textoBusca) || prod.description.toLowerCase().includes(textoBusca))
      : [...produtos]
    )
  }, [produtos, search]);

  return (
    <section className="product-grid-section">
      <div className="product-grid-container">
        <h2 className="product-grid-title">nossos queridinhos estão aqui</h2>

        <div className="product-grid">
          {produtosFiltrados.map((produto) => (
            <ProductCard 
              key={produto.id} 
              product={produto}
              onProductClick={handleProductClick}
              onBuyClick={handleBuyClick}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid;