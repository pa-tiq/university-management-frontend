import React from 'react';
import ReactDOM from 'react-dom';
import {
  CenteredFixedDivLeftRight,
  DivBackdropLeftRight,
  DivOverlayFilters,
} from './ModalComponents';

const FiltersModal = ({ hide, onHide, children }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <DivBackdropLeftRight
          zIndex={8}
          width={'8rem'}
          height={'100%'}
          hide={hide}
        />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <CenteredFixedDivLeftRight zIndex={9} hide={hide} width={'8rem'}>
          <DivOverlayFilters>{children}</DivOverlayFilters>
        </CenteredFixedDivLeftRight>,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default FiltersModal;
