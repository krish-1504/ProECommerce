const exp = require("express");
const app = exp();
const product = require("./routes/productRoute");


app.use(exp.json());
app.use("/api/v1",product)



module.exports = app;