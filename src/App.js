import { Suspense, useState } from 'react';
import LoadingSpinner from './components/UI/LoadingSpinner';
import Home from './pages/Home';
import NavBar from './components/Layout/NavBar';
import SideBar from './components/Layout/SideBar';
import styled from 'styled-components';

const BaseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: auto;
  margin-top: 0.5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 1150px) {
    margin-left: 20px;
  }
`;

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const toggle = () => {
    setSideBarOpen((previousValue) => !previousValue);
  };

  return (
    <Suspense
      fallback={
        <div className='centered'>
          <LoadingSpinner />
        </div>
      }
    >
      <SideBar isOpen={sideBarOpen} toggle={toggle} />
      <NavBar toggleSideBar={toggle} />
      <BaseContainer>
        <Home />
      </BaseContainer>
    </Suspense>
  );
}

export default App;
