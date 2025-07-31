import Sobre1 from "../../assets/sobre1.png";
import Sobre2 from "../../assets/sobre2.png";
import Sobre3 from "../../assets/sobre3.png";
import styled from "styled-components";

export default function Sobre() {
  return (
    <section>
      <SobreContainer>
        <SobreContainerTopo>
          <SobreColuna>
            <div>
              <h3>Sobre a AL SKIN</h3>
              <SobreTextoParagrafo>
                QUEM SOMOS<br />
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </SobreTextoParagrafo>
              <SobreTextoParagrafo>
                Por que existimos?<br />
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </SobreTextoParagrafo>
              <SobreTextoParagrafo>
                O que a gente faz?<br />
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </SobreTextoParagrafo>
            </div>
            <div>
              <img src={Sobre1} />
            </div>
          </SobreColuna>
          <SobreColuna>
            <div>
              <img src={Sobre2} />
            </div>
            <div>
              <SobreTextoParagrafo>
                Vamos conversar?<br />
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </SobreTextoParagrafo>
              <SobreBotao>Fale conosco</SobreBotao>
            </div>
          </SobreColuna>
        </SobreContainerTopo>
        <SobreImagemFinal src={Sobre3} />
      </SobreContainer>
    </section>
  )
}

const SobreContainer = styled.div`
  width: 85%;
  margin: auto;
  margin-top: 3rem;
`;

const SobreContainerTopo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row; /* Vira linha em telas maiores */
    align-items: center;
  }
`;

const SobreColuna = styled.div`
  width: 50%;
`;

const SobreTextoParagrafo = styled.p`
  margin-right: 15rem;
  
  &::first-line {
    text-transform: uppercase;
  }
`;

const SobreImagemFinal = styled.img`
  width: 100%;
`;

const SobreBotao = styled.button`
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