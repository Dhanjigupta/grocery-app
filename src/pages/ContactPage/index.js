import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ContactPage = ()=>{
    return(
     <>
     <div class="wrapper">
        <Header/>
        <div class="breadcrumbs">
        <div class="container">
            <h1 class="pull-left">Contact Us</h1>
            <ul class="pull-right breadcrumb">
                <li><a href="#">Home</a></li>
                <li class="active">Contact Us</li>
            </ul>
        </div>
        </div>

         <div class="container content" style={{paddingTop:"30px"}}>
			<div class="row margin-bottom-10">
				<div class="col-md-9 mb-margin-bottom-30">
					<div class="headline"><h2>Contact Form</h2></div>
					   <p class="text-justify dark-color-font"  style={{fontSize:'16px'}}>Please contact us using the form below or send us an email.</p><br />
       	                  <div id="divMessage" class="alert alert-info fade in hide">
								<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
								<h4>Thank You!</h4>
								<p class="dark-color-font"> Your message has been successfully sent! </p>
						 </div>
					   <form  method="post" id="sky-form3" class="sky-form sky-changes-3">
						<fieldset>
							<div class="row">
								<section class="col col-6">
									<label class="label">Name <span class="text-danger">*</span></label>
									<label class="input">
										<i class="icon-append fa fa-user"></i>
										<input type="text" name="name" id="name" style={{textTransform:"capitalize"}}/>
									</label>
								</section>
								<section class="col col-6">
									<label class="label">E-mail <span class="text-danger">*</span></label>
									<label class="input">
										<i class="icon-append fa fa-envelope-o"></i>
										<input type="email" name="email" id="email"/>
									</label>
								</section>
							</div>
                        	<section>
								<label class="label">Subject </label>
								<label class="input">
									<i class="icon-append fa fa-tag"></i>
									<input type="text" name="subject" id="subject"/>
								</label>
							</section>
                         	<section>
								<label class="label">Message <span class="text-danger">*</span></label>
								<label class="textarea">
									<i class="icon-append fa fa-comment"></i>
									<textarea rows="4" name="message" id="message"></textarea>
								</label>
							</section>
                    	</fieldset>
                     	<footer>
							<button class="btn-u"> Submit <i class="fa fa-paper-plane-o"></i></button>
						</footer>
                   	</form>
				</div>
            	<div class="col-md-3">
					<div class="headline"><h2>Contact Us</h2></div>
					<ul class="list-unstyled who margin-bottom-30" style={{color:"#286f9b !important"}}>
						<li><i class="fa fa-home"></i><b class="dark-color-font">Fresh Market </b> <br /> </li>
                        <li> <i></i>&nbsp;&nbsp;&nbsp; Panathur Main Road,<br /> </li>
						<li> <i></i>&nbsp;&nbsp;&nbsp; Near Swati Delux, <br /> </li>
                        <li> <i></i>&nbsp;&nbsp;&nbsp; Bengaluru, Karnataka, Pin-560103    <br /> </li>
                        <li> <i></i>&nbsp;&nbsp;&nbsp; INDIA     <br /> </li>
                       	<li><i class="fa fa-envelope"></i>info@freshmarket.in</li>
                        <li><i class="fa fa-mobile"></i>+91 9525037744 </li>
                        <li><a href="#"><i class="fa fa-globe"></i>https://www.frestmarket.in</a></li>
					</ul>
                   <div class="headline"><h2>Business Hours</h2></div>
					<ul class="list-unstyled margin-bottom-30">
						<li><strong>Monday-Friday:</strong> 8am to 10pm</li>
						<li><strong>Saturday & Sunday:</strong> 8am to 8pm</li>
					</ul>
             	</div>
			</div>
            </div>
           
            <div id="map_canvas">
            </div> 
             
             <Footer />

            </div>

        </>
    )
}
export default ContactPage;