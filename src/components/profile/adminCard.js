import { Box, Avatar } from '@mui/material';
import { Person } from '@mui/icons-material';
import { deepPurple } from '@mui/material/colors';

const AdminCard = ({ name, email, role, createDate, modifiedDate }) => {
  return (
    <Box>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>
        <Person />
      </Avatar>
      <b>Name: </b>
      <i>{name}</i>
      <br />
      <b>Role: </b>
      <i>{role}</i>
      <br />
      <b>Email: </b>
      <i>{email}</i>
      <br />
      <b>Created at: </b>
      <i>{createDate}</i>
      <br />
      <b>modified at: </b>
      <i>{modifiedDate || 'never'}</i>
    </Box>
  );
};

export default AdminCard;
