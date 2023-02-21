import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import UsersItem from '../components/dashboard/usersItem';
import AccountsItem from '../components/dashboard/accountsItem';

const Dashboard = () => {
  return (
    <Box padding={1}>
      <Typography
        variant="h3"
        component="h1"
        marginBottom={3}
        textAlign="center"
      >
        Dashboard.
      </Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid sm={6} xs={12}>
            <AccountsItem />
          </Grid>
          <Grid sm={6} xs={12}>
            <UsersItem />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
