import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';

const StyledPaper = styled(Paper)({
  maxWidth: '400px',
  padding: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  borderRadius: '10px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
});

const StyledButton = styled(Button)({
  width: '100%',
  padding: '12px',
  fontSize: '16px',
  marginTop: '15px',
  backgroundColor: '#2C3E50',  // Change this line to the desired color
  '&:hover': {
    backgroundColor: '#283747',  // Change this line to the desired hover color
  },
});


const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegister = async () => {
    try {
      // Make a POST request to your server endpoint for user registration
      const response = await axios.post("http://localhost:2040/add", {
        username,
        email,
        password,
      });

      // Handle the response (you can customize this based on your server's response format)
      console.log('Registration successful:', response.data);

      // Set registration success to true
      setRegistrationSuccess(true);

      // Clear input fields
      setUsername('');
      setEmail('');
      setPassword('');

      // Display alert for successful registration
      alert('Registration successful');
      window.location.href = '/Home';
    } catch (error) {
      // Handle registration errors
      if (error.response) {
        // Server responded with an error
        alert(`Registration failed: ${error.response.data}`);
      } else if (error.request) {
        // Request was made but no response received
        console.error('Registration failed:', error.request);
        alert("Registration failed. Please try again later.");
      } else {
        // Something happened in setting up the request
        console.error('Registration failed:', error.message);
        alert("Registration failed. Please try again later.");
      }
    }
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'url("./img/av1.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '20px',
    }}>
      <StyledPaper elevation={3}>
        <Typography variant='h4' style={{
          color: '#2C3E50',
          textAlign: 'center',
          marginBottom: '20px',
          fontFamily: 'Arial, sans-serif',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        }}>
          Sign Up
        </Typography>
        <TextField label='Username' variant='outlined' fullWidth style={{ marginBottom: '15px' }} 
          onChange={(e) => setUsername(e.target.value)} value={username} />
        <TextField label='Email ID' variant='outlined' fullWidth style={{ marginBottom: '15px' }} 
          onChange={(e) => setEmail(e.target.value)} value={email} />
        <TextField label='Password' type='password' variant='outlined' fullWidth style={{ marginBottom: '20px' }} 
          onChange={(e) => setPassword(e.target.value)} value={password} />
          
        <StyledButton variant='contained' color='primary' onClick={handleRegister}>
          Register
        </StyledButton>
        
        <Typography variant="body2" style={{ textAlign: 'center', marginTop: '10px', color: '#555' }}>
          Already have an account? <Link to="/login" style={{ color: '#2980B9' }}>Login here</Link>
        </Typography>
      </StyledPaper>
    </div>
  );
};

export default Registration;
