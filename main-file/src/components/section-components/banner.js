import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Banner extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.banner

    return <div className="banner-area-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="banner-inner text-center text-lg-left">
                <p className="subtitle">{ data.subtitle }</p>
                <h2>{ data.title }</h2>
                <p>{ data.content }</p>
                <div className="single-input-wrap">
                  <form method="GET">
                  <input name="email" placeholder="Inter your email address" type="text" className="single-input" />
                  <input type="submit" className="btn btn-basic" value="Start Invest" />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center banner-thumb-wrap">
              <div className="banner-thumb item-bounce text-center d-none d-lg-block">
                <img src={publicUrl+data.img} alt={ imagealt }/>
              </div>
            </div>
          </div>
        </div>
      </div>


        }
}

export default Banner