import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { carouselService } from "../../services/carouselService"
import styled, { keyframes } from "styled-components"

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
    <CarouselSection
      style={{
        backgroundImage: `url(${items[idxCarousel].backgroundImage})`,
      }}
    >
      <CarouselContainer
        data-testid="carousel-container"
      >
        <CarouselContent>
          <CarouselNavButton data-testid="button-previous" aria-label="Voltar" onClick={previousItem}>
            <FontAwesomeIcon width="60" height="24" icon={faAngleLeft} style={{ color: 'white' }} />
          </CarouselNavButton>

          <CarouselText>
            {items[idxCarousel].subtitle && <CarouselSubtitle>{items[idxCarousel].subtitle}</CarouselSubtitle>}
            {items[idxCarousel].title && <CarouselTitle>{items[idxCarousel].title}</CarouselTitle>}
            {items[idxCarousel].description && <CarouselDescription>{items[idxCarousel].description}</CarouselDescription>}
            {items[idxCarousel].discount && <CarouselDiscount>{items[idxCarousel].discount}</CarouselDiscount>}
            {items[idxCarousel].coupon && (
              <CarouselCouponContainer>
                <CarouselCouponLabel>use o cupom</CarouselCouponLabel>
                <CarouselCoupon>{items[idxCarousel].coupon}</CarouselCoupon>
              </CarouselCouponContainer>
            )}
            <CarouselCtaButton>
              comprar agora
              <FontAwesomeIcon icon={faAngleRight} />
            </CarouselCtaButton>
          </CarouselText>

          <CarouselNavButton data-testid="button-next" aria-label="Próximo" onClick={nextItem}>
            <FontAwesomeIcon width="60" height="24" icon={faAngleRight} style={{ color: 'white' }} />
          </CarouselNavButton>
        </CarouselContent>
      </CarouselContainer>
    </CarouselSection>
    )
  )
}

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* carouselSection.css */
const CarouselSection = styled.section`
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 40%, transparent 60%),
              linear-gradient(45deg, #f8f6f3 0%, #e8e4e0 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;


const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const CarouselContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 1000px;
`;

const CarouselNavButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateX(-2px);
  }

  animation: ${fadeInUp} 0.6s ease-out forwards;
  animation-delay: 0.05s;
`;

const CarouselText = styled.div`
  flex: 1;

  animation: ${fadeInUp} 0.6s ease-out forwards;
`;

const CarouselSubtitle = styled.span`
  display: block;
  font-size: 16px;
  color: #8B4A8B;
  margin-bottom: 8px;
  font-weight: 400;
  letter-spacing: 0.5px;

  animation: ${fadeInUp} 0.6s ease-out forwards;
  animation-delay: 0.1s;
`;

const CarouselTitle = styled.h1`
  font-size: 64px;
  font-weight: 700;
  color: #8B4A8B;
  margin: 0;
  margin-bottom: 16px;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(139, 74, 139, 0.1);

  animation: ${fadeInUp} 0.6s ease-out forwards;
  animation-delay: 0.2s;
`;

const CarouselDescription = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 32px;
  line-height: 1.5;
  max-width: 400px;

  animation: ${fadeInUp} 0.6s ease-out forwards;
  animation-delay: 0.3s;
`;

const CarouselDiscount = styled.span`
  background-color: #DC5E5E;
  padding: 0.3rem 1rem;
  border-radius: 0.3rem;
  color: #FFF;

  animation: ${fadeInUp} 0.6s ease-out forwards;
  animation-delay: 0.3s;
`;

const CarouselCtaButton = styled.button`
  background: linear-gradient(135deg, #8B4A8B 0%, #A855A8 100%);
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 32px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 16px rgba(139, 74, 139, 0.3);
  text-transform: lowercase;
  
  &:hover {
    background: linear-gradient(135deg, #7A3E7A 0%, #9333EA 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(139, 74, 139, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }

  animation: ${fadeInUp} 0.6s ease-out forwards;
  animation-delay: 0.4s;
`;

const CarouselCouponContainer = styled.div`
  margin-bottom: 1rem;

  animation: ${fadeInUp} 0.6s ease-out forwards;
  animation-delay: 0.3s;
`;

const CarouselCouponLabel = styled.p`
  font-size: 18px;
  color: #7A3E7A;
  margin-bottom: 0.5rem;
  line-height: 1.5;
  max-width: 400px;
`;

const CarouselCoupon = styled.span`
  border: 1px dashed #7A3E7A;
  padding: 0.5rem 1rem;
  color: #7A3E7A;
`;