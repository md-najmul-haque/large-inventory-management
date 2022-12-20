const express = require('express');
const { createStore, getStores, getStoresById } = require('../controller/store.controller.js');

const storeRoute = express.Router()

storeRoute.route('/').post(createStore).get(getStores)
storeRoute.route('/:id').get(getStoresById)

module.exports = storeRoute;