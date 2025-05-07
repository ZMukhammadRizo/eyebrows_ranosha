import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import hero from "../assets/hero.JPG";

// High-quality hero image for minimalist beauty salon
const heroImage = hero;

const HeroSection = () => {
  return (
    <StyledHero id="home">
      <div className="overlay"></div>
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1] 
          }}
        >
          <motion.span 
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Expert Permanent Makeup Salon
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Enhance Your<br/>Natural Beauty
          </motion.h1>
          
          <motion.div 
            className="divider"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          ></motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            Ranosha Beauty Salon — Permanent Makeup & Henna Studio in Torrance, CA

Discover the art of timeless beauty at Ranosha — your destination for natural-looking permanent makeup and organic henna in the heart of Torrance.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
          >
            <Link 
              to="services" 
              smooth={true} 
              duration={800} 
              offset={-80}
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Explore Services
              </motion.button>
            </Link>
            
            <Link 
              to="contact" 
              smooth={true} 
              duration={800} 
              offset={-80}
            >
              <motion.button 
                className="button-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Book Appointment
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div 
          className="mouse"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut" 
          }}
        >
          <motion.div className="scroll"></motion.div>
        </motion.div>
        <p>Scroll Down</p>
      </motion.div>
      
      <motion.div 
        className="floating-elements"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <motion.div 
          className="element element-1"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 6,
            ease: "easeInOut" 
          }}
        ></motion.div>
        
        <motion.div 
          className="element element-2"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 7,
            ease: "easeInOut",
            delay: 0.5
          }}
        ></motion.div>
        
        <motion.div 
          className="element element-3"
          animate={{ 
            y: [0, 12, 0],
            x: [0, -8, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut",
            delay: 1 
          }}
        ></motion.div>
      </motion.div>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  height: 100vh;
  min-height: 700px;
  position: relative;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.5) 100%);
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, rgba(198, 156, 109, 0.1) 0%, transparent 70%);
    }
  }

  .container {
    position: relative;
    z-index: 2;
  }

  .hero-content {
    position: relative;
    z-index: 10;
    color: var(--light);
    max-width: 650px;
    
    &:before {
      content: '';
      position: absolute;
      top: -30px;
      left: 0;
      width: 80px;
      height: 80px;
      border-top: 2px solid var(--primary);
      border-left: 2px solid var(--primary);
      opacity: 0.6;
    }
    
    &:after {
      content: '';
      position: absolute;
      bottom: -30px;
      right: 0;
      width: 80px;
      height: 80px;
      border-bottom: 2px solid var(--primary);
      border-right: 2px solid var(--primary);
      opacity: 0.6;
    }
  }

  .subtitle {
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: var(--primary);
    position: relative;
    padding-left: 40px;
    
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      width: 30px;
      height: 1px;
      background-color: var(--primary);
    }
  }

  h1 {
    margin-bottom: 1.5rem;
    color: var(--light);
    line-height: 1.1;
  }

  .divider {
    background: var(--accent);
    margin: 2rem 0;
  }

  p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    line-height: 1.8;
    margin-bottom: 2rem;
    max-width: 600px;
    font-weight: 300;
  }

  .hero-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }

  .scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
    color: var(--light);
    
    p {
      font-size: 0.8rem;
      margin-top: 0.5rem;
      opacity: 0.8;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }

  .mouse {
    width: 26px;
    height: 40px;
    border: 2px solid var(--light);
    border-radius: 20px;
    position: relative;
  }

  .scroll {
    width: 4px;
    height: 8px;
    background: var(--accent);
    border-radius: 2px;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
  }

  .floating-elements {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    pointer-events: none;
  }

  .element {
    position: absolute;
    border-radius: 50%;
    opacity: 0.15;
  }

  .element-1 {
    width: 300px;
    height: 300px;
    top: 15%;
    right: 10%;
    background: var(--primary);
    filter: blur(60px);
  }

  .element-2 {
    width: 200px;
    height: 200px;
    bottom: 20%;
    right: 20%;
    background: var(--accent);
    filter: blur(50px);
  }

  .element-3 {
    width: 250px;
    height: 250px;
    bottom: 10%;
    left: 15%;
    background: var(--secondary-light);
    filter: blur(55px);
  }

  @media (max-width: 768px) {
    .hero-content {
      padding: 0;
      text-align: center;
      margin: 0 auto;
    }

    .divider {
      margin: 1.5rem auto;
    }

    .hero-buttons {
      justify-content: center;
    }

    .element-1 {
      width: 200px;
      height: 200px;
      top: 10%;
      right: -50px;
    }

    .element-2 {
      width: 150px;
      height: 150px;
      bottom: 15%;
      right: 10%;
    }

    .element-3 {
      width: 180px;
      height: 180px;
      bottom: 5%;
      left: -50px;
    }
  }

  @media (max-width: 480px) {
    min-height: 90vh;
    
    .hero-buttons {
      flex-direction: column;
      gap: 0.8rem;
    }

    p br {
      display: none;
    }

    .element-1 {
      display: none;
    }
  }
`;

export default HeroSection;