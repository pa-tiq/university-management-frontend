import styled from 'styled-components';
import Container from '../components/UI/Container';
import { useState } from 'react';
import Button from '../components/UI/Button';
import Modal from '../components/Modals/Modal';

const MyHome = styled.section`
  display: flex;
  width: 100%;
`;

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };
  return (
    <>
      <MyHome>
        <Container>
          <Button primary onClick={showModalHandler}>
            Teste
          </Button>
          <Modal hide={!showModal} onHide={hideModalHandler}>
            Oi Caralho
          </Modal>
        </Container>
      </MyHome>
    </>
  );
};

export default Home;
