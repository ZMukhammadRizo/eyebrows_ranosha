import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Premium color palette inspired by expert-pmu.ru */
    --primary: #c69c6d; /* Elegant gold */
    --primary-rgb: 198, 156, 109; /* RGB values of primary color for opacity */
    --primary-light: #f5efe6; /* Soft cream for backgrounds */
    --primary-dark: #a37e4f; /* Deeper gold for hover states */
    --secondary: #4a4a4a; /* Rich dark gray */
    --secondary-light: #777777; /* Medium gray */
    --secondary-dark: #2c2c2c; /* Near black for contrast */
    --accent: #d4af37; /* Gold accent */
    --accent-light: #f1e5c3; /* Light gold for subtle accents */
    --dark: #1a1a1a; /* Deep black */
    --light: #FFFFFF; /* Clean white */
    --light-bg: #faf7f2; /* Warm white background */
    --gray: #f0eae0; /* Light warm gray */
    --text: #333333; /* Main text color - deep for better contrast */
    --text-light: #777777; /* Secondary text color */
    
    /* UI variables - more elegant for luxury feel */
    --radius-sm: 2px;
    --radius-md: 4px;
    --radius-lg: 8px;
    --radius-xl: 12px;
    
    --shadow: 0 4px 12px rgba(213, 166, 189, 0.08);
    --shadow-hover: 0 6px 16px rgba(213, 166, 189, 0.12);
    --shadow-lg: 0 8px 24px rgba(213, 166, 189, 0.15);
    
    --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    --section-padding: 6rem 0;
    
    /* Typography - more luxurious fonts */
    --font-main: 'Montserrat', sans-serif;
    --font-accent: 'Playfair Display', serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-main);
    color: var(--text);
    background-color: var(--light);
    overflow-x: hidden;
    line-height: 1.6;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5 {
    font-family: var(--font-accent);
    margin-bottom: 1.5rem;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.01em;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4.2rem);
    font-weight: 400;
    letter-spacing: -0.5px;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 400;
  }

  h3 {
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    font-weight: 500;
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 2vw, 1.1rem);
    line-height: 1.8;
  }

  a {
    text-decoration: none;
    color: var(--secondary);
    transition: var(--transition);
    
    &:hover {
      color: var(--primary);
    }
  }

  button, .button {
    background: var(--primary);
    color: var(--light);
    border: none;
    padding: 14px 32px;
    border-radius: var(--radius-sm);
    font-family: var(--font-main);
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    font-size: 0.95rem;
    box-shadow: var(--shadow);
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
    z-index: 1;
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background: var(--primary-dark);
      transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
      z-index: -1;
    }
    
    &:hover {
      color: var(--light);
      transform: translateY(-2px);
      box-shadow: var(--shadow-hover);
      
      &:before {
        width: 100%;
      }
    }
  }

  .button-outline {
    background: transparent;
    color: var(--primary);
    border: 1px solid var(--primary);
    
    &:hover {
      background: var(--primary-light);
      color: var(--primary-dark);
    }
  }

  .button-accent {
    background: var(--accent);
    
    &:hover {
      background: var(--accent-light);
      color: var(--secondary-dark);
    }
  }

  img {
    max-width: 100%;
    display: block;
  }

  section {
    padding: var(--section-padding);
  }

  .container {
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
  }

  .divider {
    width: 80px;
    height: 2px;
    background: var(--primary);
    margin: 1.5rem 0;
    position: relative;
    overflow: hidden;
    
    &:after {
      content: '';
      position: absolute;
      left: -100%;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, var(--accent), transparent);
      animation: shimmer 2s infinite;
    }
    
    @keyframes shimmer {
      0% { left: -100%; }
      100% { left: 100%; }
    }
  }

  .section-title {
    position: relative;
    display: inline-block;
    margin-bottom: 3rem;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 60px;
      height: 2px;
      background: var(--primary);
      transition: width 0.3s ease;
    }
    
    &:hover:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 4.5rem 0;
    }
    
    body {
      font-size: 15px;
    }
    
    h1 {
      font-size: clamp(2rem, 4vw, 3rem);
    }
    
    h2 {
      font-size: clamp(1.7rem, 3.5vw, 2.5rem);
    }
    
    h3 {
      font-size: clamp(1.4rem, 3vw, 2rem);
    }
    
    p {
      font-size: clamp(0.95rem, 2vw, 1rem);
    }
  }
  
  @media (max-width: 480px) {
    section {
      padding: 3.5rem 0;
    }
    
    .container {
      width: 92%;
    }
    
    button, .button {
      padding: 12px 26px;
      font-size: 0.9rem;
    }
  }
`;

export default GlobalStyles;