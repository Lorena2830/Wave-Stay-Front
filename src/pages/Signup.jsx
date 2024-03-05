import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HouseboatIcon from '@mui/icons-material/Houseboat';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signup } from '../services/authService';
import { orange } from '@mui/material/colors';

function Signup() {
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmP, setConfirmP] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmP) {
      setErrorMessage('Contraseñas no coinciden'); 
      return;
    } else {
      try {
        const { token } = await signup({ username, email, password });
        localStorage.setItem('token', token);
        navigate('/login');
      } catch (error) {
        console.error('Registration error:', error);
      }
    }
  };

  return (
<ThemeProvider theme={createTheme()}>
      <Grid
        container
        justifyContent="center" // Centrar horizontalmente
        alignItems="center" // Centrar verticalmente
        sx={{
          height: '100vh',
          backgroundImage: 'url(https://images.unsplash.com/photo-1537519646099-335112f03225?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <CssBaseline />
        <Container component="main" maxWidth="xs" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '30px', padding: '80px' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 2, bgcolor: '#00607c', opacity: 1 }}>
              <HouseboatIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: 'black' }}>
              Crea una cuenta
            </Typography>
            <Box component="form" noValidate onSubmit={onSignUp} sx={{ mt: 5 }}>
              <TextField
                onChange={(e) => setUserName(e.target.value)}
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Nombre de usuario"
                autoFocus
                sx={{ mt: 2, color: 'white' }}
                InputProps={{ sx: { color: 'black' } }}
                InputLabelProps={{ sx: { color: 'black' } }}
              />
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                name="email"
                autoComplete="email"
                sx={{ mt: 2, color: 'white' }}
                InputProps={{ sx: { color: 'black' } }}
                InputLabelProps={{ sx: { color: 'black' } }}
              />
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="new-password"
                sx={{ mt: 2, color: 'white' }}
                InputProps={{ sx: { color: 'black' } }}
                InputLabelProps={{ sx: { color: 'black' } }}
              />
              <TextField
                onChange={(e) => setConfirmP(e.target.value)}
                required
                fullWidth
                name="confirmPassword"
                label="Confirmar Contraseña"
                type="password"
                id="confirmPassword"
                autoComplete="confirm-password"
                sx={{ mt: 2, color: 'white' }}
                InputProps={{ sx: { color: 'black' } }}
                InputLabelProps={{ sx: { color: 'black' } }}
              />
              {errorMessage && (
                <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                  {errorMessage}
                </Typography>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: 5, backgroundColor: '#00607c',}}
              >
                REGISTRARME
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2" sx={{ color: 'black' }}>
                    ¿Ya tienes una cuenta? Inicia aquí
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Grid>
    </ThemeProvider>
  );
}

export default Signup;