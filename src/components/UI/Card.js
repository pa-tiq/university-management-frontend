import React from 'react';
import styled from 'styled-components';

const DivCard = styled.div`
  background: rgb(40, 40, 40);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  transition-duration: 0.4s;

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

const Card = (props) => {
  return <DivCard>{props.children}</DivCard>;
};

export default Card;
