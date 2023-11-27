import React from "react";
import axios from "axios";
import ListProducts from "@/components/products/ListProducts";

const getProduct = async()=>{
    const { data } = await axios.get(`${process.env.API_URL}/api/products`);
    return data
}
const Homepage = async()=>{
    const productData = await getProduct();
    return <ListProducts data = {productData}/>
}

export default Homepage;
