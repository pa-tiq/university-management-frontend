import styled, { keyframes } from 'styled-components';
import { colors } from '../../constants/colors';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`;

const appear = keyframes`
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
`;

const SpinnerDiv = styled.button`
  display: inline-block;
  margin-top: 20%;
  width: 80px;
  height: 90px;
  border-color: transparent;
  box-shadow: none;
  background: transparent;
  z-index: 20;

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 7px solid ${colors.buttons};
    border-color: ${colors.buttons} transparent ${colors.buttons} transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;

const LoadingSpinner = () => {
  return <SpinnerDiv></SpinnerDiv>;
};

export default LoadingSpinner;
