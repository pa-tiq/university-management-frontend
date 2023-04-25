import { useState } from 'react';
import NetworkVis from '../components/Graphs/NetworkVis';
import FloatingButton from '../components/UI/FloatingButton';
import SideModal from '../components/Modals/SideModal';

const Home = () => {
  const [showFilters, setShowFilters] = useState(false);

  const showFiltersHandler = () => {
    setShowFilters(true);
  };
  const hideFiltersHandler = () => {
    setShowFilters(false);
  };
  const nodeSelectHandler = (node) => {
    //setShowFilters(false);
  };

  return (
    <>
      <FloatingButton onClick={showFiltersHandler} />
      <NetworkVis onNodeSelect={nodeSelectHandler} />
      {showFilters && (
        <SideModal hide={!showFilters} onHide={hideFiltersHandler}>
          {'oi'}
        </SideModal>
      )}
    </>
  );
};

export default Home;
