const colors = require("colors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = require("./app");


const port = process.env.PROT || 5001;

// database connection by mongodb atlas
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ewtsgnj.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log(`Database connect successfully`.green)
});

app.listen(port, () => { console.log(`port is listening to the ${port}`.yellow.bold) })