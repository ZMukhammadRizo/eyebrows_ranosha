import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <StyledFooter>
      <div className="container">
        <FooterGrid>
          <FooterInfo>
            <FooterLogo>Брови от Раноши</FooterLogo>
            <FooterDesc>
              Эксклюзивные услуги по оформлению бровей премиум-класса. Наша миссия — подчеркнуть вашу естественную красоту и помочь вам чувствовать себя увереннее.
            </FooterDesc>
            <SocialLinks>
              <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialLink>
            </SocialLinks>
          </FooterInfo>
          
          <FooterNav>
            <FooterHeading>Быстрые ссылки</FooterHeading>
            <FooterLinks>
              <FooterLink to="hero" smooth={true} duration={500}>Главная</FooterLink>
              <FooterLink to="about" smooth={true} duration={500}>О нас</FooterLink>
              <FooterLink to="services" smooth={true} duration={500}>Услуги</FooterLink>
              <FooterLink to="testimonials" smooth={true} duration={500}>Отзывы</FooterLink>
              <FooterLink to="contact" smooth={true} duration={500}>Контакты</FooterLink>
            </FooterLinks>
          </FooterNav>
          
          <FooterServices>
            <FooterHeading>Наши услуги</FooterHeading>
            <FooterLinks>
              <FooterLinkItem>Коррекция бровей</FooterLinkItem>
              <FooterLinkItem>Окрашивание бровей</FooterLinkItem>
              <FooterLinkItem>Ламинирование бровей</FooterLinkItem>
              <FooterLinkItem>Микроблейдинг</FooterLinkItem>
              <FooterLinkItem>Индивидуальные консультации</FooterLinkItem>
            </FooterLinks>
          </FooterServices>
          
          <FooterContact>
            <FooterHeading>Контактная информация</FooterHeading>
            <ContactLinks>
              <ContactItem>
                <FaMapMarkerAlt />
                <span>ул. Пушкина 123, Москва</span>
              </ContactItem>
              <ContactItem>
                <FaPhone />
                <span>+7 (999) 123-4567</span>
              </ContactItem>
              <ContactItem>
                <FaEnvelope />
                <span>info@broviranosha.ru</span>
              </ContactItem>
            </ContactLinks>
            <OpeningHours>
              <OpeningHeading>Часы работы:</OpeningHeading>
              <OpeningText>Пн-Пт: 10:00 - 20:00</OpeningText>
              <OpeningText>Сб-Вс: 11:00 - 18:00</OpeningText>
            </OpeningHours>
          </FooterContact>
        </FooterGrid>
        
        <FooterBottom>
          <Copyright>© {year} Брови от Раноши. Все права защищены.</Copyright>
          <BottomLinks>
            <BottomLink href="#">Политика конфиденциальности</BottomLink>
            <BottomLink href="#">Условия использования</BottomLink>
          </BottomLinks>
        </FooterBottom>
      </div>
    </StyledFooter>
  );
};

// Styled Components
const StyledFooter = styled.footer`
  background-color: var(--secondary);
  color: white;
  padding: 4rem 0 1rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 992px) {
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
  }
`;

const FooterInfo = styled.div`
  @media (min-width: 768px) {
    grid-column: span 2;
  }
  
  @media (min-width: 992px) {
    grid-column: span 1;
  }
`;

const FooterLogo = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
`;

const FooterDesc = styled.p`
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  font-size: 1.2rem;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary);
    transform: translateY(-3px);
  }
`;

const FooterNav = styled.div``;

const FooterServices = styled.div``;

const FooterContact = styled.div``;

const FooterHeading = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: white;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 40px;
    height: 2px;
    background-color: var(--primary);
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled(Link)`
  display: block;
  margin-bottom: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  transition: var(--transition);
  cursor: pointer;
  
  &:hover {
    color: var(--primary);
    transform: translateX(5px);
  }
`;

const FooterLinkItem = styled.li`
  margin-bottom: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary);
    transform: translateX(5px);
  }
`;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  
  svg {
    color: var(--primary);
    font-size: 1.2rem;
  }
`;

const OpeningHours = styled.div`
  margin-top: 1.5rem;
`;

const OpeningHeading = styled.h5`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: white;
`;

const OpeningText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const BottomLink = styled.a`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  text-decoration: none;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary);
  }
`;

export default Footer; 