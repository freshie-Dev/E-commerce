// this is a global style file
// helop me set it up
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    body {
        padding: 3% 7%;
        background-color: ${({theme}) => theme.colors.bgc};
        font-family: 'Ubuntu', sans-serif;
        text-gray-700
    }
    .main {
      margin: 50px 0 50px;
      padding: 50px;
      border-radius: 50px;
      background: #e0e0e0;
      box-shadow: inset 5px 5px 10px #bebebe,
                  inset -5px -5px 10px #ffffff;
    }
    .color-gray{
        color: #434343;
    }
    /////////////////////// for inset-offset inputs/////////////////////
    .input {
        background: #e0e0e0;
        color: #696a6f;
        border-radius: 40px;
        padding: 20px 20px;
        outline: none;
      }
    .inset-shadow {
        box-shadow: inset 2px 2px 5px #bebebe,
                    inset -2px -2px 5px #ffffff;
      }
    
      .input:hover, .input:focus {
        animation: inputAnimation 0.3s forwards;
      }
      @keyframes inputAnimation {
        0%{
          box-shadow: 2px 2px 10px #bebebe, -2px -2px 10px #ffffff;
        }
        50%{
          box-shadow: none;
        }
        100% {
          box-shadow: inset 2px 2px 5px #bebebe,
                      inset -2px -2px 5px #ffffff;
        }
      }
    
      .input:not(:hover):not(:focus) {
        animation: inputReverseAnimation 0.3s forwards;
      }
      @keyframes inputReverseAnimation{
        0% {
          box-shadow: inset 5px 2px 5px #bebebe,
                      inset -2px -2px 5px #ffffff;
        }
        50% {
          box-shadow: none;
        }
        100% {
          box-shadow: 2px 2px 5px #bebebe, -2px -2px 5px #ffffff;
        }
      }


      


      //////////////////////// for inset-offset Buttons/////////////////////
      .button {
        border-radius: 50px;
        background: #e0e0e0;
        width: 100%;
        max-width: 350px;
        box-shadow:  3px 3px 10px #bebebe,
                    -3px -3px 10px #ffffff;
        color: #95979d;         
        margin:  30px 0;
        padding: 10px 20px;
        font-size: 1.2rem;
      }
    
      .button:hover , .button:focus {
        animation: buttonAnimation 0.3s forwards;
      }
    
      @keyframes buttonAnimation {
        0% {
          box-shadow: 2px 2px 10px #bebebe, -2px -2px 10px #ffffff;
          
        }
        50% {
          box-shadow: none;
          font-weight: 400;
        }
        100% {
          box-shadow: inset 2px 2px 5px #bebebe,
                    inset -2px -2px 5px #ffffff;
          font-weight: 300;
        }
      }
      .button:not(:hover) {
        animation: buttonReverseAnimation 0.3s forwards;
      }

      @keyframes buttonReverseAnimation {
        0% {
          box-shadow: inset 2px 2px 5px #bebebe,
                    inset -2px -2px 5px #ffffff;
          font-weight: 300;
        }
        50% {
          box-shadow: none;
          font-weight: 400;
        }
        100% {
          box-shadow: 2px 2px 5px #bebebe, -2px -2px 5px #ffffff;
        }
      }

      `;

export default GlobalStyle;
    
