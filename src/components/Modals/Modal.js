import React from 'react';
import ReactDOM from 'react-dom';
import { CenteredFixedDiv, DivBackdrop, DivOverlay } from './ModalComponents';

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <DivBackdrop height={'20%'} hide={props.hide} onClick={props.onHide} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <CenteredFixedDiv hide={props.hide} onClick={props.onHide}>
          <DivOverlay>{props.children}</DivOverlay>
        </CenteredFixedDiv>,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default Modal;
