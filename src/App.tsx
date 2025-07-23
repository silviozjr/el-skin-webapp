import React from 'react';
import './App.css';
import AppRouter from './routes';
import { SearchProvider } from './contexts/SearchContext';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <SearchProvider>
        <AppRouter />
      </SearchProvider>
    </CartProvider>
  );
}

export default App;
