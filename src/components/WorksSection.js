import React, { useState } from 'react';
import styled from 'styled-components';
import SectionHeading from './SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';

// Sample data for works/portfolio
const worksData = [
  {
    id: 1,
    image: 'https://lh3.googleusercontent.com/p/AF1QipMI2gmAvv9EvFPz6qtnEFYLnUQ91zUPBJhg-jo=s1360-w1360-h1020-rw',
  },
  {
    id: 2,
    image: 'https://lh3.googleusercontent.com/p/AF1QipMDpuKkT-e3YcBgMAPD20zAejwC39rQzPNl73I=s1360-w1360-h1020-rw',
  },
  {
    id: 3,
    image: 'https://lh3.googleusercontent.com/p/AF1QipPoJtdU3IWA2koCfyA9GRay6btiIOnwGLt_HOk=s1360-w1360-h1020-rw',
  },
  {
    id: 4,
    image: 'https://lh3.googleusercontent.com/p/AF1QipNtnypYxrzjP2xpDUe-tZhjDT1bFZw-ByWGoDY=s1360-w1360-h1020-rw',
  },
  {
    id: 5,
    image: 'https://lh3.googleusercontent.com/p/AF1QipP72jyGrFU8d3-tvoe9d3Zib95xCci2gQD2cac=s1360-w1360-h1020-rw',
  },
  {
    id: 6,
    image: 'https://www.personail.com/cdn/shop/products/personail-nail-wraps-henna-15011547709495.jpg?v=1739444446',
  },
];

// Get unique categories for filter
const categories = ['All', ...new Set(worksData.map(item => item.category))];

// Styled Components - Define these before the component
const StyledWorks = styled.section`
  padding: var(--section-padding);
  background-color: var(--light-bg);
  
  @media (max-width: 480px) {
    padding: 4rem 0;
  }
`;


const WorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.2rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const WorkImage = styled.div`
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
`;

const WorkOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  @media (max-width: 768px) {
    opacity: 1;
    background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%);
    padding: 1.2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.1) 100%);
  }
`;


const WorkTitle = styled.h3`
  color: white;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(0,0,0,0.2);
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const WorkDescription = styled.p`
  color: white;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-shadow: 0 1px 3px rgba(0,0,0,0.2);
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

// Define WorkItem after WorkOverlay has been defined
const WorkItem = styled.div`
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  cursor: pointer;
  background: var(--light);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
    
    img {
      transform: scale(1.03);
    }
    
    ${WorkOverlay} {
      opacity: 1;
    }
  }
`;

const WorksSection = () => {

  return (
    <StyledWorks id="works">
      <div className="container">
        <SectionHeading 
          subheading="Portfolio" 
          heading="Eyebrow Transformation Gallery" 
          text="Browse through our collection of stunning eyebrow transformations and see the quality of our professional work."
        />
        
  
        
        <WorksGrid>
          <AnimatePresence>
            {worksData.map((work) => (
              <WorkItem 
                key={work.id}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <WorkImage>
                  <img src={work.image} alt={work.title} />
                </WorkImage>
              </WorkItem>
            ))}
          </AnimatePresence>
        </WorksGrid>
      </div>
    </StyledWorks>
  );
};

export default WorksSection;
