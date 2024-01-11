import React, { useState } from 'react';

const Products = () => {
  const [productData, setProductData] = useState({
    categoryId: '',
    name: '',
    description: '',
    ingredients: '',
    image: '',
    price: 0,
  });

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:2040/Product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Product added successfully:', data.product);
        // Clear form fields
        setProductData({
          categoryId: '',
          name: '',
          description: '',
          ingredients: '',
          image: '',
          price: 0,
        });
        // Display a success message to the user
      } else {
        console.error('Error adding product:', data.message);
        // Handle error cases and display error messages to the user
      }
    } catch (error) {
      console.error('Error adding product:', error);
      // Handle general errors and display error messages to the user
    }
  };

  return (
    <div>
      <h2>Add a Skincare Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Category ID:
          <input type="text" name="categoryId" value={productData.categoryId} onChange={handleChange} />
        </label>

        <label>
          Name:
          <input type="text" name="name" value={productData.name} onChange={handleChange} />
        </label>

        <label>
          Description:
          <textarea name="description" value={productData.description} onChange={handleChange}></textarea>
        </label>

        <label>
          Ingredients:
          <input type="text" name="ingredients" value={productData.ingredients} onChange={handleChange} />
        </label>

        

        <label>
          Image URL:
          <input type="text" name="image" value={productData.image} onChange={handleChange} />
        </label>

        <label>
          Price:
          <input type="number" name="price" value={productData.price} onChange={handleChange} />
        </label>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Products;