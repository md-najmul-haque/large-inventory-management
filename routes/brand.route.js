const express = require('express');
const { createBrand, getBrands } = require('../controller/brand.controller.js');



const brandRoute = express.Router()

brandRoute.route('/').post(createBrand).get(getBrands)

module.exports = brandRoute;