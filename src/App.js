import React, { Suspense, useState } from 'react';
import LoadingSpinner from './components/UI/LoadingSpinner';
import Home from './pages/Home';
import NavBar from './components/Layout/NavBar';
import SideBar from './components/Layout/SideBar';
import styled from 'styled-components';
import { Navigate, Route, Routes } from 'react-router-dom';
import { wait } from './util/wait';
import Discover from './pages/Discover';
import BaseContainer from './components/UI/BaseContainer';

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
          <BaseContainer maxWidth={'1100px'}>
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
