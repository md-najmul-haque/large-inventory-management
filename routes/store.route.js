const express = require('express');
const { createStore, getStores } = require('../controller/store.controller.js');

const storeRoute = express.Router()

storeRoute.route('/').post(createStore).get(getStores)

module.exports = storeRoute;