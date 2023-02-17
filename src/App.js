import { Box } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';

import TopBar from './components/appBar';

function App() {
  return (
    <>
      <TopBar />
      <Box display="flex" justifyContent="center">
        <Outlet />
      </Box>
    </>
  );
}

export default App;
