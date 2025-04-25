import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import SectionHeading from './SectionHeading';
import { FaArrowRight } from 'react-icons/fa';

// Сервисные данные
const servicesData = [
  {
    id: 1,
    title: "Коррекция бровей",
    description: "Профессиональная коррекция бровей с учетом особенностей вашего лица для создания идеальной формы.",
    price: "от 1500 ₽",
    time: "30 мин",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    popular: true,
  },
  {
    id: 2,
    title: "Окрашивание бровей",
    description: "Стойкое окрашивание бровей, которое подчеркнет их форму и придаст выразительность вашему взгляду.",
    price: "от 1800 ₽",
    time: "45 мин",
    image: "https://images.unsplash.com/photo-1583320798349-56c360f9c4ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    popular: true,
  },
  {
    id: 3,
    title: "Ламинирование бровей",
    description: "Процедура, которая делает брови более послушными, объемными и визуально гуще.",
    price: "от 3500 ₽",
    time: "60 мин",
    image: "https://images.unsplash.com/photo-1603145733146-ae562a55031e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    popular: true,
  },
  {
    id: 4,
    title: "Микроблейдинг",
    description: "Техника перманентного макияжа для создания эффекта натуральных волосков в бровях.",
    price: "от 8000 ₽",
    time: "120 мин",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    popular: false,
  },
  {
    id: 5,
    title: "Обучение макияжу бровей",
    description: "Индивидуальное обучение технике макияжа бровей для ежедневного использования.",
    price: "от 4000 ₽",
    time: "90 мин",
    image: "https://images.unsplash.com/photo-1560577968-128c5c2870bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    popular: false,
  },
  {
    id: 6,
    title: "Комплексный уход",
    description: "Полный комплекс услуг, включающий коррекцию, окрашивание и уход за бровями.",
    price: "от 4500 ₽",
    time: "90 мин",
    image: "https://images.unsplash.com/photo-1660863788994-63db30ceed7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=748&q=80",
    popular: false,
  },
];

const ServicesSection = () => {
  const [filter, setFilter] = useState('все');
  
  const filteredServices = filter === 'популярные' 
    ? servicesData.filter(service => service.popular) 
    : servicesData;
  
  return (
    <StyledSection id="services">
      <div className="container">
        <SectionHeading 
          subheading="Наши услуги" 
          heading="Профессиональный уход за бровями" 
          text="Мы предлагаем широкий спектр услуг по оформлению и уходу за бровями, используя только профессиональные продукты и инновационные техники."
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
                <ServiceImage src={service.image} alt={service.title} />
                {service.popular && <PopularTag>Популярное</PopularTag>}
              </ServiceImageContainer>
              
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceMeta>
                  <ServicePrice>{service.price}</ServicePrice>
                  <ServiceTime>{service.time}</ServiceTime>
                </ServiceMeta>
                <BookButton 
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Записаться <FaArrowRight />
                </BookButton>
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
  background-color: #fff;
`;


const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const ServiceImageContainer = styled.div`
  position: relative;
  height: 200px;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  padding: 1.5rem;
`;

const ServiceTitle = styled.h3`
  color: var(--secondary);
  margin-bottom: 0.5rem;
`;

const ServiceDescription = styled.p`
  color: var(--text);
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ServiceMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const ServicePrice = styled.span`
  font-weight: 600;
  color: var(--primary);
`;

const ServiceTime = styled.span`
  color: var(--text-light);
`;

const BookButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: var(--transition);
  
  svg {
    transition: var(--transition);
  }
  
  &:hover {
    background-color: var(--primary-dark);
    
    svg {
      transform: translateX(5px);
    }
  }
`;

export default ServicesSection; 