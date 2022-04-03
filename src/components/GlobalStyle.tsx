import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --max-width: 1240px;

    --primary-background-color: #2A0A4A;
    --secondary-background-color: #FFFFFF;
    --primary-font-color: #FFFFFF;
    --secondary-font-color: #ABABAB;
    --button-color: #FD4B25;
    --active-button-color: #FC795C;

    --primary-font: 'Roboto', Arial, sans-serif;
    --secondary-font: 'Montserrat', Arial, sans-serif;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--primary-background-color);
    color: var(--primary-font-color);
    font-family: var(--primary-font);
    letter-spacing: 0.025em;
  }

  body * {
    box-sizing: border-box;
  }

  #root {
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;
