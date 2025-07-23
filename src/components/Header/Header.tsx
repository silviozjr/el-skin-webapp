import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSearchContext } from '../../contexts/SearchContext';
import { useCartContext } from '../../contexts/CartContext';
import { useState } from 'react';
import CartModal from '../CartModal/CartModal';

const opcoesMenu = ['Categorias', 'Tipo de pele', 'Necessidade', 'Ingredientes'];

export default function Header() {
  const { search, setSearch } = useSearchContext();
  const { items } = useCartContext();
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
    <header className='appHeader'>

      <div className='headerLogoPesquisa'>
        <div className='headerLogo'>AL SKIN</div>
        <div className='headerPesquisa'>
          <input
            type='text'
            className='headerInputPesquisa'
            placeholder='O que você está procurando?'
            onChange={handleOnChange}
          />
          <button className="search-button" onClick={onClickSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className='headerSacola'>
          <button className='cart-button' onClick={handleClickCart}>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>

      <nav className='headerMenu'>
        <ul className='headerMenuOpcoes'>
          {opcoesMenu.map((menuItem, i) => (
            <li
              key={`${menuItem}-${i}`}
              className='headerMenuOpcao'
            >
              {menuItem}
            </li>
          ))}
        </ul>
        <div className='headerMenuOpcaoPromocional'>
          Kits até 50% OFF
        </div>
      </nav>

      <CartModal
        isOpen={isCartModalOpen}
        onClose={handleCloseCart}
        items={items}
      />

    </header>
  )
}