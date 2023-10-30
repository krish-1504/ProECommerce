const exp = require("express");
const app = exp();
app.arguments(express.json());

const product = require("./routes/productRoute");

app.arguments("/api/v1",product)
module.exports = app;