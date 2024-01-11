import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products for the selected category
    axios.get(`http://localhost:7040/Product/${categoryName}`)
      .then(response => {
        setCategoryProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(`Error fetching products for category ${categoryName}:`, error);
        setLoading(false);
      });
  }, [categoryName]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{categoryName} Products</h2>
      <ul>
        {categoryProducts.map(product => (
          <li key={product._id}>
            {/* Display product details here */}
            <p>{product.name}</p>
            <p>{product.description}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
