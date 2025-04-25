import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Upgraded color palette */
    --primary: #f193b1; /* Richer pink */
    --primary-rgb: 241, 147, 177; /* RGB values of primary color for opacity */
    --primary-light: #ffd1e0; /* Light pink for backgrounds */
    --primary-dark: #d86c96; /* Darker pink for hover states */
    --secondary: #7a4c70; /* Deeper mauve */
    --secondary-light: #a77c9e; /* Lighter mauve */
    --secondary-dark: #5a3651; /* Darker mauve for contrast */
    --accent: #e0447c; /* More vibrant rose */
    --dark: #232323; /* Deeper black */
    --light: #fefefe; /* Brighter white */
    --light-bg: #f8f5f7; /* Subtle pink-tinted background */
    --gray: #e1e1e1; /* Light gray */
    --text: #3a3a3a; /* Main text color */
    --text-light: #7e7e7e; /* Secondary text color */
    
    /* UI variables */
    --radius-sm: 5px;
    --radius-md: 10px;
    --radius-lg: 20px;
    --radius-xl: 30px;
    
    --shadow: 0 5px 20px rgba(0, 0, 0, 0.07);
    --shadow-hover: 0 8px 25px rgba(0, 0, 0, 0.12);
    --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.15);
    
    --transition: all 0.3s ease;
    --section-padding: 6rem 0;
    
    /* Typography */
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
    font-size: clamp(2.5rem, 5vw, 4.5rem);
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3.2rem);
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
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
    background: var(--accent);
    color: var(--light);
    border: none;
    padding: 14px 32px;
    border-radius: var(--radius-xl);
    font-family: var(--font-main);
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    font-size: 1rem;
    box-shadow: var(--shadow);
    letter-spacing: 0.5px;
    
    &:hover {
      background: var(--secondary);
      transform: translateY(-3px);
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
  }
`;

export default GlobalStyles; 