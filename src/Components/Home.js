import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <div style={{ backgroundImage: 'url("/img/av.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh' }}>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <div style={{ backgroundColor: '#FEE7AA', width: '250px' }}>
          <List>
          <ListItem button component={Link} to="/pl">All Products</ListItem>
            <ListItem button component={Link} to="/pc">Categories</ListItem>
            <ListItem button>Shopping Cart</ListItem>
          </List>
        </div>
      </Drawer>

      <div className="main-content" style={{ textAlign: 'center', marginTop: '50px', color: 'white' }}>
        {/* Add your main content here */}
        <h1>Welcome to our Homepage!</h1>
        {/* You can add more content here */}
      </div>
    </div>
  );
}

export default Home;