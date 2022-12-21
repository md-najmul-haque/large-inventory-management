
const express = require('express')
const { createProduct, getProducts, updateProduct, bulkUpdateProduct, deleteProductById, bulkDeleteProduct } = require('../controller/product.controller')

const productRoute = express.Router()

productRoute.route('/').get(getProducts).post(createProduct)

// this route must be call at the top of single product update dynamic route. 
productRoute.route('/bulk-update').patch(bulkUpdateProduct)
productRoute.route('/bulk-delete').delete(bulkDeleteProduct)


productRoute.route('/:id').patch(updateProduct).delete(deleteProductById)



module.exports = productRoute