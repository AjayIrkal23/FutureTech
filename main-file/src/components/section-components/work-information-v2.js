import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class WorkInformationV2 extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.workprocessingv2

    return <div className="work-area common-pd-1">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="section-title text-center">
                    <h5 className="subtitle">{ data.subtitle }</h5>
                    <h3 className="title">{ data.title }</h3>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
               {  data.items.map( ( item, i )=> 
	                <div key={ i } className="col-lg-4 col-md-6">
	                  <div className="single-work text-center invest-go-top">
	                    <span className="common-icon-sq"><img src={publicUrl+item.icon} alt={ imagealt } /></span>
	                    <h4><Link to={ item.url }>{ item.title }</Link></h4>
	                    <p>{ item.content }</p>
	                    <Link className="btn btn-plus" to={ item.url }><i className="fa fa-plus" /></Link>
	                  </div>
	                </div>
                ) }

              </div>
            </div>
          </div>


        }
}

export default WorkInformationV2