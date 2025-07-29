import { render, screen } from "@testing-library/react"
import NotFound from "./NotFound"

test('deve renderizar a página Not Found', () => {
  render(<NotFound/>)
  expect(screen.getByText('Página não encontrada')).toBeInTheDocument();
})