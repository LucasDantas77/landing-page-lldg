import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
padding: 0;
margin: 0;
list-style: none;
font-family: IBM Plex Sans, sans-serif;
background-color: #000;
}

button{
    cursor: pointer;
}


a{
    cursor: pointer;
}

:root{
    --color-primary: #27ae60;
    --color-primary-50: #93d7af;
    --color-secondary: #eb5757;
    --grey-100: #333333;
    --grey-50: #828282;
    --grey-30: #a0a0a0;
    --grey-20: #E0E0E0;
    --grey-0: #f5f5f5;
    --negative: #e60000;
    --warning: #ffcd07;
    --sucess: #168821;
    --information: #155aca
    --Black: #000
}
`;
export default GlobalStyles;
