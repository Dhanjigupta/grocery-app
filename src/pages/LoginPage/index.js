import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
const Login=()=>{
    return(
       <>
       <div className="wrapper">
        <Header />
            <div className="breadcrumbs">
              <div className="container">
                <h1 className="pull-left">Login</h1>
                <ul className="pull-right breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li className="active">Login</li>
                </ul>
              </div>
            </div>

           <div className="log-reg-v3 content-md">
           <div class="container content" style={{paddingTop:"30px"}}>
				<div className="row">
                    <div className="col-md-3"></div>
				 	<div className="col-md-6">
                       <form id="sky-form1" className="log-reg-block sky-form">
							<h2>Log in to your account</h2>

							<section>
								<label className="input login-input">
									<div className="input-group">
										<span className="input-group-addon"><i className="fa fa-user"></i></span>
										<input type="email" placeholder="Email Address" name="email" className="form-control"/>
									</div>
								</label>
							</section>
							<section>
								<label className="input login-input no-border-top">
									<div className="input-group">
										<span className="input-group-addon"><i className="fa fa-lock"></i></span>
										<input type="password" placeholder="Password" name="password" className="form-control"/>
									</div>
								</label>
							</section>
							<div className="row margin-bottom-5">
								<div className="col-xs-6">
									<label className="checkbox">
										<input type="checkbox" name="checkbox"/>
										<i></i>
										Remember me
									</label>
								</div>
								<div className="col-xs-6 text-right">
									<a href="#">Forget your Password?</a>
								</div>
							</div>
							<button className="btn-u btn-u-sea-shop btn-block margin-bottom-20" >Log in</button>

							<div className="border-wings">
								<span>or</span>
							</div>

							<div className="row columns-space-removes">
								<div className="col-lg-6 margin-bottom-10">
									<button type="button" className="btn-u btn-u-md btn-u-fb btn-block"><i className="fa fa-facebook"></i> Facebook Log In</button>
								</div>
								<div className="col-lg-6">
									<button type="button" className="btn-u btn-u-md btn-u-tw btn-block"><i className="fa fa-twitter"></i> Twitter Log In</button>
								</div>
							</div>
						
                         </form>
						<div className="margin-bottom-20"></div>
						<p className="text-center">Don't have account yet? Learn more and <a href="shop-ui-register.html">Sign Up</a></p>
					</div>
                    <div className="col-md-3"></div>
				</div>
			</div>
		 </div>
		
        
         <Footer />
        </div> 
      </>
    )
}
export default Login;