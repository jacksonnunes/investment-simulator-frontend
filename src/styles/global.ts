import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  :root {
    --background: #001219;
    --primary: #008000;
    --secondary: #19323C;
    --text: #F7FFF7;
    --text-secondary: #C5CAC5;
    --error: #EB2013;

    @media only screen and (max-width: 768px) {
      font-size: 80%;
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 90%;
    }
  }

  body {
    margin: 0 auto;
    background: var(--background);
    max-width: 1300px;
    -webkit-font-smoothing: antialiased;
  }

  body, input {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    color: var(--text);
  }

  button {
    cursor: pointer;

    font-family: 'Inter', sans-serif;
    font-weight: 500;
    
    background-color: var(--primary);
    color: var(--text);

    border: none;
    border-radius: 8px;
  }
`;
