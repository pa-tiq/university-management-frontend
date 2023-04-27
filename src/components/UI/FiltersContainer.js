//import { useEffect, useState } from 'react';
import styled from 'styled-components';

const MyDiv = styled.div`
  z-index: 99;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: auto;
`;

const FiltersContainer = ({ children }) => {
  // const [matches, setMatches] = useState(
  //   window.matchMedia('(min-width: 768px)').matches
  // );

  // useEffect(() => {
  //   window
  //     .matchMedia('(min-width: 768px)')
  //     .addEventListener('change', (e) => setMatches(e.matches));
  // }, []);
  return (
    <>
      <MyDiv>{children}</MyDiv>
      {/* {matches && (
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
            width: '36rem',
            paddingLeft: '6.0rem',
            marginLeft: '3rem',
          }}
        >
          {children}
        </div>
      )} */}
    </>
  );
};

export default FiltersContainer;
