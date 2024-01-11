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

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 120px; /* Reduced image size */
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 10px;
`;

const ProductName = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

const ProductPrice = styled.p`
  margin: 5px 0;
  color: #666;
`;


const ProductDetailsCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow-y: auto; /* Make the card scrollable if content exceeds height */
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: calc(80vh); /* Adjust the max-height as needed */
  width: 350px; /* Adjust the width as needed */
  max-width: 100%;
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 80%; /* Center the card horizontally */
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 999;
  padding: 10px; /* Adjust padding as needed */
  font-size: 14px; /* Adjust font size as needed */
`;

const ProductDetailsImage = styled.img`
  width: 60%;
  height: auto; /* Make sure the image height adjusts proportionally */
  object-fit: contain;
  margin: auto; /* Center the image */
  display: block; /* Remove any default spacing around the image */
`;

const ProductDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
`;

const ProductDetailsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeading = styled.th`
  padding: 10px;
  background-color: #3498db;
  color: #fff;
`;

const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
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

const CloseButton = styled.button`
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// ... (existing imports)

// ... (existing imports)

const ProductListing = () => {
    const [products, setProducts] = useState([]);
    const [selectedProductIndex, setSelectedProductIndex] = useState(null);
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
  
    const handleViewMore = (index) => {
      setSelectedProductIndex(index);
    };
  
    const handleCloseView = () => {
      setSelectedProductIndex(null);
    };
  
    const handleBuyNow = () => {
      // Implement the logic for handling the "Buy Now" action
      console.log(`Buying ${products[selectedProductIndex]?.name} for $${products[selectedProductIndex]?.price}`);
    };
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    return (
      <Container>
        <Title>All Products</Title>
        <ProductList>
          {products.map((product, index) => (
            <ProductCard
              key={product._id}
              onClick={() => handleViewMore(index)}
              style={{ display: selectedProductIndex === null || selectedProductIndex === index ? 'block' : 'none' }}
            >
              <ProductImage src={product.image} alt={product.name} />
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>Price: ${product.price}</ProductPrice>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductList>
        {selectedProductIndex !== null && (
          <ProductDetailsCard show={selectedProductIndex !== null}>
            <ProductDetailsImage
              src={products[selectedProductIndex]?.image}
              alt={products[selectedProductIndex]?.name}
            />
            <ProductDetailsInfo>
              <h2>{products[selectedProductIndex]?.name}</h2>
              <ProductDetailsTable>
                <tbody>
                  <tr>
                    <TableHeading>Description</TableHeading>
                    <TableData>{products[selectedProductIndex]?.description}</TableData>
                  </tr>
                  <tr>
                    <TableHeading>Ingredients</TableHeading>
                    <TableData>{products[selectedProductIndex]?.ingredients}</TableData>
                  </tr>
                  
                  <tr>
                    <TableHeading>Price</TableHeading>
                    <TableData>${products[selectedProductIndex]?.price}</TableData>
                  </tr>
                  {/* Add more rows for additional details if needed */}
                </tbody>
              </ProductDetailsTable>
              <BuyButton onClick={handleBuyNow}>Buy Now</BuyButton>
              <CloseButton onClick={handleCloseView}>Close</CloseButton>
            </ProductDetailsInfo>
          </ProductDetailsCard>
        )}
      </Container>
    );
  };
  
  export default ProductListing;