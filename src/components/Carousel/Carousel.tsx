import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { carouselService } from "../../services/carouselService"
import styles from './Carousel.module.css'

interface ICarouselItem {
  title: string;
  subtitle: string;
  description?: string;
  coupon?: string;
  discount?: string;
  backgroundImage: string;
}

export default function Carousel() {

  const [idxCarousel, setIdxCarousel] = useState(0);
  const [items, setItems] = useState<ICarouselItem[]>([]);

  function previousItem() {
    setIdxCarousel((prevIdx) => (prevIdx === 0 ? items.length - 1 : prevIdx - 1));
  }

  function nextItem() {
    setIdxCarousel((prevIdx) => (prevIdx === items.length - 1 ? 0 : prevIdx + 1));
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setIdxCarousel(prevIdxItemAtual => {
        return items.length > 0 ? (prevIdxItemAtual + 1) % items.length : 0;
      });
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [items]);

  useEffect(() => {
    async function buscarItensCarousel() {
      const newItems = await carouselService.getCarouselItems();
      setItems(newItems);
    }

    buscarItensCarousel();
  }, []);

  return (
    items.length === 0 ? <></> : (
    <section
      className={styles.carouselSection}
      style={{
        backgroundImage: `url(${items[idxCarousel].backgroundImage})`,
      }}
    >
      <div
        data-testid="carousel-container"
        className={styles.carouselContainer}
      >
        <div className={styles.carouselContent}>
          <button data-testid="button-previous" className={styles.carouselNavButton} aria-label="Voltar" onClick={previousItem}>
            <FontAwesomeIcon width="60" height="24" icon={faAngleLeft} style={{ color: 'white' }} />
          </button>

          <div className={styles.carouselText}>
            {items[idxCarousel].subtitle && <span className={styles.carouselSubtitle}>{items[idxCarousel].subtitle}</span>}
            {items[idxCarousel].title && <h1 className={styles.carouselTitle}>{items[idxCarousel].title}</h1>}
            {items[idxCarousel].description && <p className={styles.carouselDescription}>{items[idxCarousel].description}</p>}
            {items[idxCarousel].discount && <span className={styles.carouselDiscount}>{items[idxCarousel].discount}</span>}
            {items[idxCarousel].coupon && (
              <div className={styles.carouselCouponContainer}>
                <p className={styles.carouselCouponLabel}>use o cupom</p>
                <span className={styles.carouselCoupon}>{items[idxCarousel].coupon}</span>
              </div>
            )}
            <button
              className={styles.carouselCtaButton}>
              comprar agora
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          <button data-testid="button-next" className={styles.carouselNavButton} aria-label="Próximo" onClick={nextItem}>
            <FontAwesomeIcon width="60" height="24" icon={faAngleRight} style={{ color: 'white' }} />
          </button>
        </div>
      </div>
    </section>
    )
  )
}