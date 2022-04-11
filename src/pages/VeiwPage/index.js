import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const ViewPage =()=>{
    return(
        <>
         <div className="wrapper">
		 <Header />
           
         <div className="shop-product">
				<div className="container">
				<ul className="breadcrumb-v5">
					<li><a href="#"><i className="fa fa-home"></i></a></li>
					<li><a href="#">Products</a></li>
					<li className="active">New</li>
				</ul>
			</div>
			
			<div className="container">
				<div className="row">
					<div className="col-md-6 md-margin-bottom-50">
                        <img  src="assets/img/product.jpg" className="img-responsive" alt="lorem ipsum dolor sit"/>
					</div>

					<div className="col-md-6">
						<div className="shop-product-heading">
							<h2>Corinna Foley</h2>
							<ul className="list-inline shop-product-social">
								<li><a href="#"><i className="fa fa-facebook"></i></a></li>
								<li><a href="#"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i className="fa fa-pinterest"></i></a></li>
							</ul>
						</div>

						<ul className="list-inline product-ratings margin-bottom-30">
							<li><i className="rating-selected fa fa-star"></i></li>
							<li><i className="rating-selected fa fa-star"></i></li>
							<li><i className="rating-selected fa fa-star"></i></li>
							<li><i className="rating fa fa-star"></i></li>
							<li><i className="rating fa fa-star"></i></li>
							<li className="product-review-list">
								<span>(1) <a href="#">Review</a> | <a href="#"> Add Review</a></span>
							</li>
						</ul>

						<p>Integer <strong>dapibus ut elit</strong> non volutpat. Integer auctor purus a lectus suscipit fermentum. Vivamus lobortis nec erat consectetur elementum.</p><br/>

						<ul className="list-inline shop-product-prices margin-bottom-30">
							<li className="shop-red">$57.00</li>
							<li className="line-through">$70.00</li>
							<li><small className="shop-bg-red time-day-left">4 days left</small></li>
						</ul>

						
						<h3 className="shop-product-title">Quantity</h3>
						<div className="margin-bottom-40">
							<form name="f1" className="product-quantity sm-margin-bottom-20">
								<button type='button' className="quantity-button" name='subtract' onclick='javascript: subtractQty();' value='-'>-</button>
								<input type='text' className="quantity-field" name='qty' value="1" id='qty'/>
								<button type='button' className="quantity-button" name='add' onclick='javascript: document.getElementById("qty").value++;' value='+'>+</button>
							</form>
							<button type="button" className="btn-u btn-u-sea-shop btn-u-lg">Add to Cart</button>
						</div>

						<ul className="list-inline add-to-wishlist add-to-wishlist-brd">
							<li className="wishlist-in">
								<i className="fa fa-heart"></i>
								<a href="#">Add to Wishlist</a>
							</li>
							<li className="compare-in">
								<i className="fa fa-exchange"></i>
								<a href="#">Add to Compare</a>
							</li>
						</ul>
						<p className="wishlist-category"><strong>Categories:</strong> <a href="#">Grocery,</a> <a href="#">Vegetables</a></p>
					</div>
				</div>
			</div>
		</div>
		
		<div className="content-md container">
			<div className="row margin-bottom-60">
				<div className="col-md-4 product-service md-margin-bottom-30">
					<div className="product-service-heading">
						<i className="fa fa-truck"></i>
					</div>
					<div className="product-service-in">
						<h3>Free Delivery</h3>
						<p>Integer mattis lacinia felis vel molestie. Ut eu euismod erat, tincidunt pulvinar semper veliUt porta, leo...</p>
						<a href="#">+Read More</a>
					</div>
				</div>
				<div className="col-md-4 product-service md-margin-bottom-30">
					<div className="product-service-heading">
						<i className="fa fa-home"></i>
					</div>
					<div className="product-service-in">
						<h3>Customer Service</h3>
						<p>Integer mattis lacinia felis vel molestie. Ut eu euismod erat, tincidunt pulvinar semper veliUt porta, leo...</p>
						<a href="#">+Read More</a>
					</div>
				</div>
				<div className="col-md-4 product-service">
					<div className="product-service-heading">
						<i className="fa fa-refresh"></i>
					</div>
					<div className="product-service-in">
						<h3>Free Returns</h3>
						<p>Integer mattis lacinia felis vel molestie. Ut eu euismod erat, tincidunt pulvinar semper veliUt porta, leo...</p>
						<a href="#">+Read More</a>
					</div>
				</div>
			</div>
			
			<div className="tab-v6">
				<ul className="nav nav-tabs" role="tablist">
					<li className="active"><a href="#description" role="tab" data-toggle="tab">Description</a></li>
					<li><a href="#reviews" role="tab" data-toggle="tab">Reviews (1)</a></li>
				</ul>

				<div className="tab-content">
				    <div className="tab-pane fade in active" id="description">
						<div className="row">
							<div className="col-md-7">
								<p>Morbi non semper est, eget tincidunt turpis. Vivamus sollicitudin sodales nisi, et venenatis turpis Vivamus sollicitudin ultricies eget. Fusce vitae neque blandit lectus faucibus aliquet nec vel ipsum. Integer mattis lacinia felis vel sollicitudin molestie.</p><br/>

								<h3 className="heading-md margin-bottom-20">Specifies</h3>
								<div className="row">
									<div className="col-sm-6">
										<ul className="list-unstyled specifies-list">
											<li><i className="fa fa-caret-right"></i>Brand Name: <span>Lacoste</span></li>
											<li><i className="fa fa-caret-right"></i>Technics: <span>Computer</span> Knitted</li>
											<li><i className="fa fa-caret-right"></i>Sleeve Length: <span>Full</span></li>
											<li><i className="fa fa-caret-right"></i>Sleeve Style: <span>Regular</span></li>
											<li><i className="fa fa-caret-right"></i>Pattern Type: <span>PAID</span></li>
											<li><i className="fa fa-caret-right"></i>Style: <span>Casual</span></li>
										</ul>
									</div>
									<div className="col-sm-6">
										<ul className="list-unstyled specifies-list">
											<li><i className="fa fa-caret-right"></i>Material: <span>Cotton,Nylon</span></li>
											<li><i className="fa fa-caret-right"></i>Item Type: <span>Pullovers</span></li>
											<li><i className="fa fa-caret-right"></i>Thickness: <span>Thin</span></li>
											<li><i className="fa fa-caret-right"></i>Model Number: <span>TM-11013 </span></li>
											<li><i className="fa fa-caret-right"></i>Gender: <span>Men</span></li>
											<li><i className="fa fa-caret-right"></i>MATERIAL: <span>80%COTTON+10%NYLON</span></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-md-5">
								<div className="responsive-video">
									<iframe src="//player.vimeo.com/video/72343553" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
								</div>
							</div>
						</div>
					</div>
				
					<div className="tab-pane fade" id="reviews">
						<div className="product-comment margin-bottom-40">
							<div className="product-comment-in">
								<img className="product-comment-img rounded-x" src="assets/img/team/01.jpg" alt=""/>
								<div className="product-comment-dtl">
									<h4>Mickel <small>22 days ago</small></h4>
									<p>I like the green colour, it's very likeable and reminds me of Hollister. A little loose though but I am very skinny</p>
									<ul className="list-inline product-ratings">
										<li className="reply"><a href="#">Reply</a></li>
										<li className="pull-right">
											<ul className="list-inline">
												<li><i className="rating-selected fa fa-star"></i></li>
												<li><i className="rating-selected fa fa-star"></i></li>
												<li><i className="rating-selected fa fa-star"></i></li>
												<li><i className="rating fa fa-star"></i></li>
												<li><i className="rating fa fa-star"></i></li>
											</ul>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<h3 className="heading-md margin-bottom-30">Add a review</h3>
						<form action="assets/php/demo-contacts-process.php" method="post" id="sky-form3" className="sky-form sky-changes-4">
							<fieldset>
								<div className="margin-bottom-30">
									<label className="label-v2">Name</label>
									<label className="input">
										<input type="text" name="name" id="name"/>
									</label>
								</div>

								<div className="margin-bottom-30">
									<label className="label-v2">Email</label>
									<label className="input">
										<input type="email" name="email" id="email"/>
									</label>
								</div>

								<div className="margin-bottom-30">
									<label className="label-v2">Review</label>
									<label className="textarea">
										<textarea rows="7" name="message" id="message"></textarea>
									</label>
								</div>
							</fieldset>

							<footer className="review-submit">
								<label className="label-v2">Review</label>
								<div className="stars-ratings">
									<input type="radio" name="stars-rating" id="stars-rating-5"/>
									<label for="stars-rating-5"><i className="fa fa-star"></i></label>
									<input type="radio" name="stars-rating" id="stars-rating-4"/>
									<label for="stars-rating-4"><i className="fa fa-star"></i></label>
									<input type="radio" name="stars-rating" id="stars-rating-3"/>
									<label for="stars-rating-3"><i className="fa fa-star"></i></label>
									<input type="radio" name="stars-rating" id="stars-rating-2"/>
									<label for="stars-rating-2"><i className="fa fa-star"></i></label>
									<input type="radio" name="stars-rating" id="stars-rating-1"/>
									<label for="stars-rating-1"><i className="fa fa-star"></i></label>
								</div>
								<button type="button" className="btn-u btn-u-sea-shop btn-u-sm pull-right">Submit</button>
							</footer>
						</form>
					</div>
				</div>
			</div>
		 </div>
		
          
 		 <Footer />
		</div> 

        </>
    )
}
export default ViewPage;