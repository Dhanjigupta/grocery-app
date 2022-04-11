import React from 'react';
import Header from '../../components/Header';
import Products from './Products';
import SubCategory from './SubCategory';
import Footer from '../../components/Footer';

const ProductPage = ()=>{
    return(
        <>
       <div class="wrapper">
		<Header />
        <div class="breadcrumbs">
        <div class="container">
            <h1 class="pull-left">Products </h1>
            <ul class="pull-right breadcrumb">
                <li><a href="#">Home</a></li>
                <li class="active">Products</li>
            </ul>
        </div>
        </div>

      	<div class="content container">
 			<div class="row">
 				<div class="col-md-3 filter-by-block md-margin-bottom-60">
 					<h1>Filter By</h1>
 				     <div class="panel-group" id="accordion-v2">
 						<div class="panel panel-default">
 							<div class="panel-heading">
 								<h2 class="panel-title">
 									<a data-toggle="collapse" data-parent="#accordion-v2" href="#collapseTwo">
 										Categories
 										<i class="fa fa-angle-down"></i>
 									</a>
 								</h2>
 							</div>
 							<div id="collapseTwo" class="panel-collapse collapse in">
 								<div class="panel-body">
 									 <SubCategory />
 								</div>
 							</div>
 						</div>
 					</div>

 					
 				<button type="button" class="btn-u btn-brd btn-brd-hover btn-u-lg btn-u-sea-shop btn-block">Reset</button>
 				</div>

 				<div class="col-md-9">
 					<div class="row margin-bottom-5">
 						<div class="col-sm-4 result-category">
 							<h2>Grocery</h2>
 							<small class="shop-bg-red badge-results">45 Results</small>
 						</div>
 						<div class="col-sm-8">
 							<ul class="list-inline clear-both">
 								<li class="grid-list-icons">
 									<a href="#"><i class="fa fa-th-list"></i></a>
 									<a href="#"><i class="fa fa-th"></i></a>
 								</li>
 								<li class="sort-list-btn">
 									<h3>Sort By :</h3>
 									<div class="btn-group">
 										<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
 											Popularity <span class="caret"></span>
 										</button>
 										<ul class="dropdown-menu" role="menu">
 											<li><a href="#">All</a></li>
 											<li><a href="#">Best Sales</a></li>
 											<li><a href="#">Top Last Week Sales</a></li>
 											<li><a href="#">New Arrived</a></li>
 										</ul>
 									</div>
 								</li>
 								<li class="sort-list-btn">
 									<h3>Show :</h3>
 									<div class="btn-group">
 										<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
 											20 <span class="caret"></span>
 										</button>
 										<ul class="dropdown-menu" role="menu">
 											<li><a href="#">All</a></li>
 											<li><a href="#">10</a></li>
 											<li><a href="#">5</a></li>
 											<li><a href="#">3</a></li>
 										</ul>
 									</div>
 								</li>
 							</ul>
 						</div>
 					</div>

 					<div class="filter-results">
 						<div class="row illustration-v2 margin-bottom-30">
 						  <Products />  
                        </div>
                    </div>

 					<div class="text-center">
 						<ul class="pagination pagination-v2">
 							<li><a href="#"><i class="fa fa-angle-left"></i></a></li>
 							<li><a href="#">1</a></li>
 							<li class="active"><a href="#">2</a></li>
 							<li><a href="#">3</a></li>
 							<li><a href="#"><i class="fa fa-angle-right"></i></a></li>
 						</ul>
 					</div>

 				</div>
 			</div>
 		  </div>
 		
		 <Footer />
		</div>
       
        </>
    )
}
export default ProductPage;