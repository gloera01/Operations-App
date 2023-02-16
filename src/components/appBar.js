import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import AccountMenu from './AccountMenu';

import { useSelector } from 'react-redux';

const TopBar = () => {
  const { user } = useSelector((store) => store.auth);
  return (
    <>
      <AppBar position="fixed" color="transparent">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            <Link to="/">App Icon</Link>
          </Typography>
          {Boolean(user) && <AccountMenu />}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default TopBar;
