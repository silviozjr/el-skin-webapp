import { act, render, screen } from "@testing-library/react";
import Carousel from "./Carousel";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

const mockItems = [
  {
    title: 'titulo',
    subtitle: 'subtitulo',
    description: 'descricao',
    coupon: 'cupom',
    discount: 'desconto',
    backgroundImage: '/image1.jpg'
  },
  {
    title: 'titulo 2',
    subtitle: 'subtitulo 2',
    description: 'descricao 2',
    coupon: 'cupom 2',
    discount: 'desconto 2',
    backgroundImage: '/image2.jpg'
  }
];

// Mock dos serviços
// jest.mock('../../services/carouselService', () => ({
//   carouselService: {
//     getCarouselItems: () => mockItems,
//   },
// }));

const mockUseGetCarouselItemsQueryResult = {
  isLoading: false,
  error: '',
  data: mockItems,
}

jest.mock('../../store/api/apiSlice', () => ({
  useGetCarouselItemsQuery: () => mockUseGetCarouselItemsQueryResult,
}))

const renderWithAct = async () => {
  let component;
  await act(async () => {
    component = render(
      <ThemeProvider theme={theme}>
        <Carousel />
      </ThemeProvider>
    );
  });
  return component;
};

test('Carousel deve ser renderizado', async () => {
  await renderWithAct();

  expect(screen.getByTestId("carousel-container")).toBeInTheDocument();
})

test('Botões devem alterar conteúdo do Carousel', async () => {
  await renderWithAct();

  const botaoProximo: HTMLButtonElement = screen.getByTestId("button-next");
  const botaoAnterior: HTMLButtonElement = screen.getByTestId("button-previous");

  expect(screen.queryByText(mockItems[0].title)).toBeInTheDocument();
  expect(screen.queryByText(mockItems[1].title)).not.toBeInTheDocument();

  await act(async () => { botaoProximo.click() });

  expect(screen.queryByText(mockItems[0].title)).not.toBeInTheDocument();
  expect(screen.queryByText(mockItems[1].title)).toBeInTheDocument();

  await act(async () => { botaoAnterior.click() });

  expect(screen.queryByText(mockItems[0].title)).toBeInTheDocument();
  expect(screen.queryByText(mockItems[1].title)).not.toBeInTheDocument();

})
