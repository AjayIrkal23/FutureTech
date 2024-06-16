import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class LatestPost extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.latestpost

    return <div className="blog-area common-pd-bottom">
            <div className="container">
              <div className="row justify-content-center">
              	{ data.items.map( (item, i)=> 
	                <div key={ i } className="col-lg-4 col-md-6">
	                  <div className="single-blog-wrap">
	                    <div className="thumb">
	                      <img src={publicUrl+item.img} alt={ imagealt }/>
	                    </div>
	                    <div className="blog-details">
	                      <h5>{ item.title }</h5>
	                      <span><i className="fa fa-user" />{ item.author }</span>
	                      <span><i className="fa fa-clock-o" />{ item.date }</span>
	                      <p>{ data.content }</p>
	                      <div className="blog-btn text-center invest-go-top">
	                        <Link className="btn btn-white bottom-right-radius-0" to={ item.url }>Read More<i className="fa fa-long-arrow-right" /></Link>
	                      </div>
	                    </div>
	                  </div>
	                </div>
                ) }

              </div>
            </div>
          </div>


        }
}

export default LatestPost