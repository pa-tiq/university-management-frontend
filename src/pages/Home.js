import { useState } from 'react';
import NetworkVis from '../components/Graphs/NetworkVis';
import FloatingButton from '../components/UI/FloatingButton';
import SideModal from '../components/Modals/SideModal';
import { DataView } from 'vis-data';

const Home = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFiltersHandler = () => {
    setShowFilters((prevValue) => !prevValue);
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
      <FloatingButton onClick={showFiltersHandler} />
      <NetworkVis onNodeSelect={nodeSelectHandler} />
      {showFilters && (
        <SideModal hide={!showFilters} onHide={hideFiltersHandler}>
          <label>
            Filter nodes
            <select id='nodeFilterSelect'>
              <option value=''>Período</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
          </label>
        </SideModal>
      )}
    </>
  );
};

export default Home;
