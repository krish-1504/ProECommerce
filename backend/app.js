const exp = require("express");
const app = exp();
const product = require("./routes/productRoute");
const express = require("express");
const errorMiddleware = require("./middleware/error")
const user = require("./routes/userRoute")
// Use body-parser middleware

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(exp.json());
app.use("/api/v1",product)
app.use("/api/v1",user)

// Middleware For Errors
app.use(errorMiddleware);

module.exports = app;