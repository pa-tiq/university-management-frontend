import React from 'react';
import styled from 'styled-components';

const MyContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : undefined)};
  margin: auto;
  margin-top: 0.5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 1150px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const BaseContainer = ({ maxWidth, children }) => {
  return <MyContainer maxWidth={maxWidth}>{children}</MyContainer>;
};

export default BaseContainer;
