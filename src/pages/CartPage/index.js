import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
const Cart = ()=>{
    return(
        <>
       <div className="wrapper">
		<Header />
          <div className="breadcrumbs">
            <div className="container">
                <h1 className="pull-left">Shopping Cart </h1>
                <ul className="pull-right breadcrumb">
                    <li><a href="/">Home</a></li>
                    <li className="active">Cart Item</li>
                </ul>
            </div>
          </div>

          <div className="content-md margin-bottom-30">
			<div className="container">
				<form className="shopping-cart" action="#">
					<div>
						<div className="header-tags">
							<div className="overflow-h">
                                <br/>
								<p>Review &amp; edit your product <i className="rounded-x fa fa-check"></i></p>
								
							</div>
						</div>
						<section>
							<div className="table-responsive">
								<table className="table table-striped">
									<thead>
										<tr>
											<th>Product</th>
											<th>Price</th>
											<th>Qty</th>
											<th>Total</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="product-in-table">
												<img className="img-responsive" src="assets/img/thumb/08.jpg" alt=""/>
												<div className="product-it-in">
													<h3>Grocery</h3>
													<span>Sed aliquam tincidunt tempus</span>
												</div>
											</td>
											<td>$ 160.00</td>
											<td>
												<button type='button' className="quantity-button" name='subtract' onclick='javascript: subtractQty1();' value='-'>-</button>
												<input type='text' className="quantity-field" name='qty1' value="5" id='qty1'/>
												<button type='button' className="quantity-button" name='add' onclick='javascript: document.getElementById("qty1").value++;' value='+'>+</button>
											</td>
											<td className="shop-red">$ 320.00</td>
											<td>
												<button type="button" className="close"><span>&times;</span><span className="sr-only">Close</span></button>
											</td>
										</tr>
										<tr>
											<td className="product-in-table">
												<img className="img-responsive" src="assets/img/thumb/07.jpg" alt=""/>
												<div className="product-it-in">
													<h3>Grocery</h3>
													<span>Sed aliquam tincidunt tempus</span>
												</div>
											</td>
											<td>$ 160.00</td>
											<td>
												<button type='button' className="quantity-button" name='subtract' onclick='javascript: subtractQty2();' value='-'>-</button>
												<input type='text' className="quantity-field" name='qty2' value="3" id='qty2'/>
												<button type='button' className="quantity-button" name='add' onclick='javascript: document.getElementById("qty2").value++;' value='+'>+</button>
											</td>
											<td className="shop-red">$ 320.00</td>
											<td>
												<button type="button" className="close"><span>&times;</span><span className="sr-only">Close</span></button>
											</td>
										</tr>
										<tr>
											<td className="product-in-table">
												<img className="img-responsive" src="assets/img/thumb/06.jpg" alt=""/>
												<div className="product-it-in">
													<h3>Grocery</h3>
													<span>Sed aliquam tincidunt tempus</span>
												</div>
											</td>
											<td>$ 160.00</td>
											<td>
												<button type='button' className="quantity-button" name='subtract' onclick='javascript: subtractQty3();' value='-'>-</button>
												<input type='text' className="quantity-field" name='qty3' value="1" id='qty3'/>
												<button type='button' className="quantity-button" name='add' onclick='javascript: document.getElementById("qty3").value++;' value='+'>+</button>
											</td>
											<td className="shop-red">$ 320.00</td>
											<td>
												<button type="button" className="close"><span>&times;</span><span className="sr-only">Close</span></button>
											</td>
										</tr>
										<tr>
											<td className="product-in-table">
												<img className="img-responsive" src="assets/img/thumb/09.jpg" alt=""/>
												<div className="product-it-in">
													<h3>Grocery</h3>
													<span>Sed aliquam tincidunt tempus</span>
												</div>
											</td>
											<td>$ 160.00</td>
											<td>
												<button type='button' className="quantity-button" name='subtract' onclick='javascript: subtractQty4();' value='-'>-</button>
												<input type='text' className="quantity-field" name='qty4' value="7" id='qty4'/>
												<button type='button' className="quantity-button" name='add' onclick='javascript: document.getElementById("qty4").value++;' value='+'>+</button>
											</td>
											<td className="shop-red">$ 320.00</td>
											<td>
												<button type="button" className="close"><span>&times;</span><span className="sr-only">Close</span></button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</section>

					
                    	<div className="coupon-code">
							<div className="row">
								<div className="col-sm-4 sm-margin-bottom-30">
									<h3>Discount Code</h3>
									<p>Enter your coupon code</p>
									<input className="form-control margin-bottom-10" name="code" type="text"/>
									<button type="button" className="btn-u btn-u-sea-shop">Apply Coupon</button>
								</div>
								<div className="col-sm-3 col-sm-offset-5">
									<ul className="list-inline total-result">
										<li>
											<h4>Subtotal:</h4>
											<div className="total-result-in">
												<span>$ 1280.00</span>
											</div>
										</li>
										<li>
											<h4>Shipping:</h4>
											<div className="total-result-in">
												<span className="text-right">- - - -</span>
											</div>
										</li>
										<li className="divider"></li>
										<li className="total-price">
											<h4>Total:</h4>
											<div className="total-result-in">
												<span>$ 1280.00</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
                        
					</div>
				</form>
			</div>
		 </div>
 		
		 <Footer />
		</div> 
        </>
    )
}
export default Cart;