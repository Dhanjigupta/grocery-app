import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Category from './Category';
const HomePage = ()=> {
    return(
        <>
          
           <div className="wrapper">
               <Header />
               <div className="tp-banner-container">
                <div className="tp-banner">
                  <ul>
                   <li className="revolution-mch-1" data-transition="fade" data-slotamount="5" data-masterspeed="2000">
                    <img src="assets/img/banners/B1.jpg" alt="Grocery"  data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat"/>
                     <div className="tp-caption revolution-ch3 sft start"
                          data-x="left"
                          data-hoffset="5"
                          data-y="370"
                          data-speed="1500"
                          data-start="500"
                          data-easing="Back.easeInOut"
                          data-endeasing="Power1.easeIn"
                          data-endspeed="300">
                          </div>
                      </li>

                    <li className="revolution-mch-1" data-transition="fade" data-slotamount="5" data-masterspeed="2000">
                    <img src="assets/img/banners/2.png" alt="Grocery"  data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat"/>
                      <div className="tp-caption revolution-ch3 sft start"
                          data-x="left"
                          data-hoffset="5"
                          data-y="370"
                          data-speed="1500"
                          data-start="500"
                          data-easing="Back.easeInOut"
                          data-endeasing="Power1.easeIn"
                          data-endspeed="300">
                          </div>
                      </li>

                  </ul>
                      <div className="tp-bannertimer tp-bottom"></div>
                    </div>
                </div>
            
              <div className="parallax-bg parallaxBg1">
                <div className="container content parallax-about">
                  <div className="title-box-v2">
                    <h2>About <span className="color-green">Fresh Market Grocery</span></h2>
                    <p>
                      Fresh Market Grocery is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software of Lorem Ipsum.
                    </p>
                  </div>
                </div>
              </div>
               <div className="container content">
                <div className="row margin-bottom-50">
                   <Category/>
                </div>
             </div>
           </div>
          <Footer />
        </>
    )
}
export default HomePage;