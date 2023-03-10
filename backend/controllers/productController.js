import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

// @Fetch all products, @GET /products, @acces Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

// @Fetch single products, @GET /products/:id, @acces Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export { getProductById, getProducts }
