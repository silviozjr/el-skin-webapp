"use client";

import { Provider } from "react-redux"
import { store } from "../store"
import { ThemeProvider } from "styled-components"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { theme } from "../theme";
import GlobalStyles from "../components/GlobalStyles/GlobalStyles";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return <html lang="en">
      <head>
        <title>AL SKIN</title>
        <meta name="description" content="Sobre a AL SKIN" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
              <div id="root">{children}</div>
            <Footer />
          </ThemeProvider>
        </Provider>
      </body>
    </html>
}