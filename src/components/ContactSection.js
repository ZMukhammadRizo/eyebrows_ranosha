import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCalendarCheck, FaWhatsapp } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

// Add a high-quality image of an eyebrow master
// const masterImage = 'https://images.unsplash.com/photo-1614583225154-5fcdda07019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80';

// WhatsApp number for bookings (replace with your actual number)
const WHATSAPP_NUMBER = '17473069188'; // Example: 15551234567 (country code + number)

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const { name, email, phone, service, message } = formData;

    // Construct the pre-filled message for WhatsApp
    let whatsappMessage = `Hello!\nI want to book your service:\n\n`;
    whatsappMessage += `Name: ${name}\n`;
    whatsappMessage += `Email: ${email}\n`;
    whatsappMessage += `Phone: ${phone}\n`;
    whatsappMessage += `Service: ${service}\n`;
    if (message) {
      whatsappMessage += `Message: ${message}\n`;
    }
    whatsappMessage += `\nPlease confirm availability or suggest a time.`;

    // URL encode the message
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Create the WhatsApp URL
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');

    // Assume success for opening WhatsApp link and clear form
    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      details: ['21250 Hawthorne Blvd', 'Torrance, CA 90503'],
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp Us',
      details: [
        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
          Chat on WhatsApp (+1 747-306-9188)
        </a>
      ],
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: ['beautysalonranosha@gmail.com']
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      details: ['Mon-Sat: 10:00 - 23:30', 'Sun: 24hours'],
    },
  ];

  return (
    <StyledSection id="contact">
      <div className="container">
        <SectionHeading
          subheading="Schedule Your Visit"
          heading="Premium Beauty Experience Awaits"
          text="Experience luxurious beauty treatments tailored to enhance your natural features. Our expert specialists use premium products and advanced techniques for exceptional results."
        />
        
        <BookingInfo>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <BookingTitle>
              <FaCalendarCheck /> Why Book With Us
            </BookingTitle>
            <BookingDescription>
              <p>At Ranosha Beauty Salon, we provide personalized beauty treatments from certified professionals with years of experience. Our convenient booking system allows you to secure your preferred time slot with ease.</p>
              
              <BookingFeatures>
                <BookingFeature>
                  <span>✓</span> Expert-led treatments
                </BookingFeature>
                <BookingFeature>
                  <span>✓</span> Premium quality products
                </BookingFeature>
                <BookingFeature>
                  <span>✓</span> Comfortable, luxurious environment
                </BookingFeature>
                <BookingFeature>
                  <span>✓</span> Flexible scheduling options
                </BookingFeature>
                <BookingFeature>
                  <span>✓</span> Personalized service plans
                </BookingFeature>
              </BookingFeatures>
            </BookingDescription>
          </motion.div>
        </BookingInfo>
        
        <ContentWrapper>
          <ContactInfo>
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
                    <InfoDetail key={idx}>{typeof detail === 'string' ? detail : detail}</InfoDetail>
                  ))}
                </div>
              </ContactInfoItem>
            ))}
          </ContactInfo>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ width: '100%' }}
          >            
            <FormTitle>Book Your Appointment</FormTitle>
            <FormSubtitle>Complete the form below and we'll confirm your appointment via WhatsApp.</FormSubtitle>
            
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <FormInput
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
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormInput
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="phone">Phone (for WhatsApp)</FormLabel>
                  <FormInput
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
                <FormLabel htmlFor="service">Service</FormLabel>
                <FormInput
                  as="select"
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Permanent eyebrow makeup">Permanent eyebrow makeup</option>
                  <option value="Permanent lip makeup">Permanent lip makeup</option>
                  <option value="Henna nail art">Henna nail art</option>
                </FormInput>
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">Message (Optional)</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your preferences or ask any questions"
                />
              </FormGroup>
              
              {submitStatus === 'success' && (
                <SuccessMessage>
                  Opening WhatsApp to send your booking request! Please complete the process there.
                </SuccessMessage>
              )}
              
              <SubmitButton 
                type="submit" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Preparing...' : 'Send via WhatsApp'}
              </SubmitButton>
            </ContactForm>
          </motion.div>
        </ContentWrapper>
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

const BookingInfo = styled.div`
  margin: 1.5rem 0 3rem;
  background: linear-gradient(to right, rgba(var(--primary-rgb), 0.05), rgba(var(--primary-rgb), 0.02));
  padding: 2rem;
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--primary);
`;

const BookingTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--primary);
  margin-bottom: 1rem;
  
  svg {
    font-size: 1.5rem;
  }
`;

const BookingDescription = styled.div`
  color: var(--secondary);
  line-height: 1.7;
  
  p {
    margin-bottom: 1.5rem;
  }
`;

const BookingFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.8rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const BookingFeature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  
  span {
    color: var(--primary);
    font-weight: bold;
  }
`;

const FormTitle = styled.h3`
  color: var(--secondary-dark);
  margin-bottom: 0.5rem;
`;

const FormSubtitle = styled.p`
  color: var(--text-light);
  margin-bottom: 1.5rem;
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 2.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const ContactInfoItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.6rem;
  border-radius: var(--radius-md);
  background: var(--light);
  border-left: 3px solid var(--primary);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
  }
`;

const IconWrapper = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(var(--primary-rgb), 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 1.3rem;
  flex-shrink: 0;
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

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FormLabel = styled.label`
  font-weight: 400;
  color: var(--secondary);
  font-size: 0.95rem;
`;

const FormInput = styled.input`
  padding: 0.7rem 0.9rem;
  border: 1px solid var(--gray);
  border-radius: var(--radius-sm);
  font-family: var(--font-main);
  transition: var(--transition);
  font-size: 0.95rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 1px rgba(var(--primary-rgb), 0.15);
  }
  
  &:hover {
    border-color: var(--secondary);
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.7rem 0.9rem;
  border: 1px solid var(--gray);
  border-radius: var(--radius-sm);
  font-family: var(--font-main);
  resize: vertical;
  min-height: 130px;
  transition: var(--transition);
  font-size: 0.95rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 1px rgba(var(--primary-rgb), 0.15);
  }
  
  &:hover {
    border-color: var(--secondary);
  }
`;

const SubmitButton = styled.button`
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: var(--radius-md);
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 0.8rem;
  
  &:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow);
  }
  
  &:disabled {
    background: var(--gray);
    cursor: not-allowed;
    transform: none;
  }
  
  svg {
    font-size: 1.1rem;
  }
`;

const SuccessMessage = styled.div`
  padding: 1rem;
  background-color: rgba(46, 213, 115, 0.1);
  border-left: 3px solid #2ed573;
  color: #2ed573;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.div`
  padding: 1rem;
  background-color: rgba(255, 71, 87, 0.1);
  border-left: 3px solid #ff4757;
  color: #ff4757;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

export default ContactSection; 