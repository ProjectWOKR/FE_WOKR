import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
// 웹폰트
/* @font-face {
  font-family: ;
  src: url() format();
  font-weight: ;
} */

:root {
  --bg-color : #ffffff;
  --main-color : #FF8336;
  --main-bg : #BEBEBE;
  --box-shadow : 0px 3px 15px rgba(124,124,124,0.25) ;
  --btn-shadow : 0px 2px 5px rgba(210, 210, 210, 0.70);
  --main-border-color : rgba(232,232,232,1);
  body{
    background-color: var(--bg-color);
  }
  *{
    /* font-size: 1rem;
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
    word-break: break-all; */
  }
  ul li, ol li {
    list-style: none;
  }
  input{
    border: none;
    border: 1px solid #ccc;
    box-sizing: border-box;
    padding: 0 15px;
    margin: 0;
    outline: none;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
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
