import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    border: none;  
    box-sizing: border-box;
    ::-webkit-scrollbar {
    display: none;
  }
    }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
