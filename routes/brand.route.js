const express = require('express');
const { createBrand, getBrands, getBrandById, updateBrand } = require('../controller/brand.controller.js');


const brandRoute = express.Router()

brandRoute.route('/').post(createBrand).get(getBrands)
brandRoute.route('/:id').get(getBrandById).patch(updateBrand)

module.exports = brandRoute;