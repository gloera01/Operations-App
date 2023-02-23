import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import { FilterList, Person } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/slices/user';

const initialInput = { value: '', hasError: false, helperText: '' };

const SearchSection = () => {
  const [input, setInput] = useState(initialInput);
  const dispatch = useDispatch();

  const handleInput = ({ target }) => {
    setInput({ ...input, value: target.value });
  };

  const openFilters = () => {
    alert('Add your filters.');
  };
  const handleOnSearch = () => {
    const name = input.value;
    const filters = { name };
    dispatch(fetchUsers(filters));
  };
  return (
    <Box display="flex" justifyContent="center">
      <IconButton onClick={openFilters} color="secondary" size="small">
        <FilterList />
      </IconButton>
      <TextField
        label="Search.."
        size="small"
        sx={{ marginRight: 1 }}
        onChange={handleInput}
        error={input.hasError}
        helperText={input.helperText}
      />

      <Button onClick={handleOnSearch} variant="contained">
        Search
      </Button>
    </Box>
  );
};

const Users = () => {
  const { docs: users } = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers({}));
  }, []);

  const openUserDetails = (userData) => {
    console.log('Open dialog with');
    console.log(userData);
  };
  return (
    <Box padding={1}>
      <Typography variant="h3" textAlign="center" marginBottom={3}>
        Users Operations.
      </Typography>
      <SearchSection />
      <TableContainer component={Paper} sx={{ marginTop: 5 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Create at</TableCell>
              <TableCell>Modified at</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((u) => (
              <TableRow key={u.email}>
                <TableCell>{u.name}</TableCell>
                <TableCell>{u.email}</TableCell>
                <TableCell>{u.role}</TableCell>
                <TableCell>{u.createDate}</TableCell>
                <TableCell>{u.modifiedDate}</TableCell>
                <TableCell>
                  <IconButton size="small" onClick={() => openUserDetails(u)}>
                    <Person />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Users;
