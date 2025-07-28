import React, { useCallback, useEffect, useState } from "react";
import { useCartContext } from "../../contexts/CartContext";
import { useSearchContext } from "../../contexts/SearchContext";
import { productService } from "../../services/productService";
import ProductCard, { IProduto } from "../ProductCard/ProductCard";
import './ProductGrid.css';



function ProductGrid() {

  const { search } = useSearchContext();
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