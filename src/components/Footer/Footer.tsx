import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: IconDefinition;
  href: string;
  label: string;
}

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: faInstagram,
      href: 'https://instagram.com/alskin',
      label: 'Instagram'
    },
    {
      icon: faFacebook,
      href: 'https://facebook.com/alskin',
      label: 'Facebook'
    },
    {
      icon: faYoutube,
      href: 'https://youtube.com/alskin',
      label: 'YouTube'
    },
    {
      icon: faPinterest,
      href: 'https://pinterest.com/alskin',
      label: 'Pinterest'
    },
    {
      icon: faTwitter,
      href: 'https://twitter.com/alskin',
      label: 'Twitter'
    },
    {
      icon: faLinkedin,
      href: 'https://linkedin.com/company/alskin',
      label: 'LinkedIn'
    },
    {
      icon: faGlobe,
      href: 'https://alskin.com.br',
      label: 'Website'
    }
  ];

  const footerSections: FooterSection[] = [
    {
      title: 'Sobre a AL SKIN',
      links: [
        { label: '- quem somos', href: '/about' },
        { label: '- time AL SKIN', href: '/about' },
        { label: '- carreiras', href: '/about' }
      ]
    },
    {
      title: 'Loja AL SKIN',
      links: [
        { label: '- lojas físicas', href: '/lojas' },
        { label: '- devolução', href: '/devolucao' }
      ]
    },
    {
      title: 'Atendimento',
      links: [
        { label: '- oi@alskin.com.br', href: 'mailto:oi@alskin.com.br' },
        { label: '- ajuda', href: '/ajuda' }
      ]
    },
    {
      title: 'Blog AL SKIN',
      links: [
        { label: '- Minha pele', href: '/blog/minha-pele' },
        { label: '- Ingredientes', href: '/blog/ingredientes' }
      ]
    }
  ];

  const handleSocialClick = (socialLink: SocialLink) => {
    console.log(`Abrindo ${socialLink.label}: ${socialLink.href}`);
  };

  return (
    <StyledFooter>
      {/* Social Icons Section */}
      <FooterSocial>
        <FooterContainer>
          <SocialIcons>
            {socialLinks.map((social, i) => (
              <SocialIcon
                data-testid={`footer-button-${i}`}
                key={social.label}
                onClick={() => handleSocialClick(social)}
                aria-label={`Abrir ${social.label}`}
                type="button"
              >
                <FontAwesomeIcon icon={social.icon} />
              </SocialIcon>
            ))}
          </SocialIcons>
        </FooterContainer>
      </FooterSocial>

      {/* Links Section */}
      <FooterLinks>
        <FooterContainer>
          <FooterSections>
            {footerSections.map((section) => (
              <FooterSection key={section.title}>
                <FooterSectionTitle>{section.title}</FooterSectionTitle>
                <FooterSectionLinks>
                  {section.links.map((link) => (
                    <FooterSectionLink key={link.label}>
                      <FooterLink to={link.href} key={link.label}>{link.label}</FooterLink> 
                    </FooterSectionLink>
                  ))}
                </FooterSectionLinks>
              </FooterSection>
            ))}
          </FooterSections>
        </FooterContainer>
      </FooterLinks>

      <FooterBottom>
        <FooterContainer>
          <div>
            <FooterBrandName>AL SKIN</FooterBrandName>
            <FooterCopyright>
              2025 AL SKIN. Todos os direitos reservados.
            </FooterCopyright>
            <FooterAddress>
              Av. Sete de Setembro, 467 - São Paulo/SP - CEP: 05240-010
            </FooterAddress>
          </div>
        </FooterContainer>
      </FooterBottom>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #f8f9fa;
  margin-top: 60px;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const FooterSocial = styled.div`
  background-color: #ffffff;
  padding: 40px 0;
  border-bottom: 1px solid #e9ecef;

  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
  }
  
  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SocialIcon = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #6c757d;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 20px;
  
  &:hover {
    background-color: #8B4A8B;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(139, 74, 139, 0.3);
  }

  &:focus {
    outline: 2px solid #8B4A8B;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }

  &:nth-child(1) { animation: ${fadeInUp} 0.6s ease-out 0.1s forwards; }
  &:nth-child(2) { animation: ${fadeInUp} 0.6s ease-out 0.15s forwards; }
  &:nth-child(3) { animation: ${fadeInUp} 0.6s ease-out 0.2s forwards; }
  &:nth-child(4) { animation: ${fadeInUp} 0.6s ease-out 0.25s forwards; }
  &:nth-child(5) { animation: ${fadeInUp} 0.6s ease-out 0.3s forwards; }
  &:nth-child(6) { animation: ${fadeInUp} 0.6s ease-out 0.35s forwards; }
  &:nth-child(7) { animation: ${fadeInUp} 0.6s ease-out 0.4s forwards; }
`;

/* Links Section */
const FooterLinks = styled.div`
  background-color: #f8f9fa;
  padding: 50px 0;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const FooterSections = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 25px;
    text-align: center;
  }
  
`;

const FooterSection = styled.div`
  text-align: left;

  &:nth-child(1) { animation: ${fadeInUp} 0.6s ease-out 0.1s forwards; }
  &:nth-child(2) { animation: ${fadeInUp} 0.6s ease-out 0.2s forwards; }
  &:nth-child(3) { animation: ${fadeInUp} 0.6s ease-out 0.3s forwards; }
  &:nth-child(4) { animation: ${fadeInUp} 0.6s ease-out 0.4s forwards; }
`;

const FooterSectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const FooterSectionLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterSectionLink = styled.li`
  margin-bottom: 12px;
`;

const FooterLink = styled(Link)`
  background: none;
  border: none;
  color: #6c757d;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s ease;
  text-align: left;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  
  &:hover {
    color: #8B4A8B;
  }
  
  &:focus {
    outline: 2px solid #8B4A8B;
    outline-offset: 2px;
    border-radius: 2px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

/* Copyright Section */
const FooterBottom = styled.div`
  background-color: #333;
  color: white;
  padding: 30px 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 25px 0;
  }
`;

const FooterBrandName = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: white;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const FooterCopyright = styled.p`
  font-size: 14px;
  margin: 0 0 8px 0;
  color: #adb5bd;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const FooterAddress = styled.p`
  font-size: 12px;
  margin: 0;
  color: #6c757d;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export default Footer;