import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log(formData);
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Адрес',
      details: ['ул. Пушкина 123', 'Москва, Россия 123456'],
    },
    {
      icon: <FaPhone />,
      title: 'Телефон',
      details: ['+7 (999) 123-4567', '+7 (999) 765-4321'],
    },
    {
      icon: <FaEnvelope />,
      title: 'Электронная почта',
      details: ['info@krasotabrovi.ru', 'booking@krasotabrovi.ru'],
    },
    {
      icon: <FaClock />,
      title: 'Часы работы',
      details: ['Пн-Пт: 10:00 - 20:00', 'Сб-Вс: 11:00 - 18:00'],
    },
  ];

  return (
    <StyledSection id="contact">
      <div className="container">
        <SectionHeading
          subheading="Свяжитесь с нами"
          heading="Запишитесь на прием"
          text="Заполните форму ниже, и мы свяжемся с вами для подтверждения вашей записи. Мы стремимся ответить на все запросы в течение 24 часов."
        />
        
        <ContentWrapper>
          <ContactInfoWrapper>
            {contactInfo.map((item, index) => (
              <ContactInfoItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <IconWrapper>{item.icon}</IconWrapper>
                <div>
                  <InfoTitle>{item.title}</InfoTitle>
                  {item.details.map((detail, idx) => (
                    <InfoDetail key={idx}>{detail}</InfoDetail>
                  ))}
                </div>
              </ContactInfoItem>
            ))}
          </ContactInfoWrapper>
          
          <FormWrapper
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Имя</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormRow>
                <FormGroup>
                  <Label htmlFor="email">Электронная почта</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </FormRow>
              
              <FormGroup>
                <Label htmlFor="service">Выберите услугу</Label>
                <Select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Пожалуйста, выберите...</option>
                  <option value="premium">Премиум Оформление Бровей</option>
                  <option value="correction">Коррекция и Окрашивание</option>
                  <option value="lamination">Ламинирование Бровей</option>
                  <option value="microblading">Микроблейдинг</option>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Сообщение</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                ></Textarea>
              </FormGroup>
              
              <SubmitButton type="submit">Отправить запрос</SubmitButton>
            </Form>
          </FormWrapper>
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
    grid-template-columns: 1fr 2fr;
  }
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactInfoItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 10px;
  background-color: var(--light-bg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow);
  }
`;

const IconWrapper = styled.div`
  font-size: 1.5rem;
  color: var(--primary);
`;

const InfoTitle = styled.h4`
  font-weight: 600;
  color: var(--secondary);
  margin-bottom: 0.5rem;
`;

const InfoDetail = styled.p`
  color: var(--text);
  margin: 0;
`;

const FormWrapper = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  box-shadow: var(--shadow);
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Label = styled.label`
  font-weight: 500;
  color: var(--secondary);
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 2px solid var(--gray);
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.2);
  }
  
  &:hover {
    border-color: var(--secondary);
  }
`;

const Select = styled.select`
  padding: 0.75rem 1rem;
  border: 2px solid var(--gray);
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.2);
  }
  
  &:hover {
    border-color: var(--secondary);
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 2px solid var(--gray);
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.2);
  }
  
  &:hover {
    border-color: var(--secondary);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 0.5rem;
  
  &:hover {
    background-color: var(--primary-dark);
  }
`;

export default ContactSection; 