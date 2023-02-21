import { Box, Button, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Group } from '@mui/icons-material';
import { blue } from '@mui/material/colors';

const UsersItem = () => {
  return (
    <Box
      bgcolor={blue[100]}
      padding={1}
      border={1}
      borderColor={blue[500]}
      minHeight={160}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Group />
      <Typography variant="h6">Manage Users.</Typography>
      <Typography variant="body2">
        Search, create, edit and delete users.
      </Typography>
      <Divider />
      <Box display="flex" justifyContent="flex-end">
        <Button variant="text">
          <Link to="/manage-users">GO</Link>
        </Button>
      </Box>
    </Box>
  );
};

export default UsersItem;
