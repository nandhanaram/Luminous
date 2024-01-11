import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={{ background: '#121212', color: '#ffffff', minHeight: '100vh' }}>
      {/* App Bar */}
      <AppBar position="static" style={{ background: '#333' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Dashboard Content */}
      <div style={{ padding: '20px', marginTop: '20px' }}>
        {/* Dashboard Links */}
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          
          <Link to="/admin/addcategory" style={{ textDecoration: 'none', color: '#ffffff', textAlign: 'center' }}>
            <div>
              <ShoppingCartIcon fontSize="large" />
              <p>categories</p>
            </div>
            </Link>
            <Link to="/admin/products" style={{ textDecoration: 'none', color: '#ffffff', textAlign: 'center' }}>
            <div>
              <ShoppingCartIcon fontSize="large" />
              <p>Products</p>
            </div>
          </Link>
          <Link to="/admin/orders" style={{ textDecoration: 'none', color: '#ffffff', textAlign: 'center' }}>
            <div>
              <ReceiptIcon fontSize="large" />
              <p>Orders</p>
            </div>
          </Link>
          <Link to="/admin/users" style={{ textDecoration: 'none', color: '#ffffff', textAlign: 'center' }}>
            <div>
              <PeopleIcon fontSize="large" />
              <p>Users</p>
            </div>
          </Link>
          <Link to="/admin/settings" style={{ textDecoration: 'none', color: '#ffffff', textAlign: 'center' }}>
            <div>
              <SettingsIcon fontSize="large" />
              <p>Settings</p>
            </div>
          </Link>
        </div>

        
      </div>
    </div>
  );
};

export default Dashboard;
