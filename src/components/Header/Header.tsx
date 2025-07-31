import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSearchContext } from '../../contexts/SearchContext';
import { useState } from 'react';
import CartModal from '../CartModal/CartModal';
import { useCartContext } from '../../contexts/CartContext';
import styled from 'styled-components';

const opcoesMenu = ['Categorias', 'Tipo de pele', 'Necessidade', 'Ingredientes'];

export default function Header() {
  const { search, setSearch } = useSearchContext();
  const { getTotalItems } = useCartContext();
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function onClickSearch(): void {
    console.log(`Você pesquisou por: ${search}`);
  }

  function handleClickCart() {
    setIsCartModalOpen(true)
  }

  function handleCloseCart() {
    setIsCartModalOpen(false)
  }

  return (
    <AppHeader>

      <HeaderLogoPesquisa>
        <HeaderLogo>AL SKIN</HeaderLogo>
        <HeaderPesquisa>
          <HeaderInputPesquisa
            data-testid='search-input'
            type='text'
            placeholder='O que você está procurando?'
            onChange={handleOnChange}
          />
          <SearchButton
            data-testid="search-button"
            onClick={onClickSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </SearchButton>
        </HeaderPesquisa>
        <HeaderSacola>
          <CartButton 
            data-testid='cart-button'
            onClick={handleClickCart}>
            <FontAwesomeIcon icon={faCartShopping} />
            {getTotalItems() > 0 &&
              <CartQuantity>{getTotalItems()}</CartQuantity>
            }
          </CartButton>
        </HeaderSacola>
      </HeaderLogoPesquisa>

      <HeaderMenu>
        <HeaderMenuOpcoes>
          {opcoesMenu.map((menuItem, i) => (
            <HeaderMenuOpcao
              key={`${menuItem}-${i}`}
            >
              {menuItem}
            </HeaderMenuOpcao>
          ))}
        </HeaderMenuOpcoes>
        <HeaderMenuOpcaoPromocional>
          Kits até 50% OFF
        </HeaderMenuOpcaoPromocional>
      </HeaderMenu>

      <CartModal
        isOpen={isCartModalOpen}
        onClose={handleCloseCart}
      />

    </AppHeader>
  )
}

const AppHeader = styled.header`
  width: 85%;
  margin: auto;
`;

const HeaderLogoPesquisa = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;


const HeaderLogo = styled.div`
  font-family: "Shippori Antique", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  width: 20%;
`;

const HeaderPesquisa = styled.div`
  width: 55%;
  position: relative;
`;

const HeaderInputPesquisa = styled.input`
  background-color: #F5F5F5;
  height: 50px;
  border-radius: 8px;
  width: 100%;
  padding-left: 10px;
  border: 1px solid #ddd;
  outline: none;
  transition: border-color 0.3s ease;


  &:focus {
    border-color: #AAA;
  }

  &::placeholder {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;


  &:hover {
    background-color: #f0f0f0;
  }
`;

const HeaderSacola = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row-reverse;
`;

const CartButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 20%;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const CartQuantity = styled.span`
  margin-left: 5px;
`;

const HeaderMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderMenuOpcoes = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 50%;
`;

const HeaderMenuOpcao = styled.li`
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  height: 100%;
  cursor: pointer;
`;

const HeaderMenuOpcaoPromocional = styled.div`
  color: #DC5E5E;
  cursor: pointer;
  font-weight: bold;
`;