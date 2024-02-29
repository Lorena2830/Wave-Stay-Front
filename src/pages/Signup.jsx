import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {Card, CardHeader, TextField, CardContent, Divider, Button, CardActions} from '@mui/material'
import { signup } from '../services/authService'


function Signup() {
  const navigate = useNavigate()
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmP, setConfirmP] = useState('')

  const onSignUp = async () => {
    if (password !== confirmP) {
      navigate('/signup')
      return console.log('Las contraseñas no coinciden')
    }  else {
      const  result  = await signup({username, email, password})
      localStorage.setItem('token', result)
      navigate('/home')
    }
  } 
  return (
    <Card sx={{ maxWidth: '500px', opacity:'100' }}>
      <CardHeader title="Sign Up" />
      <CardContent>
        <TextField
          onChange={(e) => setUserName(e.target.value)}
          label="Name"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
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
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setConfirmP(e.target.value)}
          label="Repeat Password"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />

      </CardContent>
      <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end'}}>
        <Button onClick={onSignUp}>Register</Button>
      </CardActions>
    </Card>
  )
}

export default Signup