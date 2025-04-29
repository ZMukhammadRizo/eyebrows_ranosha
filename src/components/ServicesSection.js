import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import SectionHeading from './SectionHeading';
import { FaArrowRight } from 'react-icons/fa';

// Services data
const servicesData = [
  {
    id: 1,
    title: "Eyebrow Shaping",
    description: "Professional eyebrow shaping that considers your facial features to create the perfect form using eco-friendly products.",
    price: "from $25",
    time: "30 min",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    popular: true,
  },
  {
    id: 2,
    title: "Eyebrow Tinting",
    description: "Long-lasting eyebrow tinting that enhances shape and adds expressiveness to your look with natural dyes.",
    price: "from $30",
    time: "45 min",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
    popular: true,
  },
  {
    id: 3,
    title: "Eyebrow Lamination",
    description: "A procedure that makes eyebrows more manageable, voluminous, and visually thicker using sustainable products.",
    price: "from $60",
    time: "60 min",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    popular: true,
  },
  {
    id: 4,
    title: "Microblading",
    description: "A permanent makeup technique to create the effect of natural hair strokes in eyebrows with organic pigments.",
    price: "from $150",
    time: "120 min",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80",
    popular: false,
  },
  {
    id: 5,
    title: "Eyebrow Makeup Training",
    description: "Individual training in eyebrow makeup techniques for daily use with eco-friendly cosmetics.",
    price: "from $70",
    time: "90 min",
    image: "https://images.unsplash.com/photo-1588952159186-5b6a9c4e7bd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
    popular: false,
  },
  {
    id: 6,
    title: "Comprehensive Care",
    description: "A full range of services including shaping, tinting, and eyebrow care using all-natural products.",
    price: "from $75",
    time: "90 min",
    image: "https://images.unsplash.com/photo-1526045478516-99145907023c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    popular: false,
  },
];

const ServicesSection = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredServices = filter === 'popular' 
    ? servicesData.filter(service => service.popular) 
    : servicesData;
  
  return (
    <StyledSection id="services">
      <div className="container">
        <SectionHeading 
          subheading="Our Services" 
          heading="Professional Eyebrow Care" 
          text="We offer a wide range of eyebrow styling and care services, using only professional eco-friendly products and innovative techniques."
        />
        <ServicesGrid>
          {filteredServices.map((service) => (
            <ServiceCard 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
            >
              <ServiceImageContainer>
                <ServiceImage>
                  <img src={service.image} alt={service.title} />
                </ServiceImage>
                {service.popular && <PopularTag>Popular</PopularTag>}
              </ServiceImageContainer>
              
              <ServiceContent>
                <div>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                  <ServiceMeta>
                    <ServicePrice>
                      {service.price} <span>{service.time}</span>
                    </ServicePrice>
                  </ServiceMeta>
                </div>
                <LearnMoreLink 
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Book Now <FaArrowRight />
                </LearnMoreLink>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </div>
    </StyledSection>
  );
};

// Styled Components
const StyledSection = styled.section`
  padding: var(--section-padding);
  background-color: var(--light);
  overflow: hidden;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-top: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: var(--light);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(var(--primary-rgb), 0.05);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
  }
`;

const ServiceImageContainer = styled.div`
  position: relative;
  height: 200px;
`;

const ServiceImage = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background: linear-gradient(to top, var(--light), transparent);
    z-index: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  
  ${ServiceCard}:hover & img {
    transform: scale(1.03);
  }
`;

const PopularTag = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: var(--accent);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const ServiceContent = styled.div`
  padding: 1.2rem 1.5rem 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ServiceTitle = styled.h3`
  margin-bottom: 0.7rem;
  font-size: 1.3rem;
  color: var(--secondary);
  font-weight: 500;
`;

const ServiceDescription = styled.p`
  color: var(--text-light);
  margin-bottom: 1.3rem;
  line-height: 1.5;
  font-size: 0.95rem;
`;

const ServiceMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
`;

const ServicePrice = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--primary);
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  span {
    font-size: 0.85rem;
    color: var(--text-light);
    font-weight: normal;
  }
`;

const LearnMoreLink = styled(Link)`
  color: var(--primary);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: var(--transition);
  font-size: 0.9rem;
  
  &:hover {
    color: var(--primary-dark);
    gap: 0.6rem;
  }
  
  svg {
    font-size: 1.1rem;
  }
`;

export default ServicesSection;