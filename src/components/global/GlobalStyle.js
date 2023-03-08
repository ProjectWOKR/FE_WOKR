import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
// 웹폰트
/* @font-face {
  font-family: ;
  src: url() format();
  font-weight: ;
} */

:root {
  body{}
  *{
   
  }
  ul li, ol li {
    list-style: none;
  }
  input{
    border: none;
    box-sizing: border-box;
    padding: 0 15px;
    margin: 0;
    outline: none;
    height: 40px;
    border-radius: 8px;
    cursor: text;
  }
  button{
    /* background-color: #fff;
    border-radius: 8px; */
    cursor: pointer;
  }
  p{
    padding: 0;
    margin: 0;
  }
}
`;

export default GlobalStyle;
