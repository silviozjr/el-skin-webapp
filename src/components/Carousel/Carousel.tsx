import { useEffect, useState } from "react"
import Img1 from '../../assets/img1.png'
import Img2 from '../../assets/img2.png'
import Img3 from '../../assets/img3.png'
import styles from './Carousel.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

interface ITextoCarousel {
  text: string;
  type: 'title' | 'subtitle' | 'description' | 'discount' | 'coupon';
}

interface ICarouselItem {
  texts: ITextoCarousel[];
  backgroundImage: string;
}

export default function Carousel() {

  const [idxCarousel, setIdxCarousel] = useState(0);

    function previousItem() {
    setIdxCarousel((prevIdx) => (prevIdx === 0 ? items.length - 1 : prevIdx - 1));
  }

  function nextItem() {
    setIdxCarousel((prevIdx) => (prevIdx === items.length - 1 ? 0 : prevIdx + 1));
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setIdxCarousel(prevIdxItemAtual => {
        return (prevIdxItemAtual + 1) % items.length;
      });
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const items: ICarouselItem[] = [
    {
      texts: [
        { text: 'confira nossa linha', type: 'subtitle', },
        { text: 'corporal', type: 'title', },
        { text: 'com benefícios além da hidratação', type: 'description', },
      ],
      backgroundImage: Img1,
    },
    {
      texts: [
        { text: 'toda linha', type: 'subtitle', },
        { text: 'anti-age', type: 'title', },
        { text: 'com 15% OFF', type: 'discount', },
        { text: 'ANTIAGE15', type: 'coupon', },
      ],
      backgroundImage: Img2,
    },
    {
      texts: [
        { text: 'kits incríveis', type: 'title', },
        { text: 'até 50% OFF', type: 'discount', },
        { text: 'QUEROTODOS', type: 'coupon', },
      ],
      backgroundImage: Img3,
    },
  ]

  return (
    <section
      className={styles.carouselSection}
      style={{ 
        backgroundImage: `url(${items[idxCarousel].backgroundImage})`,
      }}
    >
      <div
        className={styles.carouselContainer}
      >
        <div className={styles.carouselContent}>
          <button className={styles.carouselNavButton} aria-label="Voltar" onClick={previousItem}>
            <FontAwesomeIcon width="60" height="24" icon={faAngleLeft} style={{ color: 'white' }} />
          </button>
          
          <div className={styles.carouselText}>
            {items[idxCarousel].texts.map( item => {
              switch (item.type) {
                case "title":
                  return (<h1 className={styles.carouselTitle}>{item.text}</h1>)
                case "subtitle":
                  return (<span className={styles.carouselSubtitle}>{item.text}</span>)
                case "description":
                  return (<p className={styles.carouselDescription}>{item.text}</p>)
                case "discount":
                  return (<span className={styles.carouselDiscount}>{item.text}</span>)
                case "coupon":
                  return (
                    <div className={styles.carouselCouponContainer}>
                      <p className={styles.carouselCouponLabel}>use o cupom</p>
                      <span className={styles.carouselCoupon}>{item.text}</span>
                    </div>
                  )
                default:
                  return <div>{item.text}</div>
              }
            })}
            <button 
              className={styles.carouselCtaButton}>
              comprar agora
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          <button className={styles.carouselNavButton} aria-label="Próximo" onClick={nextItem}>
            <FontAwesomeIcon width="60" height="24" icon={faAngleRight} style={{ color: 'white' }} />
          </button>
        </div>
      </div>
    </section>
  )
}