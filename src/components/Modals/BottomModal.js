import React from 'react';
import ReactDOM from 'react-dom';
import {
  CenteredFixedDivDownUp,
  CloseIcon,
  DivBackdropDownUp,
  DivOverlay,
  IconContainerDown,
} from './ModalComponents';

const BottomModal = ({ hide, onHide, children }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <DivBackdropDownUp height={'10%'} hide={hide} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <CenteredFixedDivDownUp hide={hide}>
          <IconContainerDown onClick={onHide}>
            <CloseIcon onClick={onHide} />
          </IconContainerDown>
          <DivOverlay marginTop={'-5rem'}>{children}</DivOverlay>
        </CenteredFixedDivDownUp>,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default BottomModal;
