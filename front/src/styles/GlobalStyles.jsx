import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  a{
    text-decoration:none;
    color:inherit;
  }
  button{
    background: inherit;
    border:none;
    box-shadow:none;
    overflow:visible;
    cursor:pointer;
    outline:none;
    font-size: 16px;
  }
  button:hover{
    color: white;
  }

  *{
    box-sizing:border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    padding: 10px 30px;
  }
`;

export default GlobalStyles;
