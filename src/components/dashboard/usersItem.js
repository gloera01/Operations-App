import { Box, Button, Divider, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Group } from '@mui/icons-material';
import { blue } from '@mui/material/colors';

const UsersItem = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/manage-users');
  };
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
        <Button variant="text" color="primary" onClick={handleClick}>
          GO
        </Button>
      </Box>
    </Box>
  );
};

export default UsersItem;
