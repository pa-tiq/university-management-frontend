import { useEffect, useState } from 'react';
import styled from 'styled-components';

const MyDiv = styled.div`
  z-index: '99';
  display: 'flex';
  margin: 'auto';
  flex-direction: 'row';
  justify-content: 'center';
  align-items: 'center';
  overflow: 'auto';
`;

const FiltersContainer = ({ children }) => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);
  return (
    <>
      {matches && (
        <div
          style={{
            zIndex: '99',
            display: 'flex',
            margin: 'auto',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {children}
        </div>
      )}
      {!matches && (
        <div
          style={{
            zIndex: '99',
            display: 'flex',
            margin: 'auto',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'auto',
            width: '490px',
            paddingLeft: '8.4rem',
            marginLeft: '4rem',
          }}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default FiltersContainer;
