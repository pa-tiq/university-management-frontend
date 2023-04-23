import React from 'react';
import styled from 'styled-components';

const DivContainer = styled.div`
  text-align: center;
`;

const Container = (props) => {
  return <DivContainer>{props.children}</DivContainer>;
};

export default Container;
