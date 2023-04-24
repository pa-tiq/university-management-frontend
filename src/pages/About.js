import Container from '../components/UI/Container';
import { useState } from 'react';
import Button from '../components/UI/Button';
import Modal from '../components/Modals/Modal';

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };
  return (
    <Container>
      <Button primary onClick={showModalHandler}>
        Teste
      </Button>
      <Modal hide={!showModal} onHide={hideModalHandler}>
        Oi Caralho
      </Modal>
    </Container>
  );
};

export default About;