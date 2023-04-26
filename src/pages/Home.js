import { useState } from 'react';
import NetworkVis from '../components/Graphs/NetworkVis';
import FloatingButton from '../components/UI/FloatingButton';
import SideModal from '../components/Modals/SideModal';
import { DataView } from 'vis-data';
import FiltersModal from '../components/Modals/FiltersModal';
import NetworkVisLevelFilter from '../components/Graphs/NetworkVisLevelFilter';

const Home = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [checkedLevels, setCheckedLevels] = useState([]);

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
      <FloatingButton onClick={toggleFiltersHandler} />
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
