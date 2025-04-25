import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

// Will need to replace with actual high-quality hero image
const heroImage = 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80';

const HeroSection = () => {
  return (
    <StyledHero id="hero">
      <BackgroundDecoration />
      <BackgroundCircle1 />
      <BackgroundCircle2 />
      
      {/* Add decorative floating elements */}
      <FloatingElement1 
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <FloatingElement2 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -8, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <FloatingElement3 
        animate={{ 
          y: [0, -20, 0],
          x: [0, 15, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <HeroContent className="container">
        <TextContent>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SubHeading>Премиум-салон красоты</SubHeading>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Идеальные Брови <br/> 
            <AccentSpan>Идеальная Ты</AccentSpan>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Оцените премиальное искусство оформления бровей, которое подчеркнет вашу естественную красоту. 
            Наши экспертные техники создают идеальную форму, обрамляющую ваши уникальные черты.
          </motion.p>
          
          <ButtonsWrapper>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PrimaryButton 
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <ButtonContent>
                    <span>Записаться на Прием</span>
                    <ButtonArrow className="button-arrow">→</ButtonArrow>
                  </ButtonContent>
                </PrimaryButton>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SecondaryButton 
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <span>Изучить Услуги</span>
                </SecondaryButton>
              </motion.div>
            </motion.div>
          </ButtonsWrapper>
          
          <TrustSignals>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <TrustItem>
                <TrustDot />
                <span>100% натуральные продукты</span>
              </TrustItem>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <TrustItem>
                <TrustDot />
                <span>Сертифицированные мастера</span>
              </TrustItem>
            </motion.div>
          </TrustSignals>
        </TextContent>
        
        <ImageContent>
          <ImageWrapper
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <ImageContainer>
              <img src={heroImage} alt="Брови от Раноши" />
              <ImageOverlay />
              <ImageGlowEffect />
            </ImageContainer>
            
            <BadgeContainer>
              <Badge
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <BadgeHighlight>5+</BadgeHighlight>
                <span>Лет Опыта</span>
              </Badge>
              
              <Badge2
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <BadgeHighlight>100%</BadgeHighlight>
                <span>Удовлетворения</span>
              </Badge2>
            </BadgeContainer>
            
            <CornerDecoration />
          </ImageWrapper>
        </ImageContent>
      </HeroContent>
      
      
    </StyledHero>
  );
};

// Styled components
const StyledHero = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 6rem 0 2rem;
  overflow: hidden;
  background: linear-gradient(135deg, var(--light) 0%, var(--light-bg) 100%);
  
  @media (max-width: 992px) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(var(--primary-light) 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.4;
  pointer-events: none;
`;

// Floating decorative elements
const FloatingElement1 = styled(motion.div)`
  position: absolute;
  top: 15%;
  left: 5%;
  width: 80px;
  height: 80px;
  border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;
  background: linear-gradient(135deg, var(--primary-light), rgba(224, 68, 124, 0.1));
  opacity: 0.6;
  pointer-events: none;
  z-index: 1;
`;

const FloatingElement2 = styled(motion.div)`
  position: absolute;
  bottom: 25%;
  left: 8%;
  width: 120px;
  height: 120px;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  background: linear-gradient(135deg, rgba(224, 68, 124, 0.1), var(--primary-light));
  opacity: 0.4;
  pointer-events: none;
  z-index: 1;
`;

const FloatingElement3 = styled(motion.div)`
  position: absolute;
  top: 20%;
  right: 15%;
  width: 60px;
  height: 60px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background: linear-gradient(135deg, var(--secondary-light), rgba(224, 68, 124, 0.05));
  opacity: 0.5;
  pointer-events: none;
  z-index: 1;
`;

const BackgroundCircle1 = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(to right, var(--primary-light), transparent);
  top: -150px;
  left: -150px;
  z-index: 0;
  opacity: 0.5;
`;

const BackgroundCircle2 = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(to left, var(--primary-light), transparent);
  bottom: -100px;
  right: -100px;
  z-index: 0;
  opacity: 0.5;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  z-index: 1;
  
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const SubHeading = styled.div`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 1rem;
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: rgba(224, 68, 124, 0.1);
  border-radius: var(--radius-lg);
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 600px;
  
  h1 {
    margin-bottom: 1.5rem;
    line-height: 1.1;
  }
  
  p {
    color: var(--text);
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const AccentSpan = styled.span`
  color: var(--accent);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 12px;
    background: rgba(224, 68, 124, 0.2);
    bottom: 8px;
    left: 0;
    z-index: -1;
    border-radius: 10px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 2.5rem;
  
  @media (max-width: 992px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const PrimaryButton = styled(Link)`
  background: linear-gradient(to right, var(--accent), var(--primary-dark));
  color: white;
  padding: 16px 32px;
  border-radius: var(--radius-xl);
  cursor: pointer;
  transition: var(--transition);
  font-weight: 600;
  display: inline-block;
  box-shadow: var(--shadow);
  
  &:hover {
    background: linear-gradient(to right, var(--primary-dark), var(--accent));
    color: white;
    box-shadow: var(--shadow-hover);
    
    .button-arrow {
      transform: translateX(5px);
    }
  }
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ButtonArrow = styled.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  display: inline-block;
`;

const SecondaryButton = styled(Link)`
  background: transparent;
  color: var(--secondary);
  padding: 16px 32px;
  border-radius: var(--radius-xl);
  cursor: pointer;
  transition: var(--transition);
  font-weight: 600;
  display: inline-block;
  border: 2px solid var(--secondary);
  
  &:hover {
    background: var(--secondary);
    color: white;
    box-shadow: var(--shadow);
  }
`;

const TrustSignals = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2.5rem;
  
  @media (max-width: 992px) {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text);
  font-size: 0.95rem;
`;

const TrustDot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--accent);
`;

const ImageContent = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  max-width: 550px;
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 3/4;
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.3), transparent 50%);
`;

const ImageGlowEffect = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  border-radius: var(--radius-md);
  pointer-events: none;
  box-shadow: inset 0 0 30px rgba(224, 68, 124, 0.15);
`;

const BadgeContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
`;

const Badge = styled(motion.div)`
  position: absolute;
  left: -30px;
  top: 30%;
  background: white;
  padding: 1rem;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 120px;
  pointer-events: auto;
  cursor: default;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.4);
  
  span {
    font-size: 0.8rem;
    color: var(--text);
  }
  
  @media (max-width: 1200px) {
    left: -20px;
    padding: 0.8rem;
    min-width: 100px;
  }
  
  @media (max-width: 992px) {
    left: 10%;
  }
`;

const Badge2 = styled(motion.div)`
  position: absolute;
  right: -30px;
  bottom: 30%;
  background: white;
  padding: 1rem;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 120px;
  pointer-events: auto;
  cursor: default;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.4);
  
  span {
    font-size: 0.8rem;
    color: var(--text);
  }
  
  @media (max-width: 1200px) {
    right: -20px;
    padding: 0.8rem;
    min-width: 100px;
  }
  
  @media (max-width: 992px) {
    right: 10%;
  }
`;

const BadgeHighlight = styled.span`
  font-size: 1.8rem !important;
  font-weight: 700;
  color: var(--accent) !important;
  line-height: 1;
  margin-bottom: 0.3rem;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const CornerDecoration = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-right: 4px solid var(--primary);
  border-bottom: 4px solid var(--primary);
  bottom: -20px;
  right: -20px;
  border-bottom-right-radius: 20px;
  z-index: -1;
`;

export default HeroSection; 