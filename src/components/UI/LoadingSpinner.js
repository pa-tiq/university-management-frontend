import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`;

const SpinnerDiv = styled.button`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid purple;
    border-color: purple transparent purple transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;

const LoadingSpinner = () => {
  return <SpinnerDiv></SpinnerDiv>;
};

export default LoadingSpinner;
