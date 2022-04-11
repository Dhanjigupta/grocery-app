import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const SUB_CATEGORY_URL= "http://apolis-grocery.herokuapp.com/api/subcategory/";

const SubCategory = (props) => {
    const params = useParams();
    const [subCategories, setSubCategories]=useState([]);
    useEffect(()=>{
        let catId = params.catId;
        axios
        .get(`${SUB_CATEGORY_URL+catId}`)
        .then((response) => setSubCategories(response.data.data))
        .catch((error)=>console.log(error));
    },[])
    return(
        <>
         <ul class="list-unstyled checkbox-list">
           
           {subCategories.map((item) =>(
             <li>
              <label class="checkbox">
                  <input type="checkbox" name="checkbox" />
                  <i></i>
                  {item.subName}
                  <small><a href="#">(0)</a></small>
              </label>
             </li>
           ))}
            

         </ul>
        </>
    )
}
export default SubCategory;