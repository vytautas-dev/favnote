import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

html {
  font-size: 62.5%;
}

body {
  padding-left: 150px;
  font-size: 1.6rem; //happy reams
  font-family: "Montserrat", sans-serif;
}
`;

export default GlobalStyle;
