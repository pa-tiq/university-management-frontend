import { useState } from 'react';
import NetworkVis from '../components/Graphs/NetworkVis';
import FloatingButton from '../components/UI/FloatingButton';

const Home = () => {
  const [showFilters, setShowFilters] = useState(false);

  const showFiltersHandler = () => {
    setShowFilters(true);
  };
  const hideFiltersHandler = () => {
    setShowFilters(false);
  };

  return (
    <>
      <FloatingButton onClick={showFiltersHandler} />
      <NetworkVis />
    </>
  );
};

export default Home;
