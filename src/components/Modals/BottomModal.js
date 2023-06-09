import React from 'react';
import ReactDOM from 'react-dom';
import {
  CenteredFixedDivDownUp,
  DivBackdropDownUp,
  DivOverlay,
} from './ModalComponents';

const BottomModal = ({ hide, onHide, children }) => {
  console.log(hide);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <DivBackdropDownUp height={'90px'} hide={hide} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <CenteredFixedDivDownUp height={'85px'} hide={hide}>
          {/* <IconContainerBottomRight onClick={onHide}>
            <CloseIcon onClick={onHide} />
          </IconContainerBottomRight> */}
          <DivOverlay>{children}</DivOverlay>
        </CenteredFixedDivDownUp>,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default BottomModal;
