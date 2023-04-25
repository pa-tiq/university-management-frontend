import React from 'react';
import styled from 'styled-components';

const DivContainer = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '1100px')};
`;

const Container = ({ maxWidth, children }) => {
  return <DivContainer maxWidth={maxWidth}>{children}</DivContainer>;
};

export default Container;
