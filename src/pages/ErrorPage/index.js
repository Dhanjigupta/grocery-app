import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
const ErrorPage = ()=>{
    return(
        <>
            <div className="wrapper">
                <Header />
                <div className="breadcrumbs">
                    <div className="container">
                        <h1 className="pull-left">Error Page</h1>
                        <ul className="pull-right breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li className="active">Error Page</li>
                        </ul>
                    </div>
                </div>
                
                <div className="container content">
                    <div className="row margin-bottom-20">
                        <div className="col-md-12 md-margin-bottom-20 min-errorpage-body">
                         <p className="text-justify dark-color-font content-text-box">
                            <h5><b>404 Error Page</b></h5>
                            OOps somethig wend wrong, Please try again.
                        </p>
                        </div>
                    </div>
                </div>
        
               <Footer />
            </div>

        </>
    )
}
export default ErrorPage;