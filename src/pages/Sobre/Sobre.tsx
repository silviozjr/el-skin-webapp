import React from "react";
import Header from "../../components/Header/Header";
import "./Sobre.css";

import Sobre1 from "../../assets/sobre1.png";
import Sobre2 from "../../assets/sobre2.png";
import Sobre3 from "../../assets/sobre3.png";
import Footer from "../../components/Footer/Footer";

export default function Sobre() {
  return (
    <>
      <Header/>

      <section className="sobre-section">
        <div className="sobre-container">
          <div className="sobre-container-topo">
            <div className="sobre-coluna">
              <div className="sobre-texto">
                <h3 className="sobre-texto-title">Sobre a AL SKIN</h3>
                <p className="sobre-texto-paragrafo">
                  QUEM SOMOS<br/>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                </p>
                <p className="sobre-texto-paragrafo">
                  Por que existimos?<br/>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                </p>
                <p className="sobre-texto-paragrafo">
                  O que a gente faz?<br/>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>
              </div>
              <div className="sobre-imagem-container">
                <img className="sobre-imagem" src={Sobre1} />
              </div>
            </div>
            <div className="sobre-coluna">
              <div className="sobre-imagem-container">
                <img className="sobre-imagem" src={Sobre2} />
              </div>
              <div className="sobre-texto">
                <p className="sobre-texto-paragrafo">
                  Vamos conversar?<br/>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                </p>
                <button className="sobre-botao">Fale conosco</button>
              </div>
            </div>
          </div>
          <img className="sobre-imagem-final" src={Sobre3} />
        </div>
      </section>

      <Footer/>

    </>
  )
}