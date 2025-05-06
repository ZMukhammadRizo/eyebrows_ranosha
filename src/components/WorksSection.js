import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SectionHeading from './SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaKiss, FaLeaf, FaSpa, FaArrowRight } from 'react-icons/fa';

// Portfolio data with before/after transformations
const portfolioData = [
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
    image: 'https://lh3.googleusercontent.com/p/AF1QipMvwLeB7-b6YTTcXNrgyxJ4swL_469zC_b2-E4=s1360-w1360-h1020-rw',
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

// Categories for filtering the portfolio

// Styled Components - Define these before the component
const StyledWorks = styled.section`
  padding: var(--section-padding);
  background-color: var(--light-bg);
  position: relative;
  overflow: hidden;
  
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
  
  @media (max-width: 480px) {
    padding: 4rem 0;
  }
`;

const PortfolioIntro = styled.div`
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  
  p {
    color: var(--text-light);
    font-size: 1.1rem;
    line-height: 1.7;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2.5rem;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
`;

const FilterButton = styled.button`
  background: ${props => props.active ? 'var(--primary)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text)'};
  border: 1px solid ${props => props.active ? 'var(--primary)' : 'rgba(0,0,0,0.1)'};
  padding: 0.5rem 1.2rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? 'var(--primary)' : 'rgba(198, 156, 109, 0.1)'};
    border-color: ${props => props.active ? 'var(--primary)' : 'var(--primary-light)'};
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 0.4rem 1rem;
    font-size: 0.85rem;
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 350px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const TransformationCard = styled(motion.div)`
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  background: var(--light);
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(198, 156, 109, 0.2);
  }
`;

const BeforeAfterContainer = styled.div`
  position: relative;
  aspect-ratio: 1/1.2;
  overflow: hidden;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &.before-image {
    opacity: ${props => props.showAfter ? 0 : 1};
  }
  
  &.after-image {
    opacity: ${props => props.showAfter ? 1 : 0};
  }
    &:hover{
      transform:scale(1.05);
    }
`;

const TransformationLabel = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 30px;
  z-index: 2;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ServiceBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.8rem;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 500;
  z-index: 2;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  
  svg {
    font-size: 0.9rem;
  }
`;

const TransformationInfo = styled.div`
  padding: 1.5rem;
  border-top: 3px solid var(--primary-light);
`;

const TransformationTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--secondary);
`;

const TransformationDescription = styled.p`
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ViewTransformationButton = styled.button`
  background: transparent;
  color: var(--primary);
  border: none;
  padding: 0;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--primary-dark);
    transform: translateX(3px);
  }
  
  svg {
    font-size: 0.8rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
`;

const WorksSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState(portfolioData);
  
  // State to track which items are showing the "after" image
  const [showAfterMap, setShowAfterMap] = useState({});
  
  // Filter portfolio items when category changes
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredItems(portfolioData);
    } else {
      setFilteredItems(portfolioData.filter(item => item.service === activeCategory));
    }
  }, [activeCategory]);
  
  // Toggle before/after image display
  const toggleBeforeAfter = (id) => {
    setShowAfterMap(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <StyledWorks id="works">
      <div className="container">
        <SectionHeading 
          subtitle="Our Portfolio" 
          title="Client Transformation Gallery" 
          description="Browse our collection of real client transformations showcasing the beauty and precision of our permanent makeup artistry"
          align="center"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >

        </motion.div>
        
        <PortfolioGrid>
          <AnimatePresence>
            {filteredItems.map((item) => (
              <TransformationCard 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                layout
              >
                <BeforeAfterContainer 
                  onClick={() => toggleBeforeAfter(item.id)}
                  onMouseEnter={() => toggleBeforeAfter(item.id)}
                  onMouseLeave={() => toggleBeforeAfter(item.id)}
                >
                  <ImageContainer >
                    <img src={item.image} alt={`${item.service} after`} />
                  </ImageContainer>
                </BeforeAfterContainer>
                
               
              </TransformationCard>
            ))}
          </AnimatePresence>
        </PortfolioGrid>
      </div>
    </StyledWorks>
  );
};

export default WorksSection;
