import React from "react";
import "./ProductCard.css";

export interface IProduto {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  tags: Array<{
    label: string;
    tipo: 'protection' | 'face';
  }>;
}

interface ProductCardProps {
  product: IProduto,
  onProductClick: (productId: string) => void;
  onBuyClick: (productId: string, event: React.MouseEvent) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onProductClick,
  onBuyClick,
}) => {
  const formatPrice = (price: number): string => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
  };

  return (
    <button
      className="product-card"
      onClick={() => onProductClick(product.id)}>
      <div className="product-image">
        <img 
          src={product.imagem} 
          alt={product.nome}
        />
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.nome}</h3>
        <p className="product-description">{product.descricao}</p>
        
        <div className="product-tags">
          {product.tags.map((tag) => (
            <span 
              key={`${product.id}-${tag.label}-${tag.tipo}`}
              className={`product-tag product-tag--${tag.tipo}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
        
        <div className="product-footer">
          <span className="product-price">
            {formatPrice(product.preco)}
          </span>
          <button 
            className="product-buy-button"
            onClick={(e) => onBuyClick(product.id, e)}
            type="button"
          >
            comprar
          </button>
        </div>
      </div>
    </button>
  )
}

export default ProductCard;