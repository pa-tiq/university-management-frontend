import React from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import Container from '../UI/Container';
import { colors } from '../../constants/colors';

const DivBackdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: ${colors.navbar_background};
  transition: all 0.2s ease-in-out;
`;

const slide_down = keyframes`
  from {
      opacity: 0;
      transform: translateY(-3rem);
  }
  to {
      opacity: 1;
      transform: translateY(0);
  }
`;

const CenteredFixedDiv = styled.div`
  position: fixed;
  width: 100%;
  z-index: 30;
`;

const DivOverlay = styled.div`
  position: static;
  width: 50%;
  margin-top: 20%;
  margin-left: auto;
  margin-right: auto;
  background-color: ${colors.navbar_background};
  color: ${colors.background};
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 40;
  padding: 1rem;
  text-align: center;
  transition: all 0.2s ease-in-out;

  animation: ${slide_down} 300ms ease-out forwards;
`;

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <DivBackdrop onClick={props.onHide} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <CenteredFixedDiv onClick={props.onHide}>
          <DivOverlay>{props.children}</DivOverlay>
        </CenteredFixedDiv>,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default Modal;
