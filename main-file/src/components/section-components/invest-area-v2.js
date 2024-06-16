import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class InvestAreaV2 extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.investareav2

    return <div className="featured-area left-line-bg common-pd-bottom-3" style={{backgroundImage: 'url('+publicUrl+'assets/img/shape/pen.png)'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 text-lg-left text-center">
              <div className="section-title">
                <h5 className="subtitle"><span />{ data.subtitle }</h5>
                <h3 className="title">{ data.title }</h3>
                <p>{ data.content }</p>
              </div>
              <div className="single-input-wrap">
                <input placeholder="Inter your email address" type="text" className="single-input" />
                <Link className="btn btn-basic" to="/invest">Start Invest</Link>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 col-6 align-self-center">
              <div className="thumb item-bounce">
                <img src={publicUrl+data.img} alt={ imagealt } />
              </div>
            </div>
          </div>
        </div>
      </div>


        }
}

export default InvestAreaV2