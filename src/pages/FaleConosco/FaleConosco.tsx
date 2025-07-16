import React from "react";
import './FaleConosco.css';
import FaleConosco1 from "../../assets/faleconosco.png";

export default function FaleConosco() {
  return (
    <div className="faleconosco-container">
      <div className="faleconosco-container-topo">
        <div className="faleconosco-formulario">
          <form className="faleconosco-form">
            <h3>Fale conosco</h3>
            <input 
              type="text"
              className="faleconosco-input"
              placeholder="Seu nome" />
            <input 
              type="text"
              className="faleconosco-input"
              placeholder="Seu e-mail para contato" />
            <input 
              type="text"
              className="faleconosco-input"
              placeholder="Seu telefone com DDD" />
            <input 
              type="text"
              className="faleconosco-input"
              placeholder="Seu CPF" />
            <div className="faleconosco-checkboxes">
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
            </div>
            <textarea 
              className="faleconosco-textarea faleconosco-input"
              placeholder="Sua mensagem..." />
            <button
              type="submit"
              className="faleconosco-botao"
            >{'Enviar mensagem >'}</button>
          </form>
        </div>
        <div className="faleconosco-imagem">
          <img src={FaleConosco1} />
        </div>
      </div>
      <div className="faleconosco-container-rodape">
        <h3>Ajuda - FAQ</h3>
        <p className="faleconosco-ajuda-paragrafo">
          QUEM SOMOS<br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
        </p>
        <p className="faleconosco-ajuda-paragrafo">
          Por que existimos?<br />
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
        </p>
        <p className="faleconosco-ajuda-paragrafo">
          O que a gente faz?<br />
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
  )
}