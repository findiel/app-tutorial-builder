import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    height: 100vh;
    width: 100vw;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
  text-align: center;
  }
`;

export default GlobalStyles;
