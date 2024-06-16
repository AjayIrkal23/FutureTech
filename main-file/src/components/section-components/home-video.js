import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class HomeVideo extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.homevideo

    return<div className="banner-area banner-video">
			  <div className="container-fluid">
			    <div className="row">
			      <div className="banner-video-area">
			        <video autoPlay muted loop id="myVideo">
			          <source src={publicUrl+data.video} type="video/mp4" />
			        </video>
			      </div>
			      {/*// Banner Video End*/}
			      <div className="slider-content-area">
			        <div className="slider-content">
			          <div className="container">
			            <div className="row justify-content-center">
			              <div className="col-lg-12">
			                <h2>{ data.title }</h2>
			                <h4 className="offer-text">{ data.subtitle }</h4>
			                <p className="text">{ data.content }
			                </p>
			                <div className="btn-wrapper animated fadeInUpBig text-left">
			                  <Link to={ data.url } className="btn btn-basic">Start Invest</Link>
			                  <a href={ data.videourl } className="video-popup mfp-iframe play-icon-pulse"><i className="fa fa-play" /></a>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/*Scroll Down*/}
			      <div className="scroll-down-area">
			        <div className="scroll-bottom">
			          <a href="#service" />
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default HomeVideo