import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {Card, CardHeader, TextField, CardContent, Divider, Button, CardActions} from '@mui/material'
import { signup } from '../services/authService'

function Signup() {
  const navigate = useNavigate()
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwpordR, setPasswordR] = useState('')

  const onSignUp = async () => {
    if (password !== passwpordR) {
      navigate('/signup')
      return window.alert('Password must be the same.')
    }  else {
      const  result  = await signup({username, email, password})
      console.log(result)
      localStorage.setItem('token', result)
      navigate('/home')
    }
  } 
  return (
    <Card sx={{ maxWidth: '500px' }}>
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
          onChange={(e) => setPasswordR(e.target.value)}
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