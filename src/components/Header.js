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
        <Logo 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Брови от Раноши</h1>
        </Logo>
        
        <MenuToggle onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </MenuToggle>
        
        <NavDesktop>
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
              <BookButton
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Записаться
              </BookButton>
            </motion.li>
          </NavItems>
        </NavDesktop>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <MobileNav
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
                <BookButton
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                >
                  Записаться
                </BookButton>
              </motion.li>
            </MobileNavItems>
            <CloseButton onClick={() => setIsOpen(false)}>×</CloseButton>
          </MobileNav>
        )}
      </AnimatePresence>
    </StyledHeader>
  );
};

const navLinks = [
  { text: 'Главная', to: 'hero' },
  { text: 'Услуги', to: 'services' },
  { text: 'Контакты', to: 'contact' }
];

// Styled Components
const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: ${props => props.scrolled ? '10px 0' : '20px 0'};
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  box-shadow: ${props => props.scrolled ? 'var(--shadow)' : 'none'};
  transition: var(--transition);
  backdrop-filter: ${props => props.scrolled ? 'blur(5px)' : 'none'};

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Logo = styled(motion.div)`
  h1 {
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    margin-bottom: 0;
    color: var(--secondary);
  }
`;

const NavDesktop = styled.nav`
  display: none;
  
  @media (min-width: 992px) {
    display: block;
  }
`;

const NavItems = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  font-weight: 500;
  position: relative;
  cursor: pointer;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background: var(--accent);
    bottom: -5px;
    left: 0;
    transition: var(--transition);
  }
  
  &:hover:after, &.active:after {
    width: 100%;
  }
`;

const BookButton = styled(Link)`
  background: var(--accent);
  color: white;
  padding: 10px 25px;
  border-radius: 50px;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 600;
  display: inline-block;
  
  &:hover {
    background: var(--secondary);
    color: white;
    transform: translateY(-3px);
    box-shadow: var(--shadow);
  }
`;

const MenuToggle = styled.div`
  display: flex;
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
    transition: var(--transition);
  }
  
  @media (min-width: 992px) {
    display: none;
  }
`;

const MobileNav = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 350px;
  height: 100vh;
  background: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

const MobileNavItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  
  &:hover {
    color: var(--accent);
    background: none;
    transform: none;
  }
`;

export default Header; 