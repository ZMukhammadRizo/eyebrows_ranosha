import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { FaEye, FaKiss, FaLeaf, FaSpa, FaGem } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      icon: <FaLeaf />,
      title: 'Naturally tinted eyebrows',
      description: 'Well-shaped, naturally tinted eyebrows enhance your features and add expressiveness. We use safe, hypoallergenic mineral pigments and gentle techniques for a soft, lasting result that highlights your individuality.',
    },
    {
      icon: <FaKiss />,
      title: 'Permanent lip makeup',
      description: 'Permanent lip makeup defines the shape and contour, giving lips a fresh, natural look. Gentle techniques and soft shades ensure comfort and lasting, beautiful results.',

    },
    {
      icon: <FaSpa />,
      title: 'Henna nail art',
      description: 'Henna nail art is a stylish way to express individuality and taste. Made with natural, skin-safe henna, the designs stay vibrant and beautiful for several days — ideal for both everyday wear and special occasions.',

    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };
  
  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  return (
    <StyledServices id="services">
      <div className="container">
        <SectionHeading 
          subtitle="Premium Services" 
          title="Elevate Your Natural Beauty"
          description="We offer a curated selection of premium permanent makeup services performed by master artists"
          align="center"
        />
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div 
              className="service-card" 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17
              }}
            >
              <motion.div 
                className="icon-wrapper"
                variants={iconVariants}
                whileHover="hover"
              >
                {service.icon}
                <div className="icon-glow"></div>
              </motion.div>
              {service.highlight && (
                <motion.div 
                  className="service-highlight"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <FaGem /> {service.highlight}
                </motion.div>
              )}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <motion.button 
                className="button-outline service-button"
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(198, 156, 109, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Book Consultation
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="all-services-button"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
        </motion.div>
        
        <div className="background-decoration"></div>
      </div>
    </StyledServices>
  );
};

const StyledServices = styled.section`
  background-color: var(--light-bg);
  position: relative;
  overflow: hidden;
  padding: 6rem 0;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 70% 30%, rgba(198, 156, 109, 0.12) 0%, transparent 70%);
    pointer-events: none;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 80%, rgba(198, 156, 109, 0.08) 0%, transparent 60%);
    pointer-events: none;
  }
  
  .container {
    position: relative;
    z-index: 2;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
    justify-content: center;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }
    
    @media (min-width: 1024px) {
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      max-width: 1100px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .service-card {
    background-color: var(--light);
    border-radius: var(--radius-sm);
    padding: 2.5rem 2rem;
    box-shadow: var(--shadow);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    border: 1px solid rgba(var(--primary-rgb), 0.08);
    overflow: hidden;
    text-align: center;
    z-index: 1;
    
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(to right, var(--primary-light), var(--primary), var(--primary-light));
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s ease-out;
      z-index: 1;
    }
    
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 80px;
      height: 80px;
      background: radial-gradient(circle at center, var(--primary-light) 0%, transparent 70%);
      border-radius: 50%;
      opacity: 0.2;
      z-index: -1;
      transition: var(--transition);
    }
    
    &:hover {
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(198, 156, 109, 0.2);
      transform: translateY(-10px);
      border-color: rgba(198, 156, 109, 0.2);
      
      &:after {
        transform: scaleX(1);
      }
      
      &::before {
        transform: scale(2.5);
        opacity: 0.3;
      }
    }
    
    .service-highlight {
      position: absolute;
      top: 1rem;
      left: 0;
      background: linear-gradient(to right, var(--primary), var(--primary-light));
      color: white;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.25rem 1rem 0.25rem 0.75rem;
      border-top-right-radius: 2rem;
      border-bottom-right-radius: 2rem;
      display: flex;
      align-items: center;
      gap: 0.3rem;
      box-shadow: 0 3px 10px rgba(198, 156, 109, 0.3);
      z-index: 10;
      
      svg {
        font-size: 0.7rem;
      }
    }
  }

  .icon-wrapper {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: var(--primary-light);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    position: relative;
    transition: all 0.3s ease;
    font-size: 1.8rem;
    color: var(--primary);
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 5px 15px rgba(198, 156, 109, 0.2);
    
    &:before {
      content: '';
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      border-radius: 50%;
      border: 1px solid var(--primary);
      opacity: 0.3;
      transition: all 0.3s ease;
    }
    
    &:after {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      border-radius: 50%;
      border: 2px solid transparent;
      border-top-color: var(--primary);
      border-bottom-color: var(--primary-light);
      opacity: 0;
      transition: all 0.5s ease;
      transform: rotate(45deg);
    }
    
    .icon-glow {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: radial-gradient(circle at center, rgba(198, 156, 109, 0.8) 0%, transparent 70%);
      opacity: 0;
      transition: opacity 0.5s ease;
      filter: blur(10px);
      z-index: -1;
    }
    
    svg {
      transition: all 0.3s ease;
    }
    
    .service-card:hover & {
      background: var(--primary);
      color: var(--light);
      transform: translateY(-5px);
      
      &:before {
        opacity: 0.6;
        transform: scale(1.1);
      }
      
      &:after {
        opacity: 0.8;
        transform: rotate(315deg);
      }
      
      .icon-glow {
        opacity: 0.4;
      }
      
      svg {
        transform: rotate(10deg) scale(1.1);
      }
    }
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.4rem;
    font-weight: 600;
    position: relative;
    display: inline-block;
    padding-bottom: 0.5rem;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 2px;
      background: linear-gradient(to right, var(--primary-light), var(--primary), var(--primary-light));
      transition: width 0.3s ease;
    }
    
    .service-card:hover &:after {
      width: 60px;
    }
  }

  p {
    color: var(--text-light);
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
    line-height: 1.7;
    flex-grow: 1;
  }

  .service-price {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 1.5rem;
    font-family: var(--font-accent);
    position: relative;
    display: inline-block;
    
    .price-value {
      position: relative;
      z-index: 1;
      
      &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: -5px;
        right: -5px;
        height: 8px;
        background-color: rgba(198, 156, 109, 0.2);
        z-index: -1;
        transform: skewX(-15deg);
      }
    }
  }

  .service-button {
    font-size: 0.9rem;
    padding: 10px 24px;
    border-color: var(--primary);
    color: var(--primary);
    font-weight: 500;
    position: relative;
    overflow: hidden;
    z-index: 1;
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, var(--primary-light), var(--primary));
      z-index: -1;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.4s ease-out;
    }
    
    &:hover {
      color: white;
      border-color: transparent;
      
      &:before {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }

  .all-services-button {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
    
    .button {
      background: linear-gradient(to right, var(--primary), var(--primary-light));
      border: none;
      color: white;
      padding: 12px 30px;
      font-weight: 500;
      letter-spacing: 0.5px;
      position: relative;
      overflow: hidden;
      
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, rgba(255,255,255,0.2), transparent);
        transition: all 0.6s ease;
      }
      
      &:hover:before {
        left: 100%;
      }
    }
  }

  .background-decoration {
    position: absolute;
    top: 5%;
    right: 5%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle at center, var(--primary-light) 0%, transparent 70%);
    opacity: 0.4;
    border-radius: 50%;
    z-index: 0;
    pointer-events: none;
    animation: pulse 8s infinite alternate ease-in-out;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.4;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      opacity: 0.4;
    }
  }

  @media (max-width: 768px) {
    .services-grid {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }
    
    .service-card {
      padding: 2rem 1.5rem;
    }
    
    .icon-wrapper {
      width: 60px;
      height: 60px;
      font-size: 1.5rem;
    }
    
    h3 {
      font-size: 1.3rem;
    }
  }
  
  @media (max-width: 480px) {
    .services-grid {
      grid-template-columns: 1fr;
      max-width: 320px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .background-decoration {
      display: none;
    }
  }
`;

export default ServicesSection;