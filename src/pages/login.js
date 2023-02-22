import { useEffect, useState } from 'react';
import { Box, Paper, Button, TextField, Typography } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/slices/auth';

import loadingStates from '../constants/loadingStates';

import { useNavigate } from 'react-router-dom';

const initialInput = { value: '', hasError: false, helperText: '' };

const Login = () => {
  const [email, setEmail] = useState(initialInput);
  const [pwd, setPwd] = useState(initialInput);

  const auth = useSelector((store) => store.auth);
  const { isLoggedIn } = auth;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      // logged users are not allowed to be here
      navigate('/dashboard');
    }
  }, [isLoggedIn, navigate]);

  //#region email handling section
  const onEmailChange = (e) => {
    setEmail({ ...email, value: e.target.value });
  };
  const onEmailBlur = () => {
    // validate input is a valid email
  };
  //#endregion email handling section

  //#region handle password
  const onPwdChange = (e) => {
    setPwd({ ...pwd, value: e.target.value });
  };
  const onPwdBlur = () => {
    // TODO: replace by joi validation
    const isError = pwd.value.length <= 3;
    // modify error status only when is required
    if (isError !== pwd.hasError) setPwd({ ...pwd, hasError: isError });
  };
  //#endregion

  const submitLogin = async (event) => {
    event.preventDefault();
    const { payload } = await dispatch(
      login({ email: email.value, password: pwd.value }),
    );
    if (payload) {
      navigate('/dashboard');
    }
  };
  return (
    <Paper sx={{ padding: 1, marginTop: 1 }}>
      <Typography variant="h3" textAlign="center">
        Sign In
      </Typography>
      <form onSubmit={submitLogin}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          minHeight={250}
          minWidth={220}
          padding={5}
        >
          <TextField
            variant="standard"
            label="Email"
            helperText={email.helperText}
            error={email.hasError}
            onChange={onEmailChange}
            onBlur={onEmailBlur}
            fullWidth
          />
          <TextField
            variant="standard"
            label="Password"
            type="password"
            helperText={pwd.helperText}
            error={pwd.hasError}
            onChange={onPwdChange}
            onBlur={onPwdBlur}
            fullWidth
          />
          {auth.error && <Typography>{auth.error}</Typography>}
          <Button
            disabled={
              auth.loading === loadingStates.PENDING &&
              pwd.hasError &&
              email.hasError
            }
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Login;
