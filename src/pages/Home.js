import { useState } from 'react';
import NetworkVis from '../components/Graphs/NetworkVis';
import FloatingFilterButton from '../components/UI/FloatingFilterButton';
import FiltersModal from '../components/Modals/FiltersModal';
import NetworkVisLevelFilter from '../components/Graphs/NetworkVisLevelFilter';

const Home = ({ nodeSelectHandler }) => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFiltersHandler = () => {
    if (showFilters) {
      setShowFilters(false);
    } else {
      setShowFilters(true);
    }
  };
  // const showFiltersHandler = () => {
  //   setShowFilters(true);
  // };
  const hideFiltersHandler = () => {
    setShowFilters(false);
  };

  return (
    <>
      <FloatingFilterButton
        onClick={toggleFiltersHandler}
        checked={showFilters}
      />
      <NetworkVis onNodeSelect={nodeSelectHandler} />
      <FiltersModal hide={!showFilters} onHide={hideFiltersHandler}>
        <NetworkVisLevelFilter />
      </FiltersModal>
    </>
  );
};

export default Home;
