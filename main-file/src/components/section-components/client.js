import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Client extends Component {

	componentDidMount() {

	    const $ = window.$;
	    
	    let publicUrl = process.env.PUBLIC_URL+'/'
	    let imagealt = 'image'

	  $('.testimonial-main-slider').slick({
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        dots: false,
	        arrows: true,
	        fade: true,
	        prevArrow: '<span class="slick-prev"><img src="'+publicUrl+'assets/img/icon/arrow-left-blue.png" alt="img" /></span>',
	        nextArrow: '<span class="slick-next"><img src="'+publicUrl+'assets/img/icon/arrow-right-pink.png" alt="img" /></span>',
	        asNavFor: '.testimonial-thumb-slider'
	    });
	    
	    $('.testimonial-thumb-slider').slick({
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        asNavFor: '.testimonial-main-slider',
	        dots: false,
	        fade: true,
	    });
   }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.client

    return <div className="shape-3" style={{backgroundImage: 'url('+publicUrl+'assets/img/shape/3.png)'}}>
        {/* testimonial-area start */}
        <div className="testimonial-area pd-top-80 common-pd-bottom left-bottom-line-bg" style={{backgroundImage: 'url('+publicUrl+'assets/img/shape/pen.png)'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="testimonial-main-slider">
                	{ data.items.map( (item, i)=> 
	                  <div key={ i } className="item">
	                    <div className="single-main-client">
	                      <div className="section-title text-lg-left text-center">
	                        <h5 className="subtitle"><span />{ item.subtitle }</h5>
	                        <h3 className="title">{ item.title }</h3>
	                        <p>{ item.content }</p>
	                      </div>
	                      <div className="client-info text-lg-left text-center">
	                        <h6>{ item.name }</h6>
	                        <p>{ item.designation }</p>
	                      </div>
	                    </div>
	                  </div>
                  ) }
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="testimonial-thumb-slider-wrap">
                  { data.items.map( (item, i)=>
                    <img key={ i } className={"testimonial-thumb-slider--img testimonial-thumb-slider--img-"+item.number} src={publicUrl+item.img} alt="img" />
                  ) }

                  <div className="testimonial-thumb-slider-img testimonial-thumb-slider">
                  { data.items.map( (item, i)=> 
                    <div key={ i } className="item">
                      <div className="single-thumb-client">
                        <img src={publicUrl+item.img} alt="img" />
                      </div>
                    </div>
                    ) }

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* testimonial-area end */}
      </div>


        }
}

export default Client