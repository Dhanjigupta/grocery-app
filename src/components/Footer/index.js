import React from 'react';
const Footer = () => {
    return(
        <>
           <div className="shop-subscribe">
		<div className="container">
			<div className="row">
				<div className="col-md-8 md-margin-bottom-20">
					<h2>subscribe to our <strong> newsletter</strong></h2>
				</div>
                <form method="post" id="phpForm">
				<div className="col-md-4">
					<div className="input-group">
                      	<input type="email" name="Email" id="email" className="form-control" required="" placeholder="Email your email..."/>
						<span className="input-group-btn">
							<button className="btn" type="button" id="btnsubscribe"><i className="fa fa-envelope-o"></i></button>
						</span>
                   	</div>
				</div>
                </form>
			</div>
		</div>
</div>
<div id="footer-v1" className="footer-v1">
			<div className="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-4 md-margin-bottom-40">
						     <h1 className="app-logo-text">Fresh Market </h1>
							 <h4 style={{color:'#fff'}}>Fresh Market for a better tomorrow</h4>
                             <p style={{color:'#fff'}}>
							 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
							 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
							 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							 It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
							 </p>
						</div>
						
						<div className="col-md-4 md-margin-bottom-40">
							<div className="headline"><h2>Useful Links</h2></div>
							<ul className="list-unstyled link-list">
                                <li><a href="#">Home</a></li>
                               	<li><a href="#">About us</a></li>
                                <li><a href="#">Products</a></li>
								<li><a href="#">Login</a></li>
								<li><a href="#">Register</a></li>
								<li><a href="#">Contact Us</a></li>
							</ul>
						</div>
						

						<div className="col-md-4 map-img md-margin-bottom-40">
							<div className="headline"><h2>Contact Us</h2></div>
							<address className="md-margin-bottom-40">
								<b>Frest Market Grocery </b> <br />
								 Gangothri Nilaya, Munireddy Layout, Panathur Main Road, Bengaluru (India), Pin Code:560103 <br />
								<i className="fa fa-envelope"></i> <a href="#"  style={{color:'#fff'}}>info@freshmarket.in</a> <br />
                                <i className="fa fa-phone"></i> +91 7905041491<br />
                                <i className="fa fa-mobile"></i> +91 9525037744<br />
                                
                           	</address>
						</div>
						
					</div>
				</div>
			</div>

			<div className="copyright">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<p>
							  &copy; 2021 Fresh Market All rights reserved.
							</p>
						</div>
                    	<div className="col-md-6">
							<ul className="footer-socials list-inline">
								<li>
									<a href="#" className="tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook">
									<i className="fa fa-facebook"></i>
									</a>
								</li>
								<li>
									<a href="#" className="tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Skype">
									<i className="fa fa-skype"></i>
									</a>
								</li>
								<li>
									<a href="#" className="tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="YouTube">
									<i className="fa fa-youtube-play"></i>
									</a>
								</li>
								<li>
									<a href="#" className="tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Linkedin">
									<i className="fa fa-linkedin"></i>
									</a>
								</li>
								<li>
									<a href="#" className="tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter">
									<i className="fa fa-twitter"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
        </div>
       </>
     )
    }
export default Footer;