import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import AccountMenu from './AccountMenu';

import { useSelector } from 'react-redux';

const TopBar = () => {
  const { loggedIn } = useSelector((store) => store.auth);
  return (
    <>
      <AppBar position="fixed" color="transparent">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            <Link to="/dashboard">App Icon</Link>
          </Typography>
          {loggedIn && <AccountMenu />}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default TopBar;
