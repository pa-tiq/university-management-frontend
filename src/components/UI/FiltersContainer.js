import styled from 'styled-components';

const MyDiv = styled.div`
  z-index: '99';
  display: 'flex';
  margin: 'auto';
  justify-content: 'center';
`;

const FiltersContainer = ({ children }) => {
  return <MyDiv>{children}</MyDiv>;
};

export default FiltersContainer;
