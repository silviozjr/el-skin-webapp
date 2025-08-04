import React from 'react';
import AppRouter from './routes';
import { SearchProvider } from './contexts/SearchContext';
import { CartProvider } from './contexts/CartContext';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <SearchProvider>
          <GlobalStyles />
          <AppRouter />
        </SearchProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
