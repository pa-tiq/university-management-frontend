import React from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../constants/colors';

const DivBackdrop = styled.div`
  //visibility: ${({ hide }) => (hide ? 'hidden' : 'visible')};
  //display: ${({ hide }) => (hide ? 'none' : 'block')};
  opacity: ${({ hide }) => (hide ? '100%' : '0')};
  top: ${({ hide }) => (hide ? '0' : '-100%')};
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
  }
  to {
      opacity: 1;
  }
`;

const CenteredFixedDiv = styled.div`
  //visibility: ${({ hide }) => (hide ? 'hidden' : 'visible')};
  //display: ${({ hide }) => (hide ? 'none' : 'block')};
  opacity: ${({ hide }) => (hide ? '100%' : '0')};
  top: ${({ hide }) => (hide ? '0' : '-100%')};
  position: fixed;
  width: 100%;
  z-index: 30;
  transition: all 0.2s ease-in-out;
`;

const DivOverlay = styled.div`
  position: static;
  width: 50%;
  margin-top: 20%;
  margin-left: auto;
  margin-right: auto;
  background-color: ${colors.background};
  color: ${colors.navbar_background};
  border-radius: 14px;
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
        <DivBackdrop hide={!props.hide} onClick={props.onHide} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <CenteredFixedDiv hide={!props.hide} onClick={props.onHide}>
          <DivOverlay>{props.children}</DivOverlay>
        </CenteredFixedDiv>,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default Modal;
