import React, { useState } from 'react';
import { Button, TextField, Typography, Container, CssBaseline, Paper } from '@mui/material';
import { styled } from '@mui/system';

const RootContainer = styled('div')({
  height: '100vh',
  backgroundImage: `url("./img/av1.jpg")`, // Replace with the path to your image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const LoginForm = styled('form')(({ theme }) => ({
  width: '80%',  // Adjust the width as per your preference
  margin: 'auto',  // Center the form
  marginTop: theme.spacing(1),
  backgroundColor: 'rgba(255, 255, 255, 0.0)',  // Transparent background
  padding: theme.spacing(1),
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
  backgroundColor: '#2C3E50',  // Change this line to the desired color
  '&:hover': {
    backgroundColor: '#283747',  // Change this line to the desired hover color
  },
}));

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:2040/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Show an alert upon successful login
        alert('Login successful!');
        window.location.href = '/Home';
        // Redirect to the dashboard or perform other actions upon successful login
      } else {
        console.error('Login failed:', response.statusText);
        // Handle login failure, show an error message, etc.
      }
    } catch (error) {
      console.error('Login failed:', error.message);
      // Handle login failure, show an error message, etc.
    }
  };

  return (
    <RootContainer>
      <CssBaseline />
      <Paper elevation={3}>
        <Typography variant="h4" style={{ color: '#2C3E50', textAlign: 'center', marginBottom: '20px' }}>
          Login
        </Typography>
        <LoginForm noValidate onSubmit={handleLogin}>
          <TextField
            variant="outlined"
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
          />
          <TextField
            variant="outlined"
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
          />
          <SubmitButton type="submit" fullWidth variant="contained" color="secondary">
            LOGIN
          </SubmitButton>
        </LoginForm>
      </Paper>
    </RootContainer>
  );
};

export default Login;
