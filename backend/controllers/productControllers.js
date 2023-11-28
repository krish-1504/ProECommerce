import Product from "../models/product";
import APIFilters from "../utils/APIFilters";
export const newProduct = async (req,res,next)=>{
    const product = await Product.create(req.body);
    res.status(201).json({
        product,
    });
}

export const getProducts = async (req,res,next)=>{


    const apiFilters = new APIFilters(Product.find(),req.query).search().filter()
    const product = await apiFilters.query;


    res.status(200).json({
        product,
    });
}

export const getProduct = async (req,res,next)=>{
    const product = await Product.findById(req.query.id);
    if(!product){
        res.status(404).json({
            error:'Product Not Found',
        });
    }
    res.status(200).json({
        product,
    });
}