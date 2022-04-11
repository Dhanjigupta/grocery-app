import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Item from './Item';
const CATEGORY_URL="http://apolis-grocery.herokuapp.com/api/category";
const Category=()=>{
    //setting state with initial value and callback to set state value
    const [categories, setCategories]= useState([]);
    useEffect(()=>{
       axios.get(CATEGORY_URL)
       .then((response)=>{
           setCategories(response.data.data);
       })
       .catch((error)=>{
          console.log(error);
       });
    });

    return(
        <>
        {categories.map((item) => (
           <Item category={item} />
        ))}
        </>
    )
}
export default Category;


