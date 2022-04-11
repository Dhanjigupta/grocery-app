import React from 'react';
import Logo from '../../logo.png';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return(
        <>
        <div className="topbar-v3">
                <div className="search-open">
                <div className="container">
                    <input type="text" className="form-control" placeholder="Search"/>
                    <div className="search-close"><i className="fa fa-close"></i></div>
                </div>
                </div> 
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <ul className="left-topbar">
                                <li style={{color:'#fff'}}>For Any Query Call On  <i className="fa fa-phone"></i>  +91 9525037744</li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                        <ul className="list-inline right-topbar pull-right">
                            <li><a href="shop-ui-add-to-cart.html">Wishlist (0)</a></li>
                            <li><NavLink to="/login">Login</NavLink> | <NavLink to="/register">Register</NavLink></li>
                            <li><i className="search fa fa-search search-button"></i></li>
                        </ul>
                        </div>
                    </div>
                </div>
         </div>
         <div className="header-v5 header-static">
           
             <div className="navbar navbar-default mega-menu" role="navigation" >
				<div className="container">
                  	<div className="navbar-header">
			        <button  type="button"  className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					 </button>
                     <NavLink className="navbar-brand" to="/">
						<img id="logo-header" src={Logo}  alt="Fresh Market" className="app-logo" />
                     </NavLink>
                     </div>

					<div className="shop-badge badge-icons pull-right">
						<a href="#"><i className="fa fa-shopping-cart"></i></a>
						<span className="badge badge-sea rounded-x">3</span>
						<div className="badge-open">
							<ul className="list-unstyled mCustomScrollbar" data-mcs-theme="minimal-dark">
								<li>
									<img src="assets/img/thumb/08.jpg" alt=""/>
									<button type="button" className="close">×</button>
									<div className="overflow-h">
										<span>Rice Bag</span>
										<small>1 x $400.00</small>
									</div>
								</li>
								<li>
									<img src="assets/img/thumb/09.jpg" alt=""/>
									<button type="button" className="close">×</button>
									<div className="overflow-h">
										<span>Sugar Bag</span>
										<small>1 x $400.00</small>
									</div>
								</li>
								<li>
									<img src="assets/img/thumb/07.jpg" alt=""/>
									<button type="button" className="close">×</button>
									<div className="overflow-h">
										<span>Vegetables</span>
										<small>1 x $400.00</small>
									</div>
								</li>
							</ul>
							<div className="subtotal">
								<div className="overflow-h margin-bottom-10">
									<span>Subtotal</span>
									<span className="pull-right subtotal-cost">$1200.00</span>
								</div>
								<div className="row">
									<div className="col-xs-6">
										<NavLink to="/cart" className="btn-u btn-brd btn-brd-hover btn-u-sea-shop btn-block">View Cart</NavLink>
									</div>
									<div className="col-xs-6">
										<a href="#" className="btn-u btn-u-sea-shop btn-block">Checkout</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					
                   	<div className="collapse navbar-collapse navbar-responsive-collapse" >
						<ul className="nav navbar-nav">
                            <li className="active"><NavLink to="/">HOME</NavLink></li>
							<li><NavLink to="/about" > ABOUT&nbsp;US</NavLink></li>
						    <li><NavLink to="/products" > PRODUCTS </NavLink></li>
							<li><NavLink to="/contact" > CONTACT US </NavLink></li>
						</ul>
					</div>
				</div>
			</div>
           
      </div>
      </>	
    )
}
export default Header;