import React from 'react';
import styled from 'styled-components';

const DivContainer = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '1100px')};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : undefined)};
`;

const Container = ({ marginTop, maxWidth, children }) => {
  return (
    <DivContainer marginTop={marginTop} maxWidth={maxWidth}>
      {children}
    </DivContainer>
  );
};

export default Container;
