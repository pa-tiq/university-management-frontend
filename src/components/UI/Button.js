import React from 'react';
import { css, keyframes } from 'styled-components';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const bump = keyframes`
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.95);
  }
  30% {
    transform: scale(1.04);
  }
  50% {
    transform: scale(1.06);
  }
  70% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  } 
  `;

const MyButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${colors.buttons};
  opacity: 0.8;
  color: ${colors.buttons};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  transition-duration: 0.4s;
  cursor: pointer;

  &:active {
    animation: ${bump} 300ms ease-out;
  }

  &:hover {
    opacity: 1;
  }

  ${(props) =>
    props.primary &&
    css`
      background: ${colors.buttons};
      color: white;
    `}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}
`;

const Button = (props) => {
  return (
    <MyButton
      primary={props.primary}
      onClick={props.onClick}
      type='button'
      disabled={props.disabled}
    >
      {props.children}
    </MyButton>
  );
};

export default Button;
