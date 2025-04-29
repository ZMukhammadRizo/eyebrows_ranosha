import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import aboutImage from '../assets/about-image.jpg';

const AboutSection = () => {
  return (
    <StyledSection id="about">
      <div className="container">
        <SectionHeading 
          subheading="About Us" 
          heading="The Refined Art of Eyebrow Beauty" 
          text="Over 6 years of experience and passion in creating perfect eyebrows that reflect your individuality using eco-friendly products."
        />
        
        <ContentWrapper>
          <ImageContainer
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AboutImage>
              <img src={aboutImage} alt="" />
            </AboutImage>
          </ImageContainer>
          
          <TextContainer
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AboutText>
              <h3>Professional Experience and Passion for Excellence</h3>
              <AboutP>
              Beauty Salon Ranosha — Permanent Makeup & Henna Studio in Torrance, CA We specialize in natural-looking permanent makeup for brows and lips, as well as organic black henna for nails. With 6+ years of experience, we provide a halal, safe, and relaxing beauty experience. Located in sunny Los Angeles.
              </AboutP>
            
              
              <Stats>
                <StatItem>
                  <StatNumber>6+</StatNumber>
                  <StatText>years of experience</StatText>
                </StatItem>
                <StatItem>
                  <StatNumber>1k+</StatNumber>
                  <StatText>satisfied clients</StatText>
                </StatItem>
              </Stats>
              
            </AboutText>
          </TextContainer>
        </ContentWrapper>
      </div>
    </StyledSection>
  );
};

// Styled Components
const StyledSection = styled.section`
  padding: var(--section-padding);
  background-color: var(--light-bg);
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  align-items: center;
  margin-top: 2.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
`;

const AboutImage = styled.div`
  width: 100%;
  height: 600px;
  background-image: url("https://images.squarespace-cdn.com/content/v1/5c4f6ba1e2ccd1ee6075495d/1624290388397-VSJ83OREXL749BVWIHSI/Professional+eyebrow+shaping+in+Naples%2C+FL");
  background-size: cover;
  border-radius: 10px;
  position: relative;
  z-index: 2;
`;

const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AboutText = styled.div`
  h3 {
    margin-bottom: 1.2rem;
    font-size: 3rem;
    color: var(--secondary);
    font-weight: 400;
  }
  
  p {
    margin-bottom: 1.3rem;
    color: var(--text-light);
    line-height: 1.7;
    font-size: 0.95rem;
  }
`;

const AboutP = styled.p`
  margin-bottom: 1.3rem;
  color: var(--text-light);
  line-height: 1.7;
  font-size: 1.2rem !important;
`;
const Stats = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2.5rem 0;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;

const StatItem = styled.div`
  flex: 1;
  min-width: 100px;
`;

const StatNumber = styled.h4`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.5rem;
`;

const StatText = styled.p`
  font-size: 0.9rem;
  color: var(--text);
  margin: 0;
`;

export default AboutSection; 