const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Product Name"],
        trim:true,
    },
    description:{
        type:String,
        required:[true,"Please Enter Product Description"],
    },
    price:{
        type:Number,
        required:[true,"Please Enter Product Price"],
        maxLength:[8,"Price Cannot Exceed 8 Characters"],
    },
    ratings:{
        type:Number,
        default:0,
    },
    image:[
        {
            public_id:{
                type:String,
                required:true,
            }
        }
    ]
})