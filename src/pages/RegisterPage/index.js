import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
const RegisterPage=()=>{
    return(
       <>
       <div className="wrapper">
        <Header />
            <div className="breadcrumbs">
              <div className="container">
                <h1 className="pull-left">Register</h1>
                <ul className="pull-right breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li className="active">Register</li>
                </ul>
              </div>
            </div>

           <div className="log-reg-v3 content-md">
             <div class="container content" style={{paddingTop:"30px"}}>
				<div className="row">
				<div class="row">
					<div class="col-md-3 md-margin-bottom-50">
						
					</div>

					<div class="col-md-5">
						<form id="sky-form4" class="log-reg-block sky-form">
							<h2>Create New Account</h2>

							<div class="login-input reg-input">
								<div class="row">
									<div class="col-sm-6">
										<section>
											<label class="input">
												<input type="text" name="firstname" placeholder="First name" class="form-control"/>
											</label>
										</section>
									</div>
									<div class="col-sm-6">
										<section>
											<label class="input">
												<input type="text" name="lastname" placeholder="Last name" class="form-control"/>
											</label>
										</section>
									</div>
								</div>
								<label class="select margin-bottom-15">
									<select name="gender" class="form-control">
										<option value="0" selected disabled>Gender</option>
										<option value="1">Male</option>
										<option value="2">Female</option>
										<option value="3">Other</option>
									</select>
								</label>
								<div class="row margin-bottom-10">
									<div class="col-xs-6">
										<label class="select">
											<select name="month" class="form-control">
												<option disabled="" selected="" value="0">Month</option>
												<option>January</option>
												<option>February</option>
												<option>March</option>
												<option>April</option>
												<option>May</option>
												<option>June</option>
												<option>July</option>
												<option>August</option>
												<option>September</option>
												<option>October</option>
												<option>November</option>
												<option>December</option>
											</select>
										</label>
									</div>
									<div class="col-xs-3">
										<input type="text" name="day" placeholder="Day" class="form-control"/>
									</div>
									<div class="col-xs-3">
										<input type="text" name="year" placeholder="Year" class="form-control"/>
									</div>
								</div>
								<section>
									<label class="input">
										<input type="text" name="username" placeholder="Username" class="form-control"/>
									</label>
								</section>
								<section>
									<label class="input">
										<input type="email" name="email" placeholder="Email address" class="form-control"/>
									</label>
								</section>
								<section>
									<label class="input">
										<input type="password" name="password" placeholder="Password" id="password" class="form-control"/>
									</label>
								</section>
								<section>
									<label class="input">
										<input type="password" name="passwordConfirm" placeholder="Confirm password" class="form-control"/>
									</label>
								</section>
							</div>

							<label class="checkbox margin-bottom-10">
								<input type="checkbox" name="checkbox"/>
								<i></i>
								Subscribe to our newsletter to get the latest offers
							</label>
							<label class="checkbox margin-bottom-20">
								<input type="checkbox" name="checkbox"/>
								<i></i>
								I have read agreed with the <a href="#">terms &amp; conditions</a>
							</label>
							<button class="btn-u btn-u-sea-shop btn-block margin-bottom-20" type="submit">Create Account</button>
						</form>

						<div class="margin-bottom-20"></div>
						<p class="text-center">Already you have an account? <a href="shop-ui-login.html">Sign In</a></p>
					</div>
				  </div>
				</div>
			  </div>
		   </div>
		
        
         <Footer />
        </div> 
      </>
    )
}
export default RegisterPage;