import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <StyledFooter>
      <div className="container">
        <FooterGrid>
          <FooterInfo>
            <FooterLogo>Ranosha Eyebrows</FooterLogo>
            <FooterDesc>
              Exclusive premium eyebrow styling services. Our mission is to enhance your natural beauty and help you feel more confident using eco-friendly products.
            </FooterDesc>
            <SocialLinks>
              <SocialLink href="https://www.instagram.com/ranosha_la/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="https://api.whatsapp.com/send/?phone=17473069188&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </SocialLink>
            </SocialLinks>
          </FooterInfo>
          
          <FooterNav>
            <FooterHeading>Quick Links</FooterHeading>
            <FooterLinks>
              <FooterLink to="hero" smooth={true} duration={500}>Home</FooterLink>
              <FooterLink to="about" smooth={true} duration={500}>About Us</FooterLink>
              <FooterLink to="services" smooth={true} duration={500}>Services</FooterLink>
              <FooterLink to="works" smooth={true} duration={500}>Portfolio</FooterLink>
              <FooterLink to="contact" smooth={true} duration={500}>Contact</FooterLink>
            </FooterLinks>
          </FooterNav>
          
          <FooterServices>
            <FooterHeading>Our Services</FooterHeading>
            <FooterLinks>
              <FooterLinkItem>Eyebrow Shaping</FooterLinkItem>
              <FooterLinkItem>Eyebrow Tinting</FooterLinkItem>
              <FooterLinkItem>Eyebrow Lamination</FooterLinkItem>
              <FooterLinkItem>Microblading</FooterLinkItem>
              <FooterLinkItem>Individual Consultations</FooterLinkItem>
            </FooterLinks>
          </FooterServices>
          
          <FooterContact>
            <FooterHeading>Contact Information</FooterHeading>
            <ContactLinks>
              <ContactItem>
                <FaMapMarkerAlt />
                <span>21250 Hawthorne Blvd, Torrance, CA 90503</span>
              </ContactItem>
              <ContactItem>
                <FaPhone />
                <span>+1 747-306-9188</span>
              </ContactItem>
              <ContactItem>
                <FaEnvelope />
                <span>beautysalonranosha@gmail.com</span>
              </ContactItem>
            </ContactLinks>
            <OpeningHours>
              <OpeningHeading>Working Hours:</OpeningHeading>
              <OpeningText>Mon-Sat: 10:00 - 23:30</OpeningText>
              <OpeningText>Sun: 24hours</OpeningText>
            </OpeningHours>
          </FooterContact>
        </FooterGrid>
        
        <FooterBottom>
          <Copyright>© {year} Ranosha Eyebrows. All rights reserved.</Copyright>
          <BottomLinks>
            <BottomLink to="/privacy-policy">Privacy Policy</BottomLink>
            <BottomLink to="/terms-of-use">Terms of Use</BottomLink>
            <BottomLink to="/cookie-policy">Cookie Policy</BottomLink>
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

const FooterLogo = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--light);
  font-family: var(--font-accent);
  
  span {
    color: var(--primary);
    font-weight: 600;
  }
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
  color: var(--light);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--primary);
    transform: translateY(-3px) rotate(5deg);
  }
`;

const FooterNav = styled.div``;

const FooterServices = styled.div``;

const FooterContact = styled.div``;

const FooterHeading = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  font-family: var(--font-accent);
  letter-spacing: 1px;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 40px;
    height: 2px;
    background-color: var(--primary);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 60px;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled(ScrollLink)`
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

const BottomLink = styled(RouterLink)`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.85rem;
  transition: var(--transition);
  cursor: pointer;
  
  &:hover {
    color: var(--primary);
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default Footer;