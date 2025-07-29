import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Footer Component', () => {
  let consoleWarnSpy: jest.SpyInstance;

  // Antes de cada teste neste arquivo, substitui o console.warn por uma função vazia
  beforeEach(() => {
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  // Depois de cada teste, restaura a função original do console.warn
  afterEach(() => {
    consoleWarnSpy.mockRestore();
  });

  test('componente Sobre deve ser renderizado', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    expect(screen.getByText('2025 AL SKIN. Todos os direitos reservados.')).toBeInTheDocument();
  });

  test('clicando link do footer', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => undefined);

    render(
      <Router>
        <Footer />
      </Router>
    );

    const link = screen.getByTestId('footer-button-0')
    link.click();

    expect(consoleSpy).toHaveBeenCalledWith('Abrindo Instagram: https://instagram.com/alskin');

    consoleSpy.mockRestore();
  });

});