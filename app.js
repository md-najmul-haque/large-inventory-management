const express = require('express');
const cors = require("cors")
const app = express()


//middleware
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send({
        status: 'success',
        message: 'server is running'
    })
})

module.exports = app;