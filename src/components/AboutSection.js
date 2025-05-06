import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { FaMedal, FaUsers, FaRegSmile } from 'react-icons/fa';
import Rano from "../assets/hero.JPG"

const AboutSection = () => {
  const features = [
    {
      icon: <FaMedal />,
      title: '6 Years Experience',
      description: 'Our studio has been successfully operating in the permanent makeup market for over 6 years, constantly improving technologies and enhancing service quality.',
    },
    {
      icon: <FaUsers />,
      title: '10,000+ Procedures',
      description: 'Over the years, we have performed more than 10,000+ permanent makeup procedures, earning the trust and recognition of our clients.',
    },
  ];

  return (
    <StyledAbout id="about">
      <div className="container">
        <SectionHeading 
          subtitle="About Our Studio" 
          title="Premium Permanent Makeup Artistry"
          align="left"
        />
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="salon-name">Beauty Salon Ranosha</h3>
            
            <p className="description">
            Permanent Makeup & Henna Studio in Torrance, CA. We specialize in natural-looking permanent makeup for brows and lips, as well as organic black henna for nails. With 6+ years of experience, we provide a halal, safe, and relaxing beauty experience. Located in sunny Los Angeles.
            </p>
            
            <motion.div 
              className="features"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  className="feature-item" 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="feature-icon-wrapper">
                    <div className="feature-icon">{feature.icon}</div>
                  </div>
                  <div className="feature-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="about-images-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="image-collage">
              <motion.div 
                className="main-image-container"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img src={Rano} alt="Ranosha - Permanent Makeup Artist" />
              </motion.div>
              
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorative elements - can be adjusted or removed as needed */}
      {/* <div className="background-decoration decoration-1"></div> */}
      {/* <div className="background-decoration decoration-2"></div> */}
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  position: relative;
  overflow: hidden;
  background-color: var(--light-bg); /* Slightly off-white for warmth */
  padding: var(--section-padding) 0;

  .about-content {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr; /* Adjust column ratio */
    gap: 4rem; /* Increased gap */
    align-items: center; /* Vertically align items */
    margin-top: 3rem;
  }
  
  .about-text {
    /* padding-right: 2rem; // Removed for better balance with new grid */
  }
  
  .salon-name {
    font-size: 1.8rem; /* Increased size */
    font-family: var(--font-accent);
    color: var(--secondary-dark);
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .description {
    font-size: 1.05rem;
    line-height: 1.8;
    margin-bottom: 2.5rem; /* Increased margin */
    color: var(--text);
  }
  
  .features {
    margin-top: 2.5rem; /* Adjusted margin */
  }
  
  .feature-item {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start; /* Align icon and text to top */
    margin-bottom: 2rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .feature-icon-wrapper {
    flex-shrink: 0; /* Prevent icon from shrinking */
    background: var(--primary-light);
    border-radius: 50%;
    width: 70px; /* Increased size */
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(var(--primary-rgb), 0.15);
  }

  .feature-icon {
    color: var(--primary);
    font-size: 1.8rem; /* Increased icon size */
  }
  
  .feature-content {
    h4 { /* Changed from h3 for better semantic hierarchy */
      font-size: 1.25rem; /* Increased size */
      margin-bottom: 0.6rem;
      font-weight: 600;
      color: var(--secondary-dark);
    }
    
    p {
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 0;
      color: var(--text-light);
    }
  }
  
  .about-images-wrapper {
    position: relative;
  }
  
  .image-collage {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto; /* Adjust rows based on content */
    gap: 1.5rem;
    align-items: stretch; /* Make items fill the grid cell height */
  }
  
  .main-image-container {
    grid-column: 1 / span 2; /* Main image spans both columns */
    grid-row: 1;
    border-radius: var(--radius-lg); /* Larger radius */
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    aspect-ratio: 4 / 3; /* Maintain aspect ratio */
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .secondary-image-container {
    grid-column: 1 / span 1;
    grid-row: 2;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow);
    aspect-ratio: 3 / 4; /* Portrait aspect ratio */

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .quote-block {
    grid-column: 2 / span 1;
    grid-row: 2;
    background: var(--primary);
    color: var(--light);
    border-radius: var(--radius-lg);
    padding: 2.5rem; /* Increased padding */
    display: flex;
    flex-direction: column; /* Allow for potential future additions */
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: var(--shadow);
    
    p {
      color: var(--light);
      font-size: 1.15rem; /* Slightly larger */
      line-height: 1.7;
      font-style: italic;
      margin: 0;
      font-family: var(--font-accent);
    }
  }
  
  /* Commented out background decorations for now, can be re-added if desired */
  /* .background-decoration {
    position: absolute;
    border-radius: 50%;
    z-index: 0;
    pointer-events: none;
    
    &.decoration-1 {
      width: 300px;
      height: 300px;
      background: radial-gradient(circle at center, var(--primary-light) 0%, transparent 70%);
      opacity: 0.4;
      bottom: -150px;
      left: -100px;
    }
    
    &.decoration-2 {
      width: 250px;
      height: 250px;
      background: radial-gradient(circle at center, var(--accent-light) 0%, transparent 70%);
      opacity: 0.3;
      top: 50px;
      right: -100px;
    }
  } */
  
  @media (max-width: 992px) {
    .about-content {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    
    .about-text {
      /* padding-right: 0; // Already removed */
    }
    .image-collage {
        grid-template-columns: 1fr; /* Stack images on smaller screens */
    }
    .main-image-container,
    .secondary-image-container,
    .quote-block {
        grid-column: 1 / span 1; /* Each takes full width */
    }
    .secondary-image-container {
        grid-row: 2; /* Explicitly set row for stacking */
        aspect-ratio: 16/9; /* More landscape for single column */
    }
    .quote-block {
        grid-row: 3; /* Explicitly set row for stacking */
    }
  }
  
  @media (max-width: 768px) {
    .salon-name {
      font-size: 1.6rem;
    }
    .description {
      font-size: 1rem;
    }
    .feature-item {
      gap: 1rem;
      /* flex-direction: column; // Keep side-by-side if space allows */
      /* align-items: center; */
      /* text-align: center; */
    }
    
    .feature-icon-wrapper {
      width: 60px;
      height: 60px;
    }
    .feature-icon {
      font-size: 1.5rem;
    }
    .feature-content h4 {
        font-size: 1.15rem;
    }
  }
  
  @media (max-width: 480px) {
    .salon-name {
      font-size: 1.4rem;
    }
    .description {
      font-size: 0.95rem;
    }
    .feature-item {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 0.8rem;
    }
    
    .feature-content h4 {
      font-size: 1.1rem;
    }
    
    .quote-block {
      padding: 2rem;
      p {
        font-size: 1.05rem;
      }
    }
    .image-collage {
        gap: 1rem;
    }
  }
`;

export default AboutSection;