import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionHeading = ({ subtitle, title, description, align = 'left' }) => {
  return (
    <StyledHeading align={align}>
      <motion.div
        className="heading-wrapper"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <motion.span 
          className="subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {title}
        </motion.h2>
        
        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {description}
          </motion.p>
        )}
        
        <motion.div 
          className="divider"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        ></motion.div>
      </motion.div>
    </StyledHeading>
  );
};

const StyledHeading = styled.div`
  margin-bottom: 3rem;
  text-align: ${props => props.align};
  
  .heading-wrapper {
    display: inline-block;
    max-width: 800px;
    
    ${props => props.align === 'center' && `
      text-align: center;
      margin: 0 auto;
    `}
  }
  
  .subtitle {
    display: inline-block;
    text-transform: uppercase;
    color: var(--primary);
    font-weight: 500;
    font-size: 0.95rem;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }
  
  h2 {
    margin-bottom: ${props => props.description ? '1rem' : '0'};
    color: var(--secondary-dark);
  }
  
  p {
    color: var(--text-light);
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    max-width: 700px;
    
    ${props => props.align === 'center' && `
      margin-left: auto;
      margin-right: auto;
    `}
  }
  
  .divider {
    height: 3px;
    background: var(--accent);
    margin: ${props => props.align === 'center' ? '0 auto' : '0'};
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
    
    h2 {
      font-size: 1.8rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    .divider {
      width: 60px !important;
    }
  }
`;

export default SectionHeading; 