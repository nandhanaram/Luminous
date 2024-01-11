import React, { useState } from 'react';
import axios from 'axios';

const AddProductCategory = () => {
  const [categoryName, setCategoryName] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Prepare the data to be sent to the server
      const requestData = {
        name: categoryName,
        imageUrl: imageUrl, // Add the imageUrl to the request data
      };

      // Make a POST request to your backend endpoint
      const response = await axios.post('http://localhost:8040/categories', requestData);

      console.log(response.data); // Log the response from the server

      // Show alert after successfully adding categories
      window.alert('Category added successfully!');
    } catch (error) {
      console.error('Error adding category:', error.message);
    }
  };

  return (
    <div>
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="categoryName">Category Name:</label>
          <input
            type="text"
            id="categoryName"
            value={categoryName}
            onChange={handleCategoryNameChange}
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={handleImageUrlChange}
          />
        </div>
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default AddProductCategory;
