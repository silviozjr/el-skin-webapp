import React from "react"
import styled from "styled-components";

export default function NotFound() {
  return (
    <NotfoundContainer>
      <h3>Página não encontrada</h3>
      <p>Você pode usar o campo de busca ou o menu para encontrar o que deseja</p>
    </NotfoundContainer>
  )
}

const NotfoundContainer = styled.div`
  width: 85%;
  margin: auto;
  min-height: 25vh;
`;
