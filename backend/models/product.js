import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter product Name']
    },
    description:{
        type:String,
        required:[true,'Please enter product Description']
    },
    price:{
        type:Number,
        required:[true,'Please enter product Price']
    },
    images: [
        {
            public_id:{
                type:String
            },
            url:{
                type:String
            },
        }
    ],
    category:{
        type:String,
        required:[true,'Please enter product Category'],
        enum:{
            values:[
                "Electronics",
                "Cameras",
                "Laptops",
                "Accessories",
                "Headphones",
                "Sports",

            ],
            message:"Please select correct category"

        }
    },
    seller:{
        type:String,
        required:[true,'Please enter product Seller']
    },
    stock:{
        type:Number,
        required:[true,'Please enter product stock']
    },
    ratings:{
        type :Number,
        default:0
    },
    reviews:[
        {
            ratings:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            },
            createdAt:{
                type: Date,
                default : Date.now,
            },
        },
    ],
    createdAt:{
        type: Date,
        default : Date.now,
    },

});

export default mongoose.models.Product || mongoose.model('Product',productSchema);