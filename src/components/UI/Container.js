import React from 'react';
import styled from 'styled-components';

const DivContainer = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '1100px')};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : undefined)};
`;

export const TableContainer = styled.div`
  overflow: auto;
  padding: 1rem;
  height: 1100px;

  thead th {
    position: sticky;
    top: 0;
    z-index: 1;
  }
`;

const Container = ({ marginTop, maxWidth, children }) => {
  return (
    <DivContainer marginTop={marginTop} maxWidth={maxWidth}>
      {children}
    </DivContainer>
  );
};

export default Container;
