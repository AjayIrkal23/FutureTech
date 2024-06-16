import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import Video from './video-v2';

class FactCount extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.fanfact

    return <div className="shape-4" style={{backgroundImage: 'url('+publicUrl+'assets/img/shape/4.png)'}}>
        {/* fact-count area start */}
        <div className="fact-count-area common-pd-bottom">
          <div className="container">
            <div className="row justify-content-center">
            { data.items.map( ( item, i )=>
              <div  key={ i } className="col-lg-4 col-md-6">
                <div className="single-fact-count text-center">
                  <div className="thumb">
                    <img src={publicUrl+item.icon} alt={ imagealt } />
                  </div>
                  <h4 className="fact-title">{ item.title }</h4>
                  <h2 className="counter">{ item.number }</h2>
                </div>
              </div>
               ) }

            </div>
          </div>
        </div>
        {/* fact-count area end */}
        <Video />
      </div>

        }
}

export default FactCount