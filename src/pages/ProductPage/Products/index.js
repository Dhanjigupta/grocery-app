import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProductItem from './ProductItem';
const PRODUCT_URL = "http://apolis-grocery.herokuapp.com/api/products/cat/";
const Products =()=>{
    const params = useParams();
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios
        .get(`${PRODUCT_URL}${params.catId}`)
        .then((response) =>{
          setProducts(response.data.data);
        })
        .catch((error)=> console.log(error));
    },[]);
    return(
        <>
          {products.map(product => <ProductItem product={product} /> )}
        </>
    )
}

export default Products;