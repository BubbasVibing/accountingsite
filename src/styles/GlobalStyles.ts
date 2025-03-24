import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color: #2c3e50;
    background-color: #ffffff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  a {
    font-weight: 500;
    color: #3498db;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #2980b9;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color:rgb(255, 255, 255);
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #3498db;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #2980b9;
      transform: translateY(-1px);
    }

    &:focus,
    &:focus-visible {
      outline: 2px solid #3498db;
      outline-offset: 2px;
    }
  }
`;

export default GlobalStyles; 