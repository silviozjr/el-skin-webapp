import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sobre from './Sobre';

test('tela About deve ser renderizada', () => {
  render(<Sobre />);
  expect(screen.getByText('Sobre a AL SKIN')).toBeInTheDocument();
});