const express = require('express');
const { createStore } = require('../controller/store.controller.js');

const storeRoute = express.Router()

storeRoute.route('/').post(createStore)

module.exports = storeRoute;