import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600|Source+Sans+Pro&display=swap');

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%;
  }

  h1, h2, h3, h4 {
    font-family: 'Open Sans', sans-serif;
  }

  p {
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

export default GlobalStyle;
