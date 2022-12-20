const express = require('express');
const cors = require("cors");
const app = express()

const brandRoute = require('./routes/brand.route.js');
const storeRoute = require('./routes/store.route.js');
const categoryRoute = require('./routes/category.route.js');
const productRoute = require('./routes/product.route.js');


//middleware
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send({
        status: 'success',
        message: 'server is running'
    })
})

app.use('/api/v1/brand', brandRoute)
app.use('/api/v1/product', productRoute)
app.use('/api/v1/store', storeRoute)
app.use('/api/v1/category', categoryRoute)

module.exports = app;