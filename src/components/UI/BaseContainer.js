import React from 'react';
import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
`;

const MyContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : undefined)};
  margin: auto;
  margin-top: -0.2rem;
  margin-bottom: 1rem;
  overflow-y: hidden;
  animation: ${appear} 300ms ease-out;

  @media screen and (max-width: 1150px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const BaseContainer = ({ maxWidth, children }) => {
  return <MyContainer maxWidth={maxWidth}>{children}</MyContainer>;
};

export default BaseContainer;
