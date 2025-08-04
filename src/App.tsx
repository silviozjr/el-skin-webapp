import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import { CartProvider } from './contexts/CartContext';
import AppRouter from './routes';
import { store } from './store';
import { theme } from './theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <GlobalStyles />
          <AppRouter />
        </CartProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
