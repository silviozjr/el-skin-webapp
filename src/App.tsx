import React from 'react';
import './App.css';
import AppRouter from './routes';
import { SearchProvider } from './contexts/SearchContext';

function App() {
  return (
    <SearchProvider>
      <AppRouter />
    </SearchProvider>
  );
}

export default App;
