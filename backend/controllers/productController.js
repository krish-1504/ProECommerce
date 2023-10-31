const Product = require("../models/productModel");

exports.createProduct = async (req,res,next)=>{
    const product = Product.create(req.body);
}

exports.getAllProducts = (req,res) =>{
    res.status(200).json({message:"Working Perfectly Fine Kriiishh!!"});
}