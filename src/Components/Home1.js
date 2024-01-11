import React from 'react';
import { Link } from 'react-router-dom';

const Home1 = () => {
  return (
    <div style={{ position: 'relative', maxWidth: '1500px', margin: '0 auto' }}>
      <img
        src='./img/skin.jpg'
        alt='imgs'
        style={{ width: '100%', height: 'auto' }}
      />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
        <h2>Discover the Power of Healthy Skin and Hair</h2>
        <p>Explore our premium skincare and haircare products for a radiant and nourished look.</p>
        <Link to="/sample">
          <button
            style={{
              padding: '10px',
              fontSize: '16px',
              backgroundColor: 'rgba(139, 69, 19, 0.5)', // Brown color with transparency
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '20px',
            }}
          >
            Take Your Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home1;
