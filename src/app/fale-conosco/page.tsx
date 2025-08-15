import React from 'react';
import FaleConosco1 from "../../assets/faleconosco.png";
import styles from './styles.module.css';

const FaleConosco: React.FC = () => {
  return (
    <div className={styles.FaleconoscoContainer}>
      <div className={styles.FaleconoscoContainerTopo}>
        <div className={styles.FaleconoscoFormContainer}>
          <form className={styles.FaleconoscoForm}>
            <h3 className={styles.FaleconoscoSubtitulo}>Fale conosco</h3>
            <input className={styles.FaleconoscoInput} 
              type="text"
              placeholder="Seu nome" />
            <input className={styles.FaleconoscoInput} 
              type="text"
              placeholder="Seu e-mail para contato" />
            <input className={styles.FaleconoscoInput} 
              type="text"
              placeholder="Seu telefone com DDD" />
            <input className={styles.FaleconoscoInput} 
              type="text"
              placeholder="Seu CPF" />
            <div className={styles.FaleconoscoCheckboxes}>
              Categoria:<br />
              <input className={styles.FaleconoscoCheckbox} id="duvidas" type="checkbox" />
              <label className={styles.FaleconoscoLabel} htmlFor="duvidas">Dúvidas</label>
              <input className={styles.FaleconoscoCheckbox} id="pedido" type="checkbox" />
              <label className={styles.FaleconoscoLabel} htmlFor="pedido">Problema com pedido</label>
              <input className={styles.FaleconoscoCheckbox} id="reclamacao" type="checkbox" />
              <label className={styles.FaleconoscoLabel} htmlFor="reclamacao">Reclamação</label><br />
              <input className={styles.FaleconoscoCheckbox} id="sugestao" type="checkbox" />
              <label className={styles.FaleconoscoLabel} htmlFor="sugestao">Sugestão</label>
              <input className={styles.FaleconoscoCheckbox} id="elogio" type="checkbox" />
              <label className={styles.FaleconoscoLabel} htmlFor="elogio">Elogios</label>
              <input className={styles.FaleconoscoCheckbox} id="outro" type="checkbox" />
              <label className={styles.FaleconoscoLabel} htmlFor="outro">Outro</label><br />
            </div>
            <textarea className={styles.FaleconoscoTextarea} 
              placeholder="Sua mensagem..." />
            <button className={styles.FaleconoscoBotao}
              type="submit"
            >
              {'Enviar mensagem >'}
            </button>
          </form>
        </div>
        <div className={styles.FaleconoscoFormContainer}>
          <img 
            className={styles.FaleconoscoImg} 
            src={FaleConosco1.src} 
            alt="Fale conosco"
          />
        </div>
      </div>
      <div className={styles.FaleconoscoContainerRodape}>
        <div className={styles.FaleconoscoSubtitulo}>Ajuda - FAQ</div>
        <p className={styles.FaleconoscoAjudaParagrafo}>
          QUEM SOMOS<br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
        </p>
        <p className={styles.FaleconoscoAjudaParagrafo}>
          Por que existimos?<br />
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
        </p>
        <p className={styles.FaleconoscoAjudaParagrafo}>
          O que a gente faz?<br />
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
  );
}

export default FaleConosco