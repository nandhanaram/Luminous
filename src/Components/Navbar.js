import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
const LogoComponent = () => (
  <img
    src="./img/logo2.png" // Replace with the actual path to your logo
    alt="Logo"
    style={{ height: '40px', marginRight: '10px' }}
  />
);

const Navbar = () => {
  const [productMenuAnchor, setProductMenuAnchor] = React.useState(null);

  const handleProductMenuOpen = (event) => {
    setProductMenuAnchor(event.currentTarget);
  };

  const handleProductMenuClose = () => {
    setProductMenuAnchor(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: '#FEE7AA' /* Set your desired color here */ }}>
        <Toolbar>
        <LogoComponent />
        <Typography
  variant="h6"
  component="div"
  sx={{
    flexGrow: 1,
    color: '#AA4C0A', // Set text color
    fontFamily: 'cursive', // Set font family
    fontWeight: 'bold', // Set font weight
    letterSpacing: '1px', // Set letter spacing
    textTransform: 'uppercase', // Convert text to uppercase
    fontSize: '1.2rem', // Set font size
    // Add more styles as needed
  }}
>
  LUMINOUS
</Typography>

          

          
          <Button variant='text' color="success">
            <Link to={'/Register'} style={{ textDecoration: 'none', color: '#AA4C0A' }}>
              <AccountCircleIcon sx={{ marginRight: 1 }} />
              Signup
            </Link>
          </Button>

          <Button variant='text' color="success">
            <Link to={'/Login'} style={{ textDecoration: 'none', color: '#AA4C0A' }}>
              <VpnKeyIcon sx={{ marginRight: 1 }} />
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
