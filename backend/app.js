const exp = require("express");
const app = exp();
const product = require("./routes/productRoute");
const express = require("express");

// Use body-parser middleware

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(exp.json());
app.use("/api/v1",product)



module.exports = app;