import React from 'react';
import { Outlet } from 'react-router-dom';

import TopBar from './components/appBar';
import SideNav from './components/sideNav';

function App() {
  return (
    <>
      <TopBar />
      <SideNav />
      <Outlet />
    </>
  );
}

export default App;
