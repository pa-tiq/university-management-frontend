import React from 'react';
import ReactDOM from 'react-dom';
import {
  CenteredFixedDivLeftRight,
  CloseIcon,
  DivBackdropLeftRight,
  DivOverlay,
  IconContainerUpLeft,
} from './ModalComponents';

const SideModal = ({ hide, onHide, children }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <DivBackdropLeftRight width={'21%'} hide={hide} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <CenteredFixedDivLeftRight hide={hide} height={'100%'} width={'21%'}>
          <IconContainerUpLeft onClick={onHide}>
            <CloseIcon onClick={onHide} />
          </IconContainerUpLeft>
          <DivOverlay width={'60%'} height={'80%'} marginTop={'8rem'}>
            {children}
          </DivOverlay>
        </CenteredFixedDivLeftRight>,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default SideModal;
