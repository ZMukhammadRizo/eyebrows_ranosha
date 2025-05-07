import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaCheck, FaExclamationTriangle } from 'react-icons/fa';

// Replace these with your actual EmailJS credentials from your EmailJS account
// To set up with Gmail:
// 1. Create an account at https://www.emailjs.com/
// 2. Add a new Email Service: Go to Email Services tab → Create new service → Select Gmail
// 3. Connect your Gmail account when prompted
// 4. Create an Email Template: Go to Email Templates tab → Create new template
// 5. Design your template using variables like {{name}}, {{email}}, {{phone}}, etc.
// 6. Get your Public Key from Account → API Keys
const EMAILJS_SERVICE_ID = 'service_p67w91n'; // Copy from Email Services tab
const EMAILJS_TEMPLATE_ID = 'template_37m3u8l'; // Copy from Email Templates tab
const EMAILJS_PUBLIC_KEY = '1En-QaugTzoqn8PaZ'; // Copy from Account → API Keys

const BookingForm = () => {
  const form = useRef();
  
  // Initialize EmailJS with user ID
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      // Ensure form field names match template variables
      // Map form data to template variables
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        date: formData.date,
        time: formData.time,
        message: formData.message
      };
      
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        // Success
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: '',
          message: '',
        });
        
        // Also reset the form element
        form.current.reset();
      } else {
        // Handle other status codes
        setSubmitStatus('error');
        setErrorMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      // Provide more specific error message based on the error
      if (error.status === 0) {
        setErrorMessage('Network error. Please check your internet connection and try again.');
      } else if (error.status === 400) {
        setErrorMessage('Invalid email template or parameters. Please try again or contact us directly.');
      } else if (error.status === 403) {
        setErrorMessage('Email sending limit reached or authentication error. Please try again later.');
      } else {
        setErrorMessage(error.text || 'Failed to send your booking. Please try again or contact us directly.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get today's date in YYYY-MM-DD format for the date input min attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <FormContainer>
      <FormTitle>Book Your Appointment</FormTitle>
      <FormSubtitle>Fill out the form below to schedule your beauty service</FormSubtitle>
      
      {submitStatus === 'success' && (
        <SuccessMessage>
          <FaCheck /> Your booking request has been sent successfully! We'll contact you shortly to confirm your appointment.
        </SuccessMessage>
      )}
      
      {submitStatus === 'error' && (
        <ErrorMessage>
          <FaExclamationTriangle /> {errorMessage}
        </ErrorMessage>
      )}
      
      <StyledForm ref={form} onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="name">Full Name *</FormLabel>
          <FormInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
          />
        </FormGroup>
        
        <FormRow>
          <FormGroup>
            <FormLabel htmlFor="email">Email *</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email address"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="phone">Phone *</FormLabel>
            <FormInput
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Your phone number"
            />
          </FormGroup>
        </FormRow>
        
        <FormGroup>
          <FormLabel htmlFor="service">Service *</FormLabel>
          <FormSelect
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a service</option>
            <option value="Permanent eyebrow makeup">Permanent eyebrow makeup</option>
            <option value="Permanent lip makeup">Permanent lip makeup</option>
            <option value="Henna nail art">Henna nail art</option>
            <option value="Other">Other (please specify in message)</option>
          </FormSelect>
        </FormGroup>
        
        <FormRow>
          <FormGroup>
            <FormLabel htmlFor="date">Preferred Date *</FormLabel>
            <FormInput
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={today}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="time">Preferred Time *</FormLabel>
            <FormInput
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </FormRow>
        
        <FormGroup>
          <FormLabel htmlFor="message">Additional Information</FormLabel>
          <FormTextarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Any specific requirements or questions?"
            rows="4"
          />
        </FormGroup>
        
        <SubmitButton
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? 'Sending...' : 'Book Appointment'}
        </SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

// Styled Components
const FormContainer = styled.div`
  background: var(--light);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  box-shadow: var(--shadow);
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--secondary);
  margin-bottom: 0.5rem;
  text-align: center;
`;

const FormSubtitle = styled.p`
  color: var(--text-light);
  text-align: center;
  margin-bottom: 2rem;
  font-size: 0.95rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FormLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text);
`;

const FormInput = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: var(--radius-sm);
  font-size: 1rem;
  transition: all 0.3s ease;
  background: var(--light);
  color: var(--text);
  
  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(198, 156, 109, 0.2);
    outline: none;
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

const FormSelect = styled.select`
  padding: 0.8rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: var(--radius-sm);
  font-size: 1rem;
  transition: all 0.3s ease;
  background: var(--light);
  color: var(--text);
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23555' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;
  
  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(198, 156, 109, 0.2);
    outline: none;
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.8rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: var(--radius-sm);
  font-size: 1rem;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 100px;
  background: var(--light);
  color: var(--text);
  
  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(198, 156, 109, 0.2);
    outline: none;
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

const SubmitButton = styled(motion.button)`
  background: var(--primary);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(198, 156, 109, 0.3);
  }
`;

const SuccessMessage = styled.div`
  background: rgba(0, 128, 0, 0.1);
  color: green;
  padding: 1rem;
  border-radius: var(--radius-sm);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  
  svg {
    font-size: 1.1rem;
  }
`;

const ErrorMessage = styled.div`
  background: rgba(220, 53, 69, 0.1);
  color: #dc3545;
  padding: 1rem;
  border-radius: var(--radius-sm);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  
  svg {
    font-size: 1.1rem;
  }
`;

export default BookingForm;