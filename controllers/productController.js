const Product = require("../models/productModel");

const getProducts = async (request, response) => {
  try {
    const products = await Product.find({});
    response.status(200).json(products);
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Server Error" });
  }
};

const getProduct = async (request, response) => {
  try {
    const { id } = request.params;
    const product = await Product.findById(id);
    response.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (request, response) => {
  try {
    const product = await Product.create(request.body);
    response.status(201).json(product);
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (request, response) => {
  try {
    const { id } = request.params;
    const product = await Product.findByIdAndUpdate(id, request.body);
    if (!product) {
      response.status(404).json({ message: "Product not found" });
    }
    const updatedProduct = await Product.findById(id);

    response.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (request, response) => {
  try {
    const { id } = request.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return response.status(404).json({ message: "Product not found" });
    }
    response.status(200).json(product);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
