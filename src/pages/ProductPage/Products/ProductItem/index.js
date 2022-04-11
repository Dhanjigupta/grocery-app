import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductItem = (props) =>{
    const {productName, price, mrp, image, unit, description} = props.product;
    return(
        <>
           <div className="col-md-4">
            <div className="product-img product-img-brd">
                <a href="#"><img style={{height:'200px'}} className="full-width img-responsive" src={'http://rjtmobile.com/grocery/images/'+ image} alt=""/></a>
                <NavLink className="product-review" to="/view-product">Quick review</NavLink>
                <a className="add-to-cart" href="#"><i className="fa fa-shopping-cart"></i>Add to cart</a>
            </div>
            <div className="product-description product-description-brd margin-bottom-30">
                <div className="overflow-h margin-bottom-5">
                    <div className="pull-left">
                        <h4 className="title-price"><a href="#"> {`${productName.substring(0,18)}...`} </a></h4>
                     </div>
                    <div className="product-price">
                        <span className="title-price">{price}</span>
                        <span className="title-price line-through">{mrp}</span>
                    </div>
                </div>
                <ul className="list-inline product-ratings">
                    <li><i className="rating-selected fa fa-star"></i></li>
                    <li><i className="rating-selected fa fa-star"></i></li>
                    <li><i className="rating-selected fa fa-star"></i></li>
                    <li><i className="rating fa fa-star"></i></li>
                    <li><i className="rating fa fa-star"></i></li>
                    <li className="like-icon"><a data-original-title="Add to wishlist" data-toggle="tooltip" data-placement="left" className="tooltips" href="#"><i className="fa fa-heart"></i></a></li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default ProductItem;