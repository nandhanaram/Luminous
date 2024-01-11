import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { Link } from 'react-router-dom';

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
      <AppBar position="static" sx={{ background: '#2E3B4E' /* Set your desired background color here */ }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#FFFFFF' /* Set text color */ }}>
            Admin Panel
          </Typography>
          
          
          <Button component={Link} to="/dashboard" color="inherit">
            Dashbaord
          </Button>

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleProductMenuOpen}
          >
            <AccountCircle />
          </IconButton>
          
          <Menu
            id="menu-appbar"
            anchorEl={productMenuAnchor}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(productMenuAnchor)}
            onClose={handleProductMenuClose}
          >
            <MenuItem onClick={handleProductMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleProductMenuClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
