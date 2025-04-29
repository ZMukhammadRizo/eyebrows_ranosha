import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

// Add a high-quality image of an eyebrow master
const masterImage = 'https://images.unsplash.com/photo-1614583225154-5fcdda07019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80';

// Replace with your actual bot token and chat ID
const TELEGRAM_BOT_TOKEN = '8034833417:AAFI2o7DKWo6TYgp0NhkeLhFRV6F_3mgsmM';
const TELEGRAM_CHAT_ID = '1210135420';

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

  const sendToTelegram = async (data) => {
    const text = `
 🔔 New Booking Request!

 👤 Name: ${data.name}
 📧 Email: ${data.email}
 📱 Phone: ${data.phone}
 💇 Service: ${data.service}
 📝 Message: ${data.message}
    `;
    
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
        parse_mode: 'HTML'
      })
    };
    
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data.ok;
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const success = await sendToTelegram(formData);
      
      if (success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      details: ['21250 Hawthorne Blvd', 'Torrance, CA 90503'],
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: ['+1 747-306-9188'],
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: ['info@ranoshaeyebrows.com', 'booking@ranoshaeyebrows.com'],
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
          subheading="Contact Us"
          heading="Book an Appointment"
          text="Fill out the form below, and we will contact you to confirm your appointment. We strive to respond to all inquiries within 24 hours."
        />
        
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
                    <InfoDetail key={idx}>{detail}</InfoDetail>
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
                  <FormLabel htmlFor="phone">Phone</FormLabel>
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
                  <option value="Eyebrow Shaping">Eyebrow Shaping</option>
                  <option value="Microblading">Microblading</option>
                  <option value="Eyebrow Tinting">Eyebrow Tinting</option>
                  <option value="Eyebrow Lamination">Eyebrow Lamination</option>
                  <option value="Full Eyebrow Makeover">Full Eyebrow Makeover</option>
                  <option value="Consultation">Consultation</option>
                </FormInput>
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">Message</FormLabel>
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
                  Thank you for your message! We will contact you shortly to confirm your appointment.
                </SuccessMessage>
              )}
              
              {submitStatus === 'error' && (
                <ErrorMessage>
                  There was an error sending your message. Please try again or contact us directly by phone.
                </ErrorMessage>
              )}
              
              <SubmitButton 
                type="submit" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Book Appointment'}
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