const exp = require("express");
const app = exp();
const product = require("./routes/productRoute");
const express = require("express");
const errorMiddleware = require("./middleware/error")
// Use body-parser middleware

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(exp.json());
app.use("/api/v1",product)

// Middleware For Errors
app.use(errorMiddleware);

module.exports = app;