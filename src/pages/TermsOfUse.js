import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TermsOfUse = () => {
  return (
    <PolicyContainer>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PolicyHeader>Terms of Use</PolicyHeader>
          
          <PolicyContent>
            <PolicySection>
              <h2>Introduction</h2>
              <p>
                Welcome to Ranosha Eyebrows. These Terms of Use govern your use of our website located at 
                ranoshaeyebrows.com ("Website") and form a binding contractual agreement between you, the user of the Website, and us, 
                Ranosha Eyebrows.
              </p>
              <p>
                By accessing or using our Website, you agree to be bound by these Terms of Use. If you disagree with any part of the terms, 
                you may not access the Website.
              </p>
            </PolicySection>
            
            <PolicySection>
              <h2>Services</h2>
              <p>
                Ranosha Eyebrows provides eyebrow styling, microblading, and related beauty services. Our Website provides information 
                about these services and allows users to book appointments.
              </p>
              <p>
                We reserve the right to modify or discontinue, temporarily or permanently, the Website or any features or portions thereof 
                without prior notice. We will not be liable to you or to any third party for any modification, suspension, or discontinuance 
                of the Website.
              </p>
            </PolicySection>
            
            <PolicySection>
              <h2>Intellectual Property</h2>
              <p>
                The Website and its original content, features, and functionality are owned by Ranosha Eyebrows and are protected by 
                international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, 
                download, store, or transmit any of the material on our Website, except as follows:
              </p>
              <ul>
                <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.</li>
                <li>You may store files that are automatically cached by your Web browser for display enhancement purposes.</li>
                <li>You may print or download one copy of a reasonable number of pages of the Website for your own personal, non-commercial use and not for further reproduction, publication, or distribution.</li>
              </ul>
            </PolicySection>
            
            <PolicySection>
              <h2>User Conduct</h2>
              <p>
                By using our Website, you agree not to:
              </p>
              <ul>
                <li>Use the Website in any way that violates any applicable local, state, national, or international law or regulation.</li>
                <li>Impersonate or attempt to impersonate Ranosha Eyebrows, a Ranosha Eyebrows employee, another user, or any other person or entity.</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Website, or which may harm Ranosha Eyebrows or users of the Website.</li>
                <li>Use the Website in any manner that could disable, overburden, damage, or impair the site or interfere with any other party's use of the Website.</li>
                <li>Use any robot, spider, or other automatic device, process, or means to access the Website for any purpose, including monitoring or copying any of the material on the Website.</li>
              </ul>
            </PolicySection>
            
            <PolicySection>
              <h2>Booking and Cancellation</h2>
              <p>
                When booking appointments through our Website, you agree to provide accurate and complete information. Ranosha Eyebrows 
                reserves the right to refuse service, terminate accounts, or cancel appointments at our discretion.
              </p>
              <p>
                Cancellation policies for appointments are as follows:
              </p>
              <ul>
                <li>Cancellations made more than 24 hours before the scheduled appointment will receive a full refund.</li>
                <li>Cancellations made less than 24 hours before the scheduled appointment may be subject to a cancellation fee.</li>
                <li>No-shows will be charged the full service amount.</li>
              </ul>
            </PolicySection>
            
            <PolicySection>
              <h2>Limitation of Liability</h2>
              <p>
                In no event shall Ranosha Eyebrows, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable 
                for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, 
                data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Website.
              </p>
            </PolicySection>
            
            <PolicySection>
              <h2>Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, 
                we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change 
                will be determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use our Website after those revisions become effective, you agree to be bound by the revised terms. 
                If you do not agree to the new terms, please stop using the Website.
              </p>
            </PolicySection>
            
            <PolicySection>
              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                Ranosha Eyebrows<br />
                21250 Hawthorne Blvd<br />
                Torrance, CA 90503<br />
                United States<br />
                Phone: +1 747-306-9188<br />
                Email: info@ranoshaeyebrows.com
              </p>
            </PolicySection>
          </PolicyContent>
          
          <BackLink to="/">← Back to Home</BackLink>
        </motion.div>
      </div>
    </PolicyContainer>
  );
};

// Styled Components
const PolicyContainer = styled.div`
  padding: 120px 0 80px;
  background-color: var(--light);
  min-height: 100vh;
`;

const PolicyHeader = styled.h1`
  font-size: 2.5rem;
  color: var(--secondary);
  margin-bottom: 2rem;
  text-align: center;
`;

const PolicyContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow);
  margin-bottom: 2rem;
`;

const PolicySection = styled.section`
  margin-bottom: 2rem;
  
  h2 {
    color: var(--primary);
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
    color: var(--text);
  }
  
  ul {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
    
    li {
      margin-bottom: 0.5rem;
      line-height: 1.6;
      color: var(--text);
    }
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  color: var(--primary);
  font-weight: 500;
  text-decoration: none;
  transition: var(--transition);
  
  &:hover {
    color: var(--secondary);
  }
`;

export default TermsOfUse;