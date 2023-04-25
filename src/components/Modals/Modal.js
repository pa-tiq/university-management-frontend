import React from 'react';
import ReactDOM from 'react-dom';
import {
  CenteredFixedDivUpDown,
  DivBackdropUpDown,
  DivOverlay,
} from './ModalComponents';

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <DivBackdropUpDown hide={props.hide} onClick={props.onHide} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <CenteredFixedDivUpDown hide={props.hide} onClick={props.onHide}>
          <DivOverlay>{props.children}</DivOverlay>
        </CenteredFixedDivUpDown>,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default Modal;
