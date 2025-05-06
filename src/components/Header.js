import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FaPhone, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

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
  
  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Our works', to: 'works' },
    { name: 'Contact', to: 'contact' },
  ];
  
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };
  
  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    })
  };

  const handleBookNow = () => {
    // Scroll to contact section when Book Now is clicked
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <StyledHeader scrolled={scrolled}>
      <div className="container">
        <div className="header-content">
          <RouterLink to="/" className="logo">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span>Ranosha</span> Beauty Salon
            </motion.div>
          </RouterLink>
          
          <motion.nav 
            className="desktop-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul>
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <Link 
                    to={link.to} 
                    smooth={true} 
                    duration={400} 
                    offset={-80}
                    activeClass="active"
                    spy={true}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
          
          <motion.div 
            className="header-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="tel:+17473069188" className="phone-link">
              <FaPhone /> +1 747-306-9188
            </a>
            <motion.button 
              className="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={handleBookNow}
            >
              Book Now
            </motion.button>
          </motion.div>
          
          <div className="mobile-nav-toggle">
            <motion.button 
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-nav"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="mobile-nav-content">
              <ul>
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    custom={index}
                    variants={linkVariants}
                  >
                    <Link 
                      to={link.to} 
                      smooth={true} 
                      duration={400} 
                      offset={-80}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mobile-contact">
                <a href="tel:+17473069188" className="phone-link">
                  <FaPhone /> +1 747-306-9188
                </a>
                <motion.button 
                  className="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setIsOpen(false);
                    handleBookNow();
                  }}
                >
                  Book Online
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: ${props => props.scrolled ? 'var(--light)' : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none'};
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${props => props.scrolled ? '1px solid rgba(var(--primary-rgb), 0.1)' : 'none'};
  height: 80px;
  display: flex;
  align-items: center;
  
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  .logo {
    font-family: var(--font-accent);
    font-size: 1.8rem;
    font-weight: 500;
    color: ${props => props.scrolled ? 'var(--secondary-dark)' : 'var(--light)'};
    text-shadow: ${props => props.scrolled ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.3)'};
    position: relative;
    
    span {
      color: var(--primary);
      font-weight: 600;
      position: relative;
      
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: var(--primary);
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.3s ease-out;
      }
    }
    
    &:hover span:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
  
  .desktop-nav {
    display: block;
    
    @media (max-width: 991px) {
      display: none;
    }
    
    ul {
      display: flex;
      list-style: none;
      
      li {
        margin: 0 1.2rem;
        
        a {
          color: ${props => props.scrolled ? 'var(--secondary)' : 'var(--light)'};
          font-weight: 500;
          font-size: 0.95rem;
          letter-spacing: 1px;
          position: relative;
          padding: 0.5rem 0;
          cursor: pointer;
          text-transform: uppercase;
          
          &:after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: -4px;
            left: 0;
            background-color: var(--primary);
            transform-origin: bottom right;
            transition: transform 0.3s ease-out;
          }
          
          &:hover, &.active {
            color: ${props => props.scrolled ? 'var(--primary)' : 'var(--primary)'};
            
            &:after {
              transform: scaleX(1);
              transform-origin: bottom left;
            }
          }
        }
      }
    }
  }
  
  .header-right {
    display: flex;
    align-items: center;
    
    @media (max-width: 991px) {
      display: none;
    }
    
    .phone-link {
      display: flex;
      align-items: center;
      margin-right: 1.5rem;
      color: ${props => props.scrolled ? 'var(--secondary)' : 'var(--light)'};
      font-weight: 500;
      position: relative;
      padding: 0.5rem 0;
      
      svg {
        margin-right: 0.5rem;
        color: var(--primary);
        transition: transform 0.3s ease;
      }
      
      &:hover {
        color: var(--primary);
        
        svg {
          transform: rotate(-10deg) scale(1.1);
        }
      }
    }
    
    .whatsapp-button {
      display: flex;
      align-items: center;
      margin-right: 1.5rem;
      color: ${props => props.scrolled ? 'var(--secondary)' : 'var(--light)'};
      font-weight: 500;
      position: relative;
      padding: 0.5rem 0;
      
      svg {
        margin-right: 0.5rem;
        color: var(--primary);
        transition: transform 0.3s ease;
      }
      
      &:hover {
        color: var(--primary);
        
        svg {
          transform: rotate(-10deg) scale(1.1);
        }
      }
    }
  }
  
  .mobile-nav-toggle {
    display: none;
    
    @media (max-width: 991px) {
      display: block;
    }
    
    button {
      background: transparent;
      border: none;
      color: ${props => props.scrolled ? 'var(--secondary-dark)' : 'var(--light)'};
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 1rem;
      
      &:hover {
        color: var(--primary);
        transform: scale(1.1);
      }
    }
  }
  
  .mobile-nav {
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    max-width: 350px;
    height: 100vh;
    background: var(--light);
    z-index: 1001;
    display: block;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 5px;
      height: 100%;
      background: var(--primary);
      opacity: 0.8;
    }
  }
  
  .mobile-nav-content {
    padding: 5rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    
    ul {
      list-style: none;
      margin-bottom: 2rem;
    }
    
    li {
      margin-bottom: 1.5rem;
      
      a {
        color: var(--secondary-dark);
        font-size: 1.2rem;
        font-weight: 500;
        letter-spacing: 0.5px;
        transition: var(--transition);
        display: block;
        padding: 0.5rem 0;
        position: relative;
        overflow: hidden;
        
        &:before {
          content: '';
          position: absolute;
          width: 4px;
          height: 100%;
          background: var(--primary);
          left: -10px;
          top: 0;
          transition: all 0.3s ease;
        }
        
        &:hover {
          color: var(--primary);
          transform: translateX(5px);
          
          &:before {
            left: -5px;
          }
        }
      }
    }
  }
  
  .mobile-contact {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    
    .phone-link, .whatsapp-button {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: var(--secondary);
      font-weight: 500;
      padding: 0.8rem 0;
      position: relative;
      
      svg {
        margin-right: 0.8rem;
        color: var(--primary);
        font-size: 1.2rem;
      }
      
      &:hover {
        color: var(--primary);
      }
    }
    
    .button {
      width: 100%;
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  
  @media (max-width: 480px) {
    height: 70px;
    
    .logo {
      font-size: 1.5rem;
    }
    
    .mobile-nav {
      width: 100%;
      max-width: 100%;
    }
  }
`;

export default Header;