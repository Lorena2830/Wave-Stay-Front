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
    console.log(result, 'result')
    localStorage.setItem('token', result.token);
    localStorage.setItem('id', result.id);
    navigate('/home');
  };

  const defaultTheme = createTheme({
    typography: {
      fontFamily: 'Original Surfer',
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
          backgroundImage: 'url(https://images.pexels.com/photos/416676/pexels-photo-416676.jpeg?cs=srgb&dl=pexels-pixabay-416676.jpg&fm=jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', p: 4, borderRadius: 10 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ 
              m: 2, 
              bgcolor: 'rgba(25,118, 210, 0.9)', 
              opacity: 1, 
              }}
            >
              <SurfingIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                color: 'black'
              }}
            >
              ¡Bienvenido a Wave Stay!
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
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
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ bgcolor: 'transparent', mb: 2 }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recuérdame"
                sx={{ bgcolor: 'transparent', mb: 2 }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ bgcolor: 'sky-blue', opacity: 0.9, mb: 1, borderRadius: 10, fontSize: '1.1rem' }}
              >
                Iniciar Sesión
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    href="#"
                    variant="body3"
                    sx={{
                      color: 'black'
                    }}
                  >
                    ¿Olvidaste la contraseña?
                  </Link>
                </Grid>
                <Grid item>
                  <Link 
                  href="/signup" 
                  variant="body3"
                  sx={{
                    color: 'black'
                  }}
                  >
                    {"¿No tienes una cuenta? Regístrate"}
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