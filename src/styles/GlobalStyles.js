import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Minimalistic color palette */
    --primary: #94B49F; /* Soft sage green */
    --primary-rgb: 148, 180, 159; /* RGB values of primary color for opacity */
    --primary-light: #ECF4F3; /* Very light sage for backgrounds */
    --primary-dark: #789395; /* Muted teal for hover states */
    --secondary: #40514E; /* Deep teal */
    --secondary-light: #5C7A79; /* Lighter teal */
    --secondary-dark: #2E383C; /* Darker teal for contrast */
    --accent: #CEA07E; /* Warm neutral */
    --dark: #2E383C; /* Deep charcoal black */
    --light: #FFFFFF; /* Clean white */
    --light-bg: #F8FAF9; /* Almost white with slight green tint */
    --gray: #EAEAEA; /* Light gray */
    --text: #2E383C; /* Main text color - deeper for better contrast */
    --text-light: #6B7C7C; /* Secondary text color */
    
    /* UI variables - more subtle for minimalism */
    --radius-sm: 2px;
    --radius-md: 4px;
    --radius-lg: 8px;
    --radius-xl: 12px;
    
    --shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
    --shadow-hover: 0 6px 16px rgba(0, 0, 0, 0.05);
    --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.07);
    
    --transition: all 0.25s ease;
    --section-padding: 5rem 0;
    
    /* Typography - cleaner fonts for minimalism */
    --font-main: 'Poppins', sans-serif;
    --font-accent: 'Cormorant Garamond', serif;
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
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  h1 {
    font-size: clamp(2.2rem, 5vw, 3.8rem);
    font-weight: 300;
    letter-spacing: -0.5px;
  }

  h2 {
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    font-weight: 300;
  }

  h3 {
    font-size: clamp(1.4rem, 3vw, 2.2rem);
    font-weight: 400;
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 2vw, 1.1rem);
    line-height: 1.7;
  }

  a {
    text-decoration: none;
    color: var(--secondary);
    transition: var(--transition);
    
    &:hover {
      color: var(--accent);
    }
  }

  button, .button {
    background: var(--primary);
    color: var(--light);
    border: none;
    padding: 12px 28px;
    border-radius: var(--radius-md);
    font-family: var(--font-main);
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    font-size: 0.95rem;
    box-shadow: var(--shadow);
    letter-spacing: 0.3px;
    
    &:hover {
      background: var(--primary-dark);
      transform: translateY(-2px);
      box-shadow: var(--shadow-hover);
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
    max-width: 1300px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    section {
      padding: 4rem 0;
    }
    
    body {
      font-size: 15px;
    }
    
    h1 {
      font-size: clamp(1.8rem, 4vw, 2.8rem);
    }
    
    h2 {
      font-size: clamp(1.5rem, 3.5vw, 2.2rem);
    }
    
    h3 {
      font-size: clamp(1.2rem, 3vw, 1.8rem);
    }
    
    p {
      font-size: clamp(0.95rem, 2vw, 1rem);
    }
  }
  
  @media (max-width: 480px) {
    section {
      padding: 3rem 0;
    }
    
    .container {
      width: 92%;
    }
    
    button, .button {
      padding: 10px 24px;
      font-size: 0.9rem;
    }
  }
`;

export default GlobalStyles; 