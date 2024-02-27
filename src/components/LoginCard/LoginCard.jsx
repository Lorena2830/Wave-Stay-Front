import { useState } from 'react'
import { Button, Card, CardActions, CardContent, CardHeader, Divider, TextField } from '@mui/material'
import { login } from '../../services/authService'
import { useNavigate } from 'react-router-dom'


function LoginCard() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = async () => {
        const { result } = await login({ email, password })
        console.log(result)
        localStorage.setItem('token', result.token)
        navigate('/accommodation')
         }
  return (
    <Card sx={{ maxWidth: '500px' }}>
      <CardHeader title="Login" />
      <CardContent>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          variant="outlined"
          fullWidth={true}
        />
      </CardContent>
      <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button>Register</Button>
        <Button onClick={onLogin} color="success">
          Login
        </Button>
      </CardActions>
    </Card>
  )
}

export default LoginCard