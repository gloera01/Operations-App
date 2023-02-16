import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography>
            <Link to="/">App Icon</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default TopBar;
