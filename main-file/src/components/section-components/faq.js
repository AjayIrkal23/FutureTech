import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class Faq extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.faq

    return  <div className="faq">
		  <div className="container">
		    <div className="row justify-content-center">
		      <div className="col-xl-6 col-lg-6">
		        <div className="section-title text-center">
		          <h3>{ data.title }</h3>
		          <p>{ data.content }</p>
		        </div>
		      </div>
		    </div>
		    <div className="row">
		      <div className="col-xl-12 col-lg-12">
		        <div className="accordion" id="accordionExample">
		          <div className="row">
		            <div className="col-xl-6 col-lg-6">
		             { data.leftfaq.map( ( item, i )=> 
			              <div key={ i } className="card">
			                <div className="card-header">
			                  <h5 className="mb-0">
			                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target={"#collapse4"+i} aria-expanded="false" aria-controls="collapseThree">
			                      { item.title }
			                    </button>
			                  </h5>
			                </div>
			                <div id={"collapse4"+i} className="collapse" data-parent="#accordionExample">
			                  <div className="card-body">
			                    { item.content }
			                  </div>
			                </div>
			              </div>
		              ) }
		            </div>
		            <div className="col-xl-6 col-lg-6">
		             { data.leftfaq.map( ( item, i )=>
		              <div key={ i } className="card">
		                <div className="card-header">
		                  <h5 className="mb-0">
		                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target={"#collapse8"+i} aria-expanded="false" aria-controls="collapseThree">
		                     { item.title }
		                    </button>
		                  </h5>
		                </div>
		                <div id={"collapse8"+i} className="collapse" data-parent="#accordionExample">
		                  <div className="card-body">
		                   { item.content }
		                  </div>
		                </div>
		              </div>
		              ) }
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
        }
}

export default Faq