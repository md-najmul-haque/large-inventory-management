const express = require('express');
const { createBrand } = require('../controller/brand.controller.js');



const router = express.Router()

router.route('/').post(createBrand)

module.exports = router;