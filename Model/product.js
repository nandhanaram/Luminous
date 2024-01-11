const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://nandhanaramesh18:Nandhana@cluster0.yrmexhm.mongodb.net/LuminousDB?retryWrites=true&w=majority")
    .then(() => {
        console.log("db is connected");
    })
    .catch((err) => console.log(err));

// Product schema
const productSchema = new mongoose.Schema({
    categoryId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    name: String,
    description: String,
    ingredients:String,
    Skintype: String,
    image:String,
    price:String
});

const Product = mongoose.model("Product", productSchema);

// Registration schema
const registrationSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    // Add other fields as needed for your registration data
});

const User = mongoose.model("user", registrationSchema);

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String }
  
});

const Category = mongoose.model("Category", categorySchema);


module.exports = {
    Product,
    User,
    Category,
    
};
