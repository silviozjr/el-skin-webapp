import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import AppRouter from './routes';
import { store } from './store';
import { theme } from './theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
