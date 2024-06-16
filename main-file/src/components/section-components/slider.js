 import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Slider extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.slider

    return <div className="banner-v3-area banner-v3-bg">
			  {/* banner slider area start */}
			  <div className="banner-v3-slider-area-wrapper animated" data-animation-in="slideInDown">
			  	{ data.items.map( ( item, i )=> 
				    <div key={ i } className="banner-slider-item">
				      <div className="container">
				        <div className="row">
				          <div className="col-lg-7">
				            <div className="banner-inner-wrap">
				              <div className="banner-inner">
				                {/* banner inner */}
				                <p className="subtitle">{ item.subtitle }</p>
				                <h2> { item.title }</h2>
				                <div className="btn-wrapper animated fadeInUpBig text-left">
				                  <Link to="investment" className="btn btn-basic">Start Invest</Link>
				                  <a href={ item.videourl } className="video-popup mfp-iframe play-icon-pulse"><i className="fa fa-play" /></a>
				                </div>
				              </div>
				              {/* //.banner inner */}
				            </div>
				          </div>
				          <div className="col-lg-5 d-none d-lg-block">
				            <div className="banner-image">
				              <div className="banner-slide-image animated" data-animation-in="slideInUp">
				                <img src={publicUrl+item.img } alt={ imagealt } />
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>
			    ) }
			  </div>
			  {/* banner slider area end */}
			  {/* banner slider controls start */}
			  <div className="banner-v3-slider-controls">
			    <div className="slider-nav" />
			    {/*slider-nav*/}
			    <div className="slider-extra">
			      <div className="text">
			        <span className="first">01</span>
			      </div>
			      {/*text*/}
			      <div className="slider-progress">
			        <span className="progress-bg" />
			        <span className="progress-width" />
			      </div>
			      {/*progressbar*/}
			    </div>
			    {/*slider-extra*/}
			  </div>
			  {/* banner slider controls end */}
			  {/*Scroll Down*/}
			  <div className="scroll-down-area">
			    <div className="scroll-bottom">
			      <a href="#service" />
			    </div>
			  </div>
			</div>

        }
}

export default Slider