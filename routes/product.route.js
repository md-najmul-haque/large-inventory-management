
const express = require('express')
const { createProduct, getProducts, updateProduct, bulkUpdateProduct } = require('../controller/product.controller')

const productRoute = express.Router()

productRoute.route('/').get(getProducts).post(createProduct)

// this route must be call at the top of single product update dynamic route. 
productRoute.route('/bulk-update').patch(bulkUpdateProduct)


productRoute.route('/:id').patch(updateProduct)



module.exports = productRoute