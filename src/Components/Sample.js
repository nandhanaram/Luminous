import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Title = styled.h2`
  color: #fff; /* Set the color to your desired text color */
  text-align: center;
  margin-top: 20px; /* Adjust the margin-top as needed */
  font-size: 24px; /* Adjust the font size as needed */
`;

const Container = styled.div`
  font-family: 'Arial, sans-serif';
  background-image: url('./img/av.jpg'); /* Replace with the path to your image */
  background-size: cover;
  background-position: center;
  height: 100vh; /* Set to full viewport height */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Align content to the top of the container */
  padding-top: 40px; /* Add padding to give space between the title and the top of the container */
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
  transition: transform 0.3s ease-in-out;
  background-color: rgba(139, 69, 19, 0.5); /* Transparent brown color */

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  width: 60%;
  height: 60%;
  object-fit: contain;
  margin: auto; /* Center the image */
  display: block; /* Remove any default spacing around the image */
`;

const ProductInfo = styled.div`
  padding: 10px;
`;

const ProductName = styled.h3`
  margin: 0;
  font-size: 18px;
  color: black;
`;

const ProductPrice = styled.p`
  margin: 5px 0;
  color: black;
`;

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all products from the server
    axios
      .get('http://localhost:2040/Product')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  const handleCardClick = (index) => {
    // Show an alert for login when a card is clicked
    alert('Please login to view product details.');
    // Implement your login logic here
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Title>All Products</Title>
      <ProductList>
        {products.map((product, index) => (
          <ProductCard key={product._id} onClick={() => handleCardClick(index)}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>Price: ${product.price}</ProductPrice>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductList>
    </Container>
  );
};

export default ProductListing;
