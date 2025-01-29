const express = require("express");
const app = express();
const productRoute = require("./routes/productRoute");
const mongoose = require("mongoose");
// Import the Product model
const Product = require("./models/productModel.js");
// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

// Connect to MongoDB

mongoose
  .connect(
    "mongodb+srv://Apple:Apple@cluster0.b7rj0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB-Atlas-Cluster0");
  })
  .catch(() => {
    console.log("Connection failed");
  });

// Start the server

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// GET request is the R in CRUD

app.get("/", (request, response) => {
  response.send("Hello, from NODE API");
});

// app.get("/api/products", async (request, response) => {
//   try {
//     const products = await Product.find({});
//     response.status(200).json(products);
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.get("/api/products/:id", async (request, response) => {
//   try {
//     const { id } = request.params;
//     const product = await Product.findById(id);
//     response.status(200).json(product);
//   } catch (error) {
//     console.log(error);
//   }
// });
// POST request is the C in CRUD

// app.post("/api/products", async (request, response) => {
//   try {
//     const product = await Product.create(request.body);
//     response.status(201).json(product);
//   } catch (error) {
//     console.log(error);
//   }
// });

// PUT request is the U in CRUD

// app.put("/api/products/:id", async (request, response) => {
//   try {
//     const { id } = request.params;
//     const product = await Product.findByIdAndUpdate(id, request.body);
//     if (!product) {
//       response.status(404).json({ message: "Product not found" });
//     }
//     const updatedProduct = await Product.findById(id);

//     response.status(200).json(updatedProduct);
//   } catch (error) {
//     console.log(error);
//   }
// });

// DELETE request is the D in CRUD

// app.delete("/api/products/:id", async (request, response) => {
//   try {
//     const { id } = request.params;
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       return response.status(404).json({ message: "Product not found" });
//     }
//     response.status(200).json(product);
//   } catch (error) {
//     console.log(error);
//     response.status(500).json({ message: "Server error" });
//   }
// });
