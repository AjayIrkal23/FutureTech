import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class BrandV2 extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.banner

    return  <div className="partner-bg" style={{backgroundImage: 'url('+publicUrl+'assets/img/shape/blog-shape.png)'}}>
			  <div className="partner-area right-bottom2-line-bg pd-top-35  common-pd-bottom-4" style={{backgroundImage: 'url('+publicUrl+'assets/img/shape/pen-3.png)'}}>
			    <div className="container">
			      <div className="row">
			        <div className="col-lg-12">
			          <div className="partner-slider owl-carousel owl-theme">
			            <div className="item">
			              <a href="#"><img src={publicUrl+"assets/img/partner/03.png"} alt="client" /></a>
			            </div>
			            <div className="item">
			              <a href="#"><img src={publicUrl+"assets/img/partner/02.png"} alt="client" /></a>
			            </div>
			            <div className="item">
			              <a href="#"><img src={publicUrl+"assets/img/partner/03.png"} alt="client" /></a>
			            </div>
			            <div className="item">
			              <a href="#"><img src={publicUrl+"assets/img/partner/04.png"} alt="client" /></a>
			            </div>
			            <div className="item">
			              <a href="#"><img src={publicUrl+"assets/img/partner/03.png"} alt="client" /></a>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>


        }
}

export default BrandV2