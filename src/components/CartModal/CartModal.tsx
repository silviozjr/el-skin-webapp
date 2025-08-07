import { faMinus, faPlus, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { useCart } from '../../hooks/useCart';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function formatPrice(price: number): string {
  return `R$ ${price.toFixed(2).replace('.', ',')}`;
}

const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleBackdropKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <CartModalOverlay 
      onClick={handleBackdropClick}
      onKeyDown={handleBackdropKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-modal-title"
      tabIndex={-1}
    >
      <StyledCartModal>
        <CartModalHeader>
          <CartModalHeaderTitle id="cart-modal-title">Carrinho</CartModalHeaderTitle>
          <CartModalClose onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </CartModalClose>
        </CartModalHeader>

        <CartModalContent>
          {items.length === 0 ? (
            <CartEmpty>
              <p>Seu carrinho está vazio</p>
            </CartEmpty>
          ) : (
            <>
              <CartItems>
                {items.map((item) => (
                  <CartItem key={item.id}>
                    <CartItemImage>
                      <img src={item.image} alt={item.name} />
                    </CartItemImage>
                    
                    <CartItemInfo>
                      <CartItemName>{item.name}</CartItemName>
                      
                      <CartItemControls>
                        <QuantityLabel>Quantidade</QuantityLabel>
                        <QuantityControls>
                          <QuantityBtn
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </QuantityBtn>
                          <QuantityDisplay>{item.quantity}</QuantityDisplay>
                          <QuantityBtn
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </QuantityBtn>
                        </QuantityControls>
                        
                        <RemoveBtn
                          title="Remover item"
                          onClick={() => removeItem(item.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </RemoveBtn>
                      </CartItemControls>
                      
                      <CartItemPrice>
                        {formatPrice(item.price * item.quantity)}
                      </CartItemPrice>
                    </CartItemInfo>
                  </CartItem>
                ))}
              </CartItems>

              <CartTotal>
                <TotalLabel>Total</TotalLabel>
                <TotalPrice>{formatPrice(totalPrice)}</TotalPrice>
              </CartTotal>

              <FinalizeBtn
              >
                Finalizar compra
              </FinalizeBtn>
            </>
          )}
        </CartModalContent>
      </StyledCartModal>
    </CartModalOverlay>
  );
};

/* Cart Modal Styles */
const CartModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(2px);
`;

const StyledCartModal = styled.div`
  background: #2d2d2d;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  color: white;

  @media (max-width: 768px) {
    width: 95%;
    max-height: 95vh;
  }
`;

const CartModalHeader = styled.div`
  background: linear-gradient(135deg, #8b5cf6, #a855f7);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const CartModalHeaderTitle = styled.h2`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CartModalClose = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const CartModalContent = styled.div`
  padding: 20px;
  max-height: 60vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 15px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #2d2d2d;
  }

  &::-webkit-scrollbar-thumb {
    background: #6b7280;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
  }
`;

const CartEmpty = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #999;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

const CartItem = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px;
  background: #3d3d3d;
  border-radius: 8px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const CartItemImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const CartItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CartItemName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: white;
  line-height: 1.3;
`;

const CartItemControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const QuantityLabel = styled.span`
  font-size: 0.9rem;
  color: #ccc;
  margin-right: 10px;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  background: #4d4d4d;
  border-radius: 6px;
  padding: 5px;

  @media (max-width: 768px) {
    order: 1;
  }
`;

const QuantityBtn = styled.button`
  background: none;
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 0.9rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const QuantityDisplay = styled.span`
  background: #5d5d5d;
  color: white;
  padding: 5px 12px;
  border-radius: 4px;
  font-weight: 500;
  min-width: 40px;
  text-align: center;
`;

const RemoveBtn = styled.button`
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
  margin-left: auto;
  
  &:hover {
    background: rgba(239, 68, 68, 0.1);
  }

  @media (max-width: 768px) {
    order: 2;
    margin-left: 0;
  }
`;

const CartItemPrice = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #a3e635;
  margin-top: auto;
`;

const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid #4d4d4d;
  margin-top: 20px;
`;

const TotalLabel = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
`;

const TotalPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #a3e635;
`;

const FinalizeBtn = styled.button`
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #8b5cf6, #a855f7);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 10px;
  
  &:hover {
    background: linear-gradient(135deg, #7c3aed, #9333ea);
    transform: translateY(-1px);
    box-shadow: 0 5px 15px rgba(139, 92, 246, 0.3);
  }
`;

export default CartModal;