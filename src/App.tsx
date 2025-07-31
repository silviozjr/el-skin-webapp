import React from 'react';
import './App.css';
import AppRouter from './routes';
import { SearchProvider } from './contexts/SearchContext';
import { CartProvider } from './contexts/CartContext';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';

function App() {
  return (
    <CartProvider>
      <SearchProvider>
        <GlobalStyles />
        <AppRouter />
      </SearchProvider>
    </CartProvider>
  );
}

export default App;
