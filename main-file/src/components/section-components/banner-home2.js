import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class BannerV2Home extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.bannerv2

    return <div className="banner-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="banner-inner text-center text-lg-left">
                  <p className="subtitle"><span>#1</span> { data.subtitle }</p>
                  <h2>{ data.title }</h2>
                  <p></p>
                  <div className="single-input-wrap">
                    <input placeholder="Inter your email address" type="text" className="single-input" />
                    <a className="btn btn-basic" href="#">Start Invest</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 align-self-center banner-thumb-wrap">
                <div className="banner-thumb item-bounce text-center d-none d-lg-block">
                  <img src={publicUrl+data.img} alt={ imagealt } />
                </div>
              </div>
            </div>
          </div>
        </div>

        }
}

export default BannerV2Home