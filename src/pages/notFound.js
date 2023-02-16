import React from 'react';
import { Box, Typography } from '@mui/material';
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();
  return (
    <Box>
      <Typography variant="h3" component="h1">
        Oops!
      </Typography>
      <p>Something went wrong!</p>
      <i>{error.statusText || error.message}</i>
    </Box>
  );
};

export default NotFound;
