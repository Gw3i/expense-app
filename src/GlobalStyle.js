import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}


body {
    margin: 0;
    padding: 0;
    font-size: 62.5%
    font-family: 'Share Tech Mono', monospace;
}


root {

    --primary-color: #fdf8f1;
    --background-color: #15202c
}
`;

export default GlobalStyle;
