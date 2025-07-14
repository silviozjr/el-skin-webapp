import './Header.css';
import iconeSacola from './assets/sacola.png'
import iconeLupa from './assets/lupa.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const opcoesMenu = ['Categorias', 'Tipo de pele', 'Necessidade', 'Ingredientes'];

export default function Header() {
  const [textoBusca, setTextoBusca] = useState('valor inicial do texto');
  
  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTextoBusca(e.target.value);
  }

  function onClickSearch(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    console.log(`Você pesquisou por: ${textoBusca}`);
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
            <FontAwesomeIcon icon={faSearch}/>
          </button>
        </div>
        <div className='headerSacola'>
          <button className='cart-button'>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>

      <nav className='headerMenu'>
        <ul className='headerMenuOpcoes'>
          {opcoesMenu.map( (menuItem, i) => (
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
      
    </header>
  )
}