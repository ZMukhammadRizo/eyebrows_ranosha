import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledHeader scrolled={scrolled}>
      <div className="container">
        <HeaderContainer>
          <Logo 
            as={motion.div}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Ranosha Eyebrows</h1>
          </Logo>
          
          <MenuToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </MenuToggle>
          
          <NavLinks>
            <NavItems>
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <NavLink
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    scrolled={scrolled}
                  >
                    {link.text}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
              >
                <ActionButton
                  as={Link}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Book Now
                </ActionButton>
              </motion.li>
            </NavItems>
          </NavLinks>
        </HeaderContainer>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            isOpen={isOpen}
            as={motion.div}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <MobileNavItems>
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.text}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <ActionButton
                  as={Link}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </ActionButton>
              </motion.li>
            </MobileNavItems>
            <CloseButton onClick={() => setIsOpen(false)}>×</CloseButton>
          </MobileMenu>
        )}
      </AnimatePresence>
    </StyledHeader>
  );
};

const navLinks = [
  { text: 'Home', to: 'hero' },
  { text: 'Services', to: 'services' },
  { text: 'Portfolio', to: 'works' },
  { text: 'Contact', to: 'contact' }
];

// Styled Components
const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.25s ease;
  background: ${({ scrolled }) => scrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(8px)' : 'none'};
  box-shadow: ${({ scrolled }) => scrolled ? '0 4px 12px rgba(0, 0, 0, 0.03)' : 'none'};
  
  @media (max-width: 768px) {
    padding: 0.8rem 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 0;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.div`
  font-family: var(--font-accent);
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--primary);
  letter-spacing: -0.5px;
  
  h1 {
    margin: 0;
    font-size: 1.6rem;
    font-weight: 500;
  }
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    
    h1 {
      font-size: 1.2rem;
    }
  }
  
  span {
    color: var(--accent);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 992px) {
    display: none;
  }
`;

const NavItems = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  font-size: 0.95rem;
  font-weight: 400;
  color: var(--text);
  position: relative;
  transition: all 0.25s ease;
  padding: 0.4rem 0;
  cursor: pointer;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: var(--primary);
    transition: width 0.25s ease;
  }
  
  &:hover, &.active {
    color: var(--primary);
    
    &:after {
      width: 100%;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    font-weight: 500;
  }
`;

const ActionButton = styled.button`
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.7rem 1.3rem;
  border-radius: var(--radius-md);
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  
  &:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow);
  }
  
  @media (max-width: 992px) {
    display: none;
  }
`;

const MenuToggle = styled.div`
  display: ${({ isOpen }) => isOpen ? 'none' : 'flex'};
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 1100;

  span {
    display: block;
    height: 3px;
    width: 100%;
    background: var(--secondary);
    border-radius: 10px;
    transition: all 0.3s ease;
    position: relative;
  }
  
  @media (min-width: 992px) {
    display: none;
  }
  
  @media (max-width: 480px) {
    width: 26px;
    height: 18px;
    
    span {
      height: 2px;
    }
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => isOpen ? '0' : '-100%'};
  width: 280px;
  height: 100vh;
  background: white;
  z-index: 1001;
  padding: 4rem 1.8rem 1.8rem;
  transition: all 0.3s ease;
  box-shadow: ${({ isOpen }) => isOpen ? '-4px 0 20px rgba(0, 0, 0, 0.05)' : 'none'};
  display: flex;
  flex-direction: column;
  
  @media (max-width: 480px) {
    width: 100%;
    padding: 4rem 1.5rem 1.5rem;
  }
`;

const MobileNavItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0;
  padding: 0;
  
  @media (max-width: 480px) {
    gap: 1.8rem;
    align-items: center;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--secondary);
  box-shadow: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  
  &:hover {
    color: var(--accent);
    background: none;
    transform: none;
  }
  
  @media (max-width: 480px) {
    top: 15px;
    right: 15px;
  }
`;

export default Header;