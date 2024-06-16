import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Brand extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.brand

    return  <div className="shape-5" style={{backgroundImage: 'url('+publicUrl+'assets/img/shape/5.png)'}}>
          {/* client area start */}
          <div className="partner-area common-pd-bottom-4 right-bottom-line-bg" style={{backgroundImage: 'url('+publicUrl+'assets/img/shape/pen-3.png)'}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="partner-slider owl-carousel owl-theme">
                  	{ data.items.map( ( item, i )=> 
	                    <div key={ i } className="item">
	                      <a href="#"><img src={publicUrl+item.img} alt={ imagealt } /></a>
	                    </div>
                    ) }

                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* client area end */}
        </div>

        }
}

export default Brand