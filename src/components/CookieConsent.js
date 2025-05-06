import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consentStatus = localStorage.getItem('cookieConsent');
    
    // If no choice has been made yet, show the consent popup
    if (!consentStatus) {
      // Small delay to prevent popup from showing immediately on page load
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <ConsentContainer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          <ConsentContent>
            <ConsentText>
              <h3>Cookie Notice</h3>
              <p>
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our{' '}
                <StyledLink to="/cookie-policy">Cookie Policy</StyledLink> to learn more.
              </p>
            </ConsentText>
            <ConsentButtons>
              <DeclineButton onClick={handleDecline}>Decline</DeclineButton>
              <AcceptButton onClick={handleAccept}>Accept All</AcceptButton>
            </ConsentButtons>
          </ConsentContent>
        </ConsentContainer>
      )}
    </AnimatePresence>
  );
};

// Styled Components
const ConsentContainer = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 90%;
  max-width: 1000px;
  z-index: 9999;
  box-shadow: var(--shadow-lg);
  border-radius: var(--radius-md);
  background-color: var(--light);
  border: 1px solid rgba(var(--primary-rgb), 0.2);
  overflow: hidden;
  
  @media (max-width: 768px) {
    bottom: 10px;
    width: 95%;
  }
`;

const ConsentContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    gap: 15px;
  }
`;

const ConsentText = styled.div`
  flex: 1;
  
  h3 {
    margin: 0 0 10px 0;
    font-size: 1.2rem;
    color: var(--secondary);
  }
  
  p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.5;
    color: var(--text);
  }
`;

const StyledLink = styled(Link)`
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ConsentButtons = styled.div`
  display: flex;
  gap: 10px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: var(--radius-sm);
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: var(--transition);
  border: none;
  
  @media (max-width: 768px) {
    flex: 1;
    padding: 12px 15px;
  }
`;

const AcceptButton = styled(Button)`
  background-color: var(--primary);
  color: var(--light);
  
  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
  }
`;

const DeclineButton = styled(Button)`
  background-color: transparent;
  color: var(--text);
  border: 1px solid var(--gray);
  
  &:hover {
    background-color: var(--light-bg);
  }
`;

export default CookieConsent;