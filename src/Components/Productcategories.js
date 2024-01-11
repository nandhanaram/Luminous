// ProductCategories.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductCategories = () => {
  const [skincareCategories, setSkincareCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:7040/categories')
      .then(response => {
        setSkincareCategories(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching skincare categories:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
    background: 'url("./img/av1.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    margin: '0',
  };

  const categoriesWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: '20px',
  };

  const categoryContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const categoryCardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    textDecoration: 'none',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    background: '#fff',
    flex: '0 0 auto',
    width: '200px',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
  };

  const headingStyle = {
    marginBottom: '20px',
    color: '#333',
  };

  const renderCategoryCards = (categories) => {
    return categories.map((category) => (
      <Link
        key={category.id}
        to={`/category/${category.name.toLowerCase()}`}
        style={{
          ...categoryCardStyle,
          backgroundImage: `url(${category.image})`,
          marginBottom: '20px',
        }}
      >
        <div style={{ padding: '16px', textAlign: 'center' }}>
          <img
            src={category.image}
            alt={category.name}
            style={{ maxWidth: '100%', marginBottom: '10px', borderRadius: '4px' }}
          />
          <h3 style={{ margin: '0', fontSize: '18px' }}>{category.name}</h3>
        </div>
      </Link>
    ));
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Skincare Categories</h2>
      <div style={categoriesWrapperStyle}>
        <div style={categoryContainerStyle}>{renderCategoryCards(skincareCategories)}</div>
      </div>
    </div>
  );
};

export default ProductCategories;
