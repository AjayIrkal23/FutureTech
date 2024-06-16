import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class BannerV3 extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.bannerv3


    return <div className="banner-consult consult-bg vanner-v3">
		  <div className="banner-silder">
		   { data.item.map( ( item, i )=> 
		    <div key={ i } className="banner-item">
		      <div className="banner-caption">
		        <div className="banner-inner">
		          <p className="subtitle"><span>#{ item.number }</span>{ item.subtitle }</p>
		          <h2>{ item.title } </h2>
		          <div className="timer" id="countdown" />
		          <div className="btn-wrapper">
		            <Link className="btn btn-basic animated fadeInUpBig mt-2" to={ item.url }>Start Invest</Link>
		            <a className="btn round animated fadeInUpBig mt-2" href="#">Download Pdf</a>
		          </div>
		        </div>
		      </div>
		    </div>
		    ) }
		  </div>
		</div>


        }
}

export default BannerV3