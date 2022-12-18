const colors = require("colors");
const app = require("./app");


const port = process.env.PROT || 5000;



app.listen(port, () => { console.log(`port is listening to the ${port}`.yellow.bold) })