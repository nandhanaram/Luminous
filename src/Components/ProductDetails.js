import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Arial, sans-serif';
`;

const Title = styled.h2`
  color: #333;
  text-align: center;
`;

const ProductDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;

const ProductImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const ProductInfo = styled.div`
  text-align: center;
`;

const ProductName = styled.h3`
  margin: 0;
  font-size: 24px;
  color: #333;
`;

const ProductPrice = styled.p`
  margin: 5px 0;
  color: #666;
`;

const BuyButton = styled.button`
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
`;

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const productId = match.params.productId;

    // Fetch product details from the server
    axios.get(`http://localhost:2040/Product/${productId}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        setLoading(false);
        setNotFound(true);
      });
  }, [match.params.productId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (notFound) {
    return <p>Product not found</p>;
  }

  return (
    <Container>
      <Title>Product Details</Title>
      <ProductDetailsContainer>
        <ProductImage src={product.image} alt={product.name} />
        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>Price: ${product.price}</ProductPrice>
          {/* Add more details as needed */}
          <BuyButton>Buy Now</BuyButton>
        </ProductInfo>
      </ProductDetailsContainer>
    </Container>
  );
}

export default ProductDetails;
