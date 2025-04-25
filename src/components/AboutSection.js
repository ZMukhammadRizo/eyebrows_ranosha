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
          subheading="О нас" 
          heading="Изысканное искусство красоты бровей" 
          text="Более 10 лет опыта и страсти в создании идеальных бровей, отражающих вашу индивидуальность."
        />
        
        <ContentWrapper>
          <ImageContainer
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AboutImage src={"https://images.squarespace-cdn.com/content/v1/5c4f6ba1e2ccd1ee6075495d/1624290388397-VSJ83OREXL749BVWIHSI/Professional+eyebrow+shaping+in+Naples%2C+FL"} alt="Наша команда экспертов по бровям за работой" />
          </ImageContainer>
          
          <TextContainer
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AboutContent>
              <h3>Профессиональный опыт и страсть к совершенству</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </p>
              <p>
                Наша миссия - подчеркнуть естественную красоту каждого клиента, создавая индивидуальные формы бровей, которые гармонично сочетаются с чертами лица и личным стилем. Мы верим, что идеально оформленные брови могут преобразить внешность и придать лицу выразительность.
              </p>
              <p>
                Наша команда состоит из сертифицированных специалистов с многолетним опытом работы, которые постоянно совершенствуют свои навыки, изучая новейшие техники и тенденции в индустрии красоты.
              </p>
              
              <Stats>
                <StatItem>
                  <StatNumber>10+</StatNumber>
                  <StatText>лет опыта</StatText>
                </StatItem>
                <StatItem>
                  <StatNumber>5k+</StatNumber>
                  <StatText>довольных клиентов</StatText>
                </StatItem>
                <StatItem>
                  <StatNumber>20+</StatNumber>
                  <StatText>наград в области красоты</StatText>
                </StatItem>
              </Stats>
              
            </AboutContent>
          </TextContainer>
        </ContentWrapper>
      </div>
    </StyledSection>
  );
};

// Styled Components
const StyledSection = styled.section`
  padding: var(--section-padding);
  background-color: white;
`;

const ContentWrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  padding: 1.5rem;
`;

const AboutImage = styled.img`
  width: 100%;
  height: 600px;
  border-radius: 10px;
  position: relative;
  z-index: 2;
`;

const ImageAccent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 80%;
  background-color: var(--primary-light);
  border-radius: 10px;
  z-index: 1;
`;

const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AboutContent = styled.div`
  h3 {
    color: var(--secondary);
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
  
  p {
    color: var(--text);
    margin-bottom: 1.25rem;
    line-height: 1.7;
  }
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