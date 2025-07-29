import { render, screen } from "@testing-library/react"
import { SearchProvider, useSearchContext } from "./SearchContext"

const TestComponent = () => {
  const { search, setSearch } = useSearchContext();
  return (
    <div>
      <input type="text" data-testid="search-input" value={search} onChange={(e) => setSearch(e.target.value)} />
      <h1 data-testid="search-value">Valor da busca: {search}</h1>
      {/* <button onClick={() => addItem({ id: '1', name: 'Produto Teste', price: 10, image: "" })}>
        Adicionar Produto
      </button> */}
    </div>
  );
};

describe('SearchProvider e useSearchContext', () => {
  test('deve renderizar o componente', () => {
    render(
      <SearchProvider>
        <TestComponent />
      </SearchProvider>
    )
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  })

  test('deve lançar um erro se useSearchContext for usado fora de um SearchProvider', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => render(<TestComponent />)).toThrow(
      'useSearch must be used within a SearchProvider'
    );
    
    consoleErrorSpy.mockRestore();
  });
})