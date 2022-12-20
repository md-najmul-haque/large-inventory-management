
const express = require('express')
const { createProduct, getProducts } = require('../controller/product.controller')

const productRoute = express.Router()

productRoute.route('/').get(getProducts).post(createProduct)


module.exports = productRoute