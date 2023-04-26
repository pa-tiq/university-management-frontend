import { useState } from 'react';
import NetworkVis from '../components/Graphs/NetworkVis';
import FloatingFilterButton from '../components/UI/FloatingFilterButton';
import FiltersModal from '../components/Modals/FiltersModal';
import NetworkVisLevelFilter from '../components/Graphs/NetworkVisLevelFilter';

const Home = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFiltersHandler = () => {
    if (showFilters) {
      setShowFilters(false);
    } else {
      setShowFilters(true);
    }
  };
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
      <FloatingFilterButton
        onClick={toggleFiltersHandler}
        checked={showFilters}
      />
      <NetworkVis onNodeSelect={nodeSelectHandler} />
      {showFilters && (
        <FiltersModal hide={!showFilters} onHide={hideFiltersHandler}>
          <NetworkVisLevelFilter />
        </FiltersModal>
      )}
    </>
  );
};

export default Home;
