import React from 'react';
import ReactDOM from 'react-dom';
import {
  CenteredFixedDivUpDown,
  DivBackdropUpDown,
  DivOverlayFilters,
} from './ModalComponents';

const FiltersModal = ({ hide, onHide, children }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <DivBackdropUpDown
          zIndex={8}
          width={'100%'}
          height={'15%'}
          hide={hide}
        />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <CenteredFixedDivUpDown zIndex={9} hide={hide} height={'15%'}>
          <DivOverlayFilters>{children}</DivOverlayFilters>
        </CenteredFixedDivUpDown>,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default FiltersModal;
