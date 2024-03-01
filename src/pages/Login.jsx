import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SurfingIcon from '@mui/icons-material/Surfing';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { result } = await login({ email, password });
    localStorage.setItem('token', result.token);
    navigate('/home');
  };

  const defaultTheme = createTheme({
    typography: {
      fontFamily: 'Helvetica',
    }
  });

  return (
    <ThemeProvider theme={defaultTheme}>
    <Grid
      container
      justifyContent="center" // cambia horizontalmente
      alignItems="center" // cambia verticalmente
      sx={{
        height: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1517699418036-fb5d179fef0c?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ backgroundColor: 'rgba(205, 205, 205, 0.9)', p: 4, borderRadius: 7}}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: 'orange', opacity: 0.7 }}>
            <SurfingIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome to Wave Stay!
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ bgcolor: 'transparent', mb: 2 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ bgcolor: 'transparent', mb: 2 }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              sx={{ bgcolor: 'transparent', mb: 2 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ bgcolor: 'orange', opacity: 0.7, mb: 1, borderRadius: 10,}} 
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
);
}

export default Login;