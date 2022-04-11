import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
const Item =(props)=>{
  const history= useHistory();
  const {catName, catImage, catId} = props.category;
  const onButtonClickHandler = ()=>{
      history.push('/products/'+catId)
  }
  return(
     <> 
      <div className="col-md-3 md-margin-bottom-30 md-margin-top-20">
        <div className="overflow-h">
          <a onClick={ onButtonClickHandler } className="illustration-v3" style={{backgroundImage:'url('+"http://rjtmobile.com/grocery/images/"+catImage+')'}} >
            <span className="illustration-bg">
            <span className="illustration-ads">
                <span className="illustration-v3-category">
                <span className="product-category">{catName}</span>
                </span>
            </span>
            </span>
          </a>
        </div>
     </div>
    </>
  )
}

export default Item;

