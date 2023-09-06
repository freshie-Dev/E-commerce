import styled from "styled-components";

const HoverButton = styled.button`
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "50px")};;
  background: #e0e0e0;
  width: ${(props) => (props.width ? props.width : "100%")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "350px")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "max-content")};
  box-shadow: 3px 3px 10px #bebebe, -3px -3px 10px #ffffff;
  color: ${(props) => (props.color ? props.color : "#95979d")};
  margin: ${(props) => (props.margin ? props.margin : "10px 20px")};
  padding: ${(props) => (props.padding ? props.padding : "10px 20px")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.2rem")};
  transition: box-shadow 0.3s, font-weight 0.3s;

  &:hover,
  &:focus {
    animation: buttonAnimation 0.3s forwards;
  }

  &:not(:hover) {
    animation: buttonReverseAnimation 0.3s forwards;
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
      box-shadow: inset 2px 2px 5px #bebebe, inset -2px -2px 5px #ffffff;
      font-weight: 300;
    }
  }

  @keyframes buttonReverseAnimation {
    0% {
      box-shadow: inset 2px 2px 5px #bebebe, inset -2px -2px 5px #ffffff;
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

export { HoverButton };