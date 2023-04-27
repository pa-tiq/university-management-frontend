import React, { Suspense, useState } from 'react';
import LoadingSpinner from './components/UI/LoadingSpinner';
import NavBar from './components/Layout/NavBar';
import SideBar from './components/Layout/SideBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { wait } from './util/wait';
import Discover from './pages/Discover';
import BaseContainer from './components/UI/BaseContainer';
import Home from './pages/Home';

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
        <Routes>
          <Route path='/*' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route
            path='/about'
            element={
              <BaseContainer>
                <About />
              </BaseContainer>
            }
          />
          <Route
            path='/discover'
            element={
              <BaseContainer>
                <Discover />
              </BaseContainer>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
