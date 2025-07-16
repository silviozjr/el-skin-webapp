import React from "react";
import './ProductGrid.css';
import Prod1 from '../../assets/prod1.jpg';
import Prod2 from '../../assets/prod2.jpg';
import Prod3 from '../../assets/prod3.jpg';
import Prod4 from '../../assets/prod4.jpg';
import Prod5 from '../../assets/prod5.jpg';
import Prod6 from '../../assets/prod6.jpg';
import Prod7 from '../../assets/prod7.jpg';
import Prod8 from '../../assets/prod8.jpg';
import ProductCard, { IProduto } from "../ProductCard/ProductCard";



function ProductGrid() {

  const handleProductClick = (productId: string) => {
    console.log(`Produto clicado: ${productId}`);
  };

  const handleBuyClick = (productId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    console.log(`Comprar produto: ${productId}`);
  };

  const produtos: IProduto[] = [
    {
      id: '1',
      nome: 'Protetor solar AL SUN',
      descricao: 'alta proteção e pele luminosa sem grude nem pele cinzenta',
      preco: 79.90,
      imagem: Prod1,
      tags: [
        { label: 'proteção', tipo: 'protection' },
        { label: 'rosto', tipo: 'face' }
      ]
    },
    {
      id: '2',
      nome: 'Protetor solar AL SUN',
      descricao: 'alta proteção e pele luminosa sem grude nem pele cinzenta',
      preco: 79.90,
      imagem: Prod2,
      tags: [
        { label: 'proteção', tipo: 'protection' },
        { label: 'rosto', tipo: 'face' }
      ]
    },
    {
      id: '3',
      nome: 'Protetor solar AL SUN',
      descricao: 'alta proteção e pele luminosa sem grude nem pele cinzenta',
      preco: 79.90,
      imagem: Prod3,
      tags: [
        { label: 'proteção', tipo: 'protection' },
        { label: 'rosto', tipo: 'face' }
      ]
    },
    {
      id: '4',
      nome: 'Protetor solar AL SUN',
      descricao: 'alta proteção e pele luminosa sem grude nem pele cinzenta',
      preco: 79.90,
      imagem: Prod4,
      tags: [
        { label: 'proteção', tipo: 'protection' },
        { label: 'rosto', tipo: 'face' }
      ]
    },
    {
      id: '5',
      nome: 'Protetor solar AL SUN',
      descricao: 'alta proteção e pele luminosa sem grude nem pele cinzenta',
      preco: 79.90,
      imagem: Prod5,
      tags: [
        { label: 'proteção', tipo: 'protection' },
        { label: 'rosto', tipo: 'face' }
      ]
    },
    {
      id: '6',
      nome: 'Protetor solar AL SUN',
      descricao: 'alta proteção e pele luminosa sem grude nem pele cinzenta',
      preco: 79.90,
      imagem: Prod6,
      tags: [
        { label: 'proteção', tipo: 'protection' },
        { label: 'rosto', tipo: 'face' }
      ]
    },
    {
      id: '7',
      nome: 'Protetor solar AL SUN',
      descricao: 'alta proteção e pele luminosa sem grude nem pele cinzenta',
      preco: 79.90,
      imagem: Prod7,
      tags: [
        { label: 'proteção', tipo: 'protection' },
        { label: 'rosto', tipo: 'face' }
      ]
    },
    {
      id: '8',
      nome: 'Protetor solar AL SUN',
      descricao: 'alta proteção e pele luminosa sem grude nem pele cinzenta',
      preco: 79.90,
      imagem: Prod8,
      tags: [
        { label: 'proteção', tipo: 'protection' },
        { label: 'rosto', tipo: 'face' }
      ]
    },
  ]

  return (
    <section className="product-grid-section">
      <div className="product-grid-container">
        <h2 className="product-grid-title">nossos queridinhos estão aqui</h2>

        <div className="product-grid">
          {produtos.map((produto) => (
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