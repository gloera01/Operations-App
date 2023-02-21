import { Box, Button, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { AssignmentInd } from '@mui/icons-material';
import { red } from '@mui/material/colors';

const AccountsItem = () => {
  return (
    <Box
      bgcolor={red[100]}
      padding={1}
      border={1}
      borderColor={red[500]}
      minHeight={160}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <AssignmentInd />
      <Typography variant="h6">Manage Accounts.</Typography>
      <Typography variant="body2">
        Search, create, edit and delete accounts.
      </Typography>
      <Divider />
      <Box display="flex" justifyContent="flex-end">
        <Button variant="text">
          <Link to="/manage-accounts">GO</Link>
        </Button>
      </Box>
    </Box>
  );
};

export default AccountsItem;
