import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <PolicyContainer>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PolicyHeader>Privacy Policy</PolicyHeader>
          
          <PolicyContent>
            <PolicySection>
              <h2>Introduction</h2>
              <p>
                At Ranosha Eyebrows, we respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit our website 
                and tell you about your privacy rights and how the law protects you.
              </p>
              <p>
                This privacy policy applies to personal data we collect when you use our website, book appointments, 
                or interact with us in any other way.
              </p>
            </PolicySection>
            
            <PolicySection>
              <h2>Information We Collect</h2>
              <p>
                We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul>
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes email address, telephone numbers, and address.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
                <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
              </ul>
            </PolicySection>
            
            <PolicySection>
              <h2>How We Use Your Information</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul>
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
              <p>
                Generally, we do not rely on consent as a legal basis for processing your personal data although we will get your consent before sending third party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.
              </p>
            </PolicySection>
            
            <PolicySection>
              <h2>Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal data on our instructions, and they are subject to a duty of confidentiality.
              </p>
              <p>
                We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
              </p>
            </PolicySection>
            
            <PolicySection>
              <h2>Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul>
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
              <p>
                If you wish to exercise any of the rights set out above, please contact us using the details below.
              </p>
            </PolicySection>
            
            <PolicySection>
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the effective date at the top of this privacy policy.
              </p>
              <p>
                You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
              </p>
            </PolicySection>
            
            <PolicySection>
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
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

export default PrivacyPolicy;