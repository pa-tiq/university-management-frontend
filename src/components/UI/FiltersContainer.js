import styled from 'styled-components';

const MyDiv = styled.div`
  z-index: '99';
  display: 'flex';
  margin: 'auto';
  justify-content: 'center';
`;

const FiltersContainer = ({ children }) => {
  return (
    <div
      style={{
        zIndex: '99',
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default FiltersContainer;
