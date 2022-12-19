const express = require('express');
const cors = require("cors");
const app = express()

const brandRoute = require('./routes/brand.route.js');


//middleware
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send({
        status: 'success',
        message: 'server is running'
    })
})

app.use('api/v1/brand', brandRoute)

module.exports = app;