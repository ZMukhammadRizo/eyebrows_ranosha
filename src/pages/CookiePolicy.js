import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CookiePolicy = () => {
  return (
    <PolicyContainer>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PolicyHeader>Cookie Policy</PolicyHeader>
          
          <PolicyContent>
            <PolicySection>
              <h2>Introduction</h2>
              <p>
                This Cookie Policy explains how Ranosha Eyebrows ("we", "us", or "our") uses cookies and similar technologies 
                to recognize you when you visit our website at ranoshaeyebrows.com ("Website"). It explains what these technologies are 
                and why we use them, as well as your rights to control our use of them.
              </p>
            </PolicySection>
            
            <PolicySection>
              <h2>What are cookies?</h2>
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
                Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, 
                as well as to provide reporting information.
              </p>
              <p>
                Cookies set by the website owner (in this case, Ranosha Eyebrows) are called "first-party cookies". 
                Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies 
                enable third-party features or functionality to be provided on or through the website (e.g., advertising, 
                interactive content, and analytics). The parties that set these third-party cookies can recognize your 
                computer both when it visits the website in question and also when it visits certain other websites.
              </p>
            </PolicySection>
            
            <PolicySection>
              <h2>Why do we use cookies?</h2>
              <p>
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons 
                in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. 
                Other cookies also enable us to track and target the interests of our users to enhance the experience on our 
                Website. Third parties serve cookies through our Website for advertising, analytics, and other purposes.
              </p>
            </PolicySection>
            
            <PolicySection>
              <h2>How can you control cookies?</h2>
              <p>
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting 
                your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories 
                of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide 
                you with services.
              </p>
              <p>
                You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, 
                you may still use our website though your access to some functionality and areas of our website may be restricted.
              </p>
            </PolicySection>
            
            <PolicySection>
              <h2>Changes to this Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use 
                or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to 
                stay informed about our use of cookies and related technologies.
              </p>
              <p>
                The date at the top of this Cookie Policy indicates when it was last updated.
              </p>
            </PolicySection>
            
            <PolicySection>
              <h2>Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or other technologies, please email us at 
                info@ranoshaeyebrows.com or contact us at:
              </p>
              <p>
                Ranosha Eyebrows<br />
                21250 Hawthorne Blvd<br />
                Torrance, CA 90503<br />
                United States<br />
                Phone: +1 747-306-9188
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

export default CookiePolicy;