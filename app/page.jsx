import React from "react";
import axios from "axios";
import ListProducts from "@/components/products/ListProducts";
import queryString from "query-string"
const getProduct = async(searchParams)=>{
    const urlParams = {
        keyword: searchParams.keyword
    }
    const searchQuery = queryString.stringify(urlParams)
    const { data } = await axios.get(`${process.env.API_URL}/api/products?${searchQuery}`);
    return data
}
const Homepage = async({ searchParams })=>{
    const productData = await getProduct(searchParams);
    return <ListProducts data = {productData}/>
}

export default Homepage;
