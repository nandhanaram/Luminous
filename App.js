const express = require('express');
const { Product, User, Category } = require('./Model/product.js');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());



// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post('/add', async (req, res) => {
  try {
    // Email validation
    if (!emailRegex.test(req.body.email)) {
      return res.status(400).send("Invalid email format");

    }

    // Password validation (example: minimum length of 8 characters)
    if (req.body.password.length < 8) {
      return res.status(400).send("Password must be at least 8 characters long");
    }

    // Duplication check
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).send("Email already exists");
    }

    // Save user if all validations pass
    await new User(req.body).save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error('Registration failed:', error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.post('/login', async (req, res) => {
  try {
    // Email validation
    if (!emailRegex.test(req.body.email)) {
      return res.status(400).send("Invalid email format");
    }

    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(401).send("Invalid email or password");
    }

    // Compare the provided password with the password in the database
    if (password !== user.password) {
      return res.status(401).send("Invalid email or password");
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error('Login failed:', error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.post('/categories', async (req, res) => {
  try {
    console.log(req.body); // Log the request body

    const { name, imageUrl } = req.body;

    // Validate if the category name and imageUrl are not empty
    if (!name || name.trim() === '' || !imageUrl || imageUrl.trim() === '') {
      return res.status(400).send("Please provide a valid category name and imageUrl");
    }

    // Check if the category already exists
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(409).send("Category already exists");
    }

    // Save the new category with name and imageUrl
    const category = new Category({ name, image: imageUrl });
    await category.save();

    res.status(201).json(category);
  } catch (error) {
    console.error('Error adding category:', error.message);
    res.status(500).send('Server Error');
  }
});


app.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error.message);
    res.status(500).send('Server Error');
  }
});
app.post('/Product', async (req, res) => {
    try {
        const { categoryId, name, description, ingredients, usageInstructions, image, price } = req.body;

        // Check if the specified category exists
        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(400).json({ success: false, message: 'Category not found' });
        }

        // Create a new skincare product and associate it with the specified category
        const newProduct = new Product({
            categoryId,
            name,
            description,
            ingredients,
            Skintype,
            image,
            price
        });

        await newProduct.save();
        
        res.status(201).json({ success: true, message: 'Skincare product added successfully', product: newProduct });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});
app.get('/Product', async (req, res) => {
  try {
    const products = await Product.find();
    console.log('Fetched Products:', products); // Log fetched products
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



const PORT = 2040;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
