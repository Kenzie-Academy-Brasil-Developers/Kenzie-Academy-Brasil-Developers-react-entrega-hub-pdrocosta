import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

   *{
    margin:0px;
    padding: 0px;
    width: 100%;
    height: 100%;
    font-family: 'Inter'
   } 
    
        :root{
            --color-primary:#FF577F;
            --color-primary-Focus: #FF427F;
            --color-primary-Negative: #59323F;
            --color-grey-0: #F8F9FA;
            --color-grey-1: #868E96;
            --color-grey-2: #343B41;
            --color-grey-3: #212529;
            --color-grey-4: #121214;
        }
        button{
        cursor: pointer; 
      }
  
`;
export default GlobalStyle;
