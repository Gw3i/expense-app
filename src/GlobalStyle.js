import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}


body {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    font-family: 'Share Tech Mono', monospace;
    background-color: var(--background-color);
    color: var(--primary-color)
}

p, input, label {
    font-size: 1rem;
}


:root {
    --primary-color: #f5f1eb;
    --background-color: #0c0e14;

    --accent-color: #38FF13;
}
`;

export default GlobalStyle;
