import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionHeading = ({ subheading, heading, text, alignment = 'center' }) => {
  return (
    <StyledHeading alignment={alignment}>
      <Subheading
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <SubheadingText>{subheading}</SubheadingText>
      </Subheading>
      
      <Heading
        as={motion.h2}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {heading}
        <HeadingLine 
          as={motion.div}
          initial={{ width: 0 }}
          whileInView={{ width: '60px' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </Heading>
      
      {text && (
        <Text
          as={motion.p}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {text}
        </Text>
      )}
    </StyledHeading>
  );
};

const StyledHeading = styled.div`
  text-align: ${props => props.alignment};
  max-width: 850px;
  margin: 0 auto 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const Subheading = styled.div`
  display: inline-block;
  margin-bottom: 1rem;
`;

const SubheadingText = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  padding: 0.5rem 1.2rem;
  background-color: rgba(224, 68, 124, 0.1);
  border-radius: var(--radius-lg);
`;

const Heading = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: var(--secondary);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  position: relative;
  display: inline-block;
`;

const HeadingLine = styled.div`
  height: 3px;
  background: linear-gradient(to right, var(--primary), var(--accent));
  border-radius: 3px;
  margin: 0.8rem auto 0;
`;

const Text = styled.p`
  font-size: 1.1rem;
  color: var(--text);
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.7;
`;

export default SectionHeading; 