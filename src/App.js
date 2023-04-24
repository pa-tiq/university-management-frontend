import React, { Suspense, useState } from 'react';
import LoadingSpinner from './components/UI/LoadingSpinner';
import Home from './pages/Home';
import NavBar from './components/Layout/NavBar';
import SideBar from './components/Layout/SideBar';
import styled from 'styled-components';
import { Navigate, Route, Routes } from 'react-router-dom';
import { wait } from './util/wait';
import Discover from './pages/Discover';

const BaseContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: auto;
  margin-top: 0.5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 1150px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const About = React.lazy(() => wait(500).then(() => import('./pages/About')));

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const toggle = () => {
    setSideBarOpen((previousValue) => !previousValue);
  };

  return (
    <>
      <SideBar isOpen={sideBarOpen} toggle={toggle} />
      <NavBar toggleSideBar={toggle} />
      <Suspense
        fallback={
          <BaseContainer>
            <LoadingSpinner />
          </BaseContainer>
        }
      >
        <BaseContainer>
          <Routes>
            <Route path='/*' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/discover' element={<Discover />} />
          </Routes>
        </BaseContainer>
      </Suspense>
    </>
  );
}

export default App;
