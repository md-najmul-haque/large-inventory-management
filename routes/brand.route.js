const express = require('express');
const { createBrand } = require('../controller/brand.controller.js');



const brandRoute = express.Router()

brandRoute.route('/').post(createBrand)

module.exports = brandRoute;