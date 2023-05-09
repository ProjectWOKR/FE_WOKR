import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
// 웹폰트
@font-face {
  font-family:'Noto Sans KR', sans-serif;
  src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap') format('woff');
  font-weight: 400;
  font-style: normal;
}

:root {
  
  --bg-color : #ffffff;
  --main-color : #FF8336;
  --main-bg : #BEBEBE;
  --main-gray : #f3efef;
  --font-style: 'Noto Sans KR';
  --text-color : #2b2b2b;
  --default-bolder : 1.5px solid #d9d9d9;
  --main-border-color : rgba(232,232,232,1);
  --main-box-shadow : 0px 4px 4px rgba(0,0,0,0.25)
  --main-border : 1.5px solid rgb(232, 232, 232);
  --placeholder-color : #BEBEBE ;

  --box-shadow : 0px 3px 15px rgba(124,124,124,0.25) ;
  --btn-shadow : 0px 2px 5px rgba(210, 210, 210, 0.70);

  --input-hover : 1.5px solid #FF8336;
  --input-focus : drop-shadow(0px 3px 10px #FF8336);
  --toastify-toast-width: 380px;
  body{
    background-color: var(--bg-color);
    margin: 0;
  }
  *{
    font-family: var(--font-style);
    font-weight: 400;
    word-break: break-all;
    box-sizing: border-box;
  }
  ul li, ol li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  input{
    /* border: none; */
    box-sizing: border-box;
    padding: 0 15px;
    margin: 0;
    outline: none;
    /* border-radius: 8px; */
    cursor: text;
  }
  a {
    text-decoration: none;
  }
  button{
    cursor: pointer;
    
  }
}
`;

export default GlobalStyle;
