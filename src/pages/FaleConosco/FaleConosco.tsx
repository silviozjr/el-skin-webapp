import React from "react";
import FaleConosco1 from "../../assets/faleconosco.png";
import styled, { css } from "styled-components";

export default function FaleConosco() {
  return (
    <FaleconoscoContainer>
      <FaleconoscoContainerTopo>
        <FaleconoscoForm>
          <FaleconoscoForm>
            <h3>Fale conosco</h3>
            <FaleconoscoInput 
              type="text"
              placeholder="Seu nome" />
            <FaleconoscoInput 
              type="text"
              placeholder="Seu e-mail para contato" />
            <FaleconoscoInput 
              type="text"
              placeholder="Seu telefone com DDD" />
            <FaleconoscoInput 
              type="text"
              placeholder="Seu CPF" />
            <FaleconoscoCheckboxes>
              Categoria:<br />
              <input id="duvidas" type="checkbox" />
              <label htmlFor="duvidas">Dúvidas</label>
              <input id="pedido" type="checkbox" />
              <label htmlFor="pedido">Problema com pedido</label>
              <input id="reclamacao" type="checkbox" />
              <label htmlFor="reclamacao">Reclamação</label><br />
              <input id="sugestao" type="checkbox" />
              <label htmlFor="sugestao">Sugestão</label>
              <input id="elogio" type="checkbox" />
              <label htmlFor="elogio">Elogios</label>
              <input id="outro" type="checkbox" />
              <label htmlFor="outro">Outro</label><br />
            </FaleconoscoCheckboxes>
            <FaleconoscoTextarea 
              placeholder="Sua mensagem..." />
            <FaleconoscoBotao
              type="submit"
            >
              {'Enviar mensagem >'}
            </FaleconoscoBotao>
          </FaleconoscoForm>
        </FaleconoscoForm>
        <div>
          <img src={FaleConosco1} />
        </div>
      </FaleconoscoContainerTopo>
      <FaleconoscoContainerRodape>
        <h3>Ajuda - FAQ</h3>
        <FaleconoscoAjudaParagrafo>
          QUEM SOMOS<br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
        </FaleconoscoAjudaParagrafo>
        <FaleconoscoAjudaParagrafo>
          Por que existimos?<br />
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
        </FaleconoscoAjudaParagrafo>
        <FaleconoscoAjudaParagrafo>
          O que a gente faz?<br />
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </FaleconoscoAjudaParagrafo>
      </FaleconoscoContainerRodape>
    </FaleconoscoContainer>
  )
}

const FaleconoscoContainer = styled.div`
  width: 85%;
  margin: auto;
`;

const FaleconoscoContainerTopo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const FaleconoscoForm = styled.form`
  width: 80%;
`;

const baseInputStyle = css`
  background-color: #F5F5F5;
  height: 50px;
  border-radius: 8px;
  width: 100%;
  padding: 0 10px;
  border: 1px solid #ddd;
  outline: none;
  transition: border-color 0.3s ease;
  margin-bottom: 1rem;
  
  &:focus {
    border-color: #AAA;
  }

  &::placeholder {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
  }
`;

const FaleconoscoInput = styled.input`
  ${baseInputStyle}
`;

const FaleconoscoCheckboxes = styled.div`
  margin-bottom: 2rem;

  > label {
    margin-right: 1rem;
  }
`;

const FaleconoscoTextarea = styled.textarea`
  ${baseInputStyle}
  height: 8rem;
  resize: vertical;
  padding-top: 10px;
`;


const FaleconoscoContainerRodape = styled.div`
  width: 100%;
`;

const FaleconoscoAjudaParagrafo = styled.p`
  margin-right: 15rem;
  
  &::first-line {
    text-transform: uppercase;
  }
`;

const FaleconoscoBotao = styled.button`
  background: linear-gradient(135deg, #8B4A8B 0%, #A855A8 100%);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #7A3E7A 0%, #9333EA 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(139, 74, 139, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:focus {
    outline: 2px solid #8B4A8B;
    outline-offset: 2px;
  }
`;
